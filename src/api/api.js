import * as axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://mighty-savannah-43410.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const carsApi = {
  getCars(filtersData = {}) {
    let searchQuery = '';
    for (let [field, value] of Object.entries(filtersData)) {
      searchQuery += `${searchQuery ? '&' : '?'}${field}=${
        value ? value : ''
      }`;
    }
    return baseApi
      .get(`/cars${searchQuery}`)
      .then((response) => response.data);
  }
};
