import key from './apiKey.js';

export const fetchFilms = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    throw new Error('Response not okay');
  }
}

export const buildUrl = (url) => {
  return url+key;
}