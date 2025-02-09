import os
import json
from typing import Type
from dotenv import load_dotenv
from langchain import hub
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain.pydantic_v1 import BaseModel, Field
from langchain_core.tools import BaseTool
from langchain_openai import ChatOpenAI
from tavily import TavilyClient

load_dotenv()

# Initialize Tavily client
tavily = TavilyClient(api_key=os.getenv("TAVILY_API_KEY"))

# Pydantic models for tool arguments
class TokenAddressInput(BaseModel):
    token_address: str = Field(description="Cryptocurrency token address")

class CoinNameInput(BaseModel):
    coin_name: str = Field(description="Name of the cryptocurrency")

class CreatorSearchInput(BaseModel):
    creator_info: str = Field(description="Creator name or identifying information")

# Custom tools
class CoinNameFinderTool(BaseTool):
    name: str = "find_coin_name"
    description: str = "Finds cryptocurrency name from token address"
    args_schema: Type[BaseModel] = TokenAddressInput

    def _run(self, token_address: str) -> str:
        results = tavily.search(query=f"Cryptocurrency token address {token_address} name identification")
        return f"Coin name information for {token_address}: {results['results']}"

class CreatorResearchTool(BaseTool):
    name: str = "research_creator"
    description: str = "Researches cryptocurrency creator's background and qualifications"
    args_schema: Type[BaseModel] = CreatorSearchInput

    def _run(self, creator_info: str) -> str:
        results = tavily.search(query=f"Background and qualifications of {creator_info} cryptocurrency creator")
        return f"Creator profile information: {results['results']}"

class LegitimacyCheckerTool(BaseTool):
    name: str = "check_legitimacy"
    description: str = "Checks cryptocurrency legitimacy and rug pull potential"
    args_schema: Type[BaseModel] = CoinNameInput

    def _run(self, coin_name: str) -> str:
        query = f"{coin_name} cryptocurrency legitimacy audit: contract details, liquidity pools, audits, rug pull indicators"
        results = tavily.search(query=query)
        return f"Legitimacy analysis for {coin_name}: {results['results']}"

# Initialize components
tools = [CoinNameFinderTool(), CreatorResearchTool(), LegitimacyCheckerTool()]
llm = ChatOpenAI(model="gpt-4o-mini")
prompt = hub.pull("hwchase17/openai-tools-agent")

# Custom prompt template modification
custom_instructions = """You are a cryptocurrency analysis expert. For the given token address:
1. First identify the coin name using find_coin_name
2. Research the creator using research_creator
3. Analyze legitimacy using check_legitimacy
4. Format final answer as JSON with structure: 
{{
  "name": "coin_name 🪙",
  "owner_portfolio": "creator_qualifications 📜",
  "coin_legitimacy": "legitimacy_assessment ✅/❌"
}}
Include relevant emojis in values. Be concise but thorough in analysis."""

prompt.messages[0].prompt.template = custom_instructions

# Create agent
agent = create_tool_calling_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Example usage
def analyze_token(token_address: str):
    response = agent_executor.invoke({"input": f"Token address: {token_address}"})
    
    try:
        # Attempt to parse JSON from response
        return json.loads(response['output'].replace("```json", "").replace("```", "").strip())
    except:
        # Fallback for potential formatting issues
        return {
            "name": "Error: Could not parse response ❌",
            "owner_portfolio": "N/A",
            "coin_legitimacy": "N/A"
        }

# Example usage
if __name__ == "__main__":
    token_address = "0x1234567890abcdef"  # Replace with actual token address
    result = analyze_token(token_address)
    print(json.dumps(result, indent=2))