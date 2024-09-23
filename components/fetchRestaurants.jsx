const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('/api?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data' }),
    };
  }
};
