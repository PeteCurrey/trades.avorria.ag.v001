import requests
import re

def verify():
    urls = [
        "https://trades-avorria-ag-v001.vercel.app/",
        "https://trades-avorria-ag-v001.vercel.app/packages"
    ]
    
    results = {}
    
    # 1. Hero spacing
    r = requests.get(urls[0])
    results['hero_spacing'] = "specialist\ndigital partner for" in r.text or "specialist\n            digital partner for" in r.text or "specialist<br />\n            digital partner for" in r.text or "specialist<br />digital partner for" in r.text
    
    # 2. Stats counters
    results['stats_counters'] = r.text.count('data-counter="500"') > 0
    
    # 3. Trust bar
    results['trust_bar'] = r.text.count("Gas Safe Registered Websites")
    
    # 4. Pricing
    r_pkg = requests.get(urls[1])
    results['price_999'] = r_pkg.text.count("£999") > 0
    results['price_799'] = r_pkg.text.count("£799") > 0
    results['price_1799'] = r_pkg.text.count("£1,799") > 0
    results['price_3499'] = r_pkg.text.count("£3,499") > 0
    
    # 5. Nav
    results['nav_workbench'] = r.text.count("the-workbench") > 0
    
    # 6. Footer
    results['footer_resources'] = r.text.count("Resources") > 0
    
    for k, v in results.items():
        print(f"{k}: {v}")

if __name__ == "__main__":
    verify()
