import requests
from pprint import pprint
from bs4 import BeautifulSoup


def web_scrape(token_address):
    #Structure payload.
    payload = {
    'source': 'universal',
    'render': 'html',
    'url': f'https://check.quillai.network/solana/{token_address}'
    }

    #Get response.
    response = requests.request(
        'POST',
        'https://realtime.oxylabs.io/v1/queries',
        auth=('guhan_LzlNR', 'Guhantheboss_123'), #Your credentials go here
        json=payload,
    )

    #Instead of response with job status and results url, this will return the
    #JSON response with results.
    #pprint(response.json())



    #Continue from pprint(response.json())
    data = response.json()
    html_content = data['results'][0]['content']

    #Parse HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Extract h4 text directly using list comprehension
    check_titles = [h4.get_text(strip=True) for h4 in soup.find_all('h4', class_='text-left text-sm font-medium md:text-base')]

    # # Print formatted results
    # print("\nCode Security Checks Found:")
    # print("=" * 50)
    # for i, title in enumerate(check_titles, 1):
    #     print(f"{i}. {title}")

    print("\nList format:")
    return check_titles



web_scrape("HAWKThXRcNL9ZGZKqgUXLm4W8tnRZ7U6MVdEepSutj34")