const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options, controller, pageSize, actualPage) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  options.controller = controller;
  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  if (pageSize && actualPage) {
    const firstItem = (pageSize * actualPage) - pageSize
    const pages = Math.ceil(data.length / pageSize)
    let rockers = {}
    rockers.results = data.slice(firstItem, firstItem + pageSize)
    rockers.options = {
      resultsLength: data.length,
      pages: pages
    }
    return rockers
  }
  return data;
  // return data; 
}

const api = {
  rockers: {
    list(pageSize, actualPage, controller) {
      return callApi('/rockers', {},controller, pageSize, actualPage);
    },
    create(rocker) {
      return callApi(`/rockers`, {
        method: 'POST',
        body: JSON.stringify(rocker),
      });
    },
    read(rockerId) {
      return callApi(`/rockers/${rockerId}`, {});
    },
    update(rockerId, updates) {
      return callApi(`/rockers/${rockerId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(rockerId) {
      return callApi(`/rockers/${rockerId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
