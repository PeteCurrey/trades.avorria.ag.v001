const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

async function verify() {
  const home = await get('https://trades-avorria-ag-v001.vercel.app/');
  const packages = await get('https://trades-avorria-ag-v001.vercel.app/packages');

  const results = {
    hero_spacing: home.includes('specialist<br />digital partner for') || home.includes('specialist<br />\n            digital partner for') || home.includes('specialist\n            <br />\n            digital partner for'),
    stats_counters: (home.match(/data-counter="500"/g) || []).length > 0,
    trust_bar_count: (home.match(/Gas Safe Registered Websites/g) || []).length,
    price_999: packages.includes('£999'),
    price_799: packages.includes('£799'),
    price_1799: packages.includes('£1,799'),
    price_3499: packages.includes('£3,499'),
    nav_workbench: home.includes('the-workbench'),
    footer_resources: home.includes('Resources')
  };

  console.log(JSON.stringify(results, null, 2));
}

verify();
