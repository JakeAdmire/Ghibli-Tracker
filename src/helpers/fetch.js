export const fetch = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch(error) {
    throw new Error('Response not okay');
  }
}