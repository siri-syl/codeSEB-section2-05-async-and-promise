var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  // 요즘은 axios를 쓴다. fetch에 유용한 기능을 더 추가한 것.
  return fetch(newsURL)
  .then((response) => response.json())
  .then((json) => {
    return fetch(weatherURL)
    .then((response2) => response2.json())
    .then((json2) =>{
      return {news:json.data, weather:json2}
    })
  })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}