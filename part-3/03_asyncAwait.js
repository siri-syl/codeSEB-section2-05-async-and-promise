var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const json1 = await fetch(newsURL).then((response) => response.json())
  const json2 = await fetch(weatherURL).then((response) => response.json())
  return {news:json1.data, weather:json2};
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}