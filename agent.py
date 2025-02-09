
# Import necessary libraries
import os
from typing import Type
import re
import json
from dotenv import load_dotenv
from langchain import hub
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain.pydantic_v1 import BaseModel, Field
from langchain_core.tools import BaseTool
from langchain_openai import ChatOpenAI
load_dotenv()

# Pydantic models for tool arguments


def crypto_agent(token_address):


    class SimpleSearchInput(BaseModel):
        query: str = Field(description="should be a search query")


    class MultiplyNumbersArgs(BaseModel):
        x: float = Field(description="First number to multiply")
        y: float = Field(description="Second number to multiply")


    # Custom tool with only custom input


    class SimpleSearchTool(BaseTool):
        name: str = "simple_search"
        description: str = "useful for when you need to answer questions about current events"
        args_schema: Type[BaseModel] = SimpleSearchInput

        def _run(
            self,
            query: str,
        ) -> str:
            """Use the tool."""
            from tavily import TavilyClient

            #api_key = os.getenv("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")
            client = TavilyClient(api_key="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")
            results = client.search(query=query)
            return f"Search results for: {query}\n\n\n{results}\n"



    # Create tools using the Pydantic subclass approach
    tools = [
        SimpleSearchTool()
    ]

    # Initialize a ChatOpenAI model
    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

    # Pull the prompt template from the hub
    prompt = hub.pull("hwchase17/openai-tools-agent")

    # Create the ReAct agent using the create_tool_calling_agent function
    agent = create_tool_calling_agent(
        llm=llm,
        tools=tools,
        prompt=prompt,
    )

    # Create the agent executor
    agent_executor = AgentExecutor.from_agent_and_tools(
        agent=agent,
        tools=tools,
        verbose=True,
        handle_parsing_errors=True,
    )

    # Test the agent with sample queries
    # Define the input query for the agent



    # Example token address (you can replace this with a dynamic input)
    token_address1 = token_address

    # Your query with the placeholder for token address
    query = """
    You are an expert in cryptocurrency analysis. For the given token address, perform the following tasks using simple_search:

    1. **Find the Coin Name**: Use simple_search to determine the name of the cryptocurrency associated with {token_address}.
    2. **Research the Creator**: Use simple_search to gather information about the creator and qualifications to host the cryptocurrency.
    3. **Analyze Legitimacy**: Use simple_search to assess the legitimacy of the cryptocurrency, checking for signs of rug pulls, contract audits, liquidity pools, and other security indicators.

    **Final Output**: Format the results as a JSON object with the following structure:
    {{
    'name' : "coin_name 🪙",  # The cryptocurrency name with an appropriate emoji.
    'owner_portfolio' : "creator_qualifications 📜",  # A brief description of the creator's background and qualifications.
    'coin_legitimacy' : "legitimacy_assessment ✅/❌"  # A short assessment of the coin's legitimacy, with an emoji indicating whether it's legitimate or not.
    }}

    Ensure the analysis is concise but thorough, with relevant information, clear explanations, and emojis to enhance the clarity.
    """.format(token_address=token_address1)

    # Invoke the agent with the dynamically formatted query
    response = agent_executor.invoke({"input": query})

    # Extract and print the response
    output = response.get('output')
    #print(output)

    def parse_crypto_response(output):
        # Extract JSON content using regex
        json_match = re.search(r'```json(.*?)```', output, re.DOTALL)
        
        if json_match:
            json_str = json_match.group(1).strip()
            try:
                # Convert JSON string to Python dictionary
                return json.loads(json_str)
            except json.JSONDecodeError:
                raise ValueError("Found JSON content but couldn't parse it")
        raise ValueError("No JSON found in the response")


    parsed_json = parse_crypto_response(output)
    print(parsed_json)  # This will print the clean JSON dictionary
    return parsed_json
    # Access individual fields like this:
    # print(f"Coin Name: {parsed_json['name']}")
    # print(f"Creator Info: {parsed_json['owner_portfolio']}")
    # print(f"Legitimacy: {parsed_json['coin_legitimacy']}")