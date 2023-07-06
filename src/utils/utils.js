export const getUrl = () => {
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
  .then(response => response.json()?.entry)
  .then(data => console.log(data));
}

export default getUrl;