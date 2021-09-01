var newsURL = 'http://localhost:5000/data/latestNews';
var weatherURL = 'http://localhost:5000/data/weather';

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  return Promise.all([fetch(newsURL),fetch(weatherURL)])
  .then(([respNes,respWea]) => {
    return Promise.all([respNes.json(),respWea.json()])
  })
  .then(([json1,json2]) => {
    return {news:json1.data,weather:json2};
  })
}

//! 이것도 됨
// function getNewsAndWeatherAll() {
//   // TODO: Promise.all을 이용해 작성합니다
//   return Promise.all([newsURL,weatherURL].map(
//     (url) => fetch(url)
//   )).then((fetched) => {
//     const parsed = fetched.map(res => res.json())
//     return Promise.all(parsed);
//   }).then(parsed => {
//     const news = parsed[0].data;
//     const weather = parsed[1];
//     return {news, weather}
//   })
// }

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}