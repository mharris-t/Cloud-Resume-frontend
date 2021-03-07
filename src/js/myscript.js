const visitorcount_api_url = 'https://g7tsy9xtg6.execute-api.us-east-1.amazonaws.com/Prod/myVisitCounter/'
async function getData() {
    const response = await fetch(visitorcount_api_url);
    const data = await response.json();
    const {WebsiteCounter} = data;
    document.getElementById('mycounter').textContent = WebsiteCounter;
    console.log(data);
}
getData();
