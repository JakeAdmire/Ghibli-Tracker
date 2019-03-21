// import { key } from './apiKey.js';

export const fetchFilms = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data
  } catch(error) {
    throw new Error('Response not okay');
  }
}

// export const buildUrl = (url) => {
//   console.log( url.split('?&').splice() );

//   return url;
// }