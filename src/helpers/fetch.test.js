import { fetchFilms } from './fetch';

describe('fetchFilms', () => {
  let mockUrl;
  let mockData;

  beforeEach(() => {
    mockUrl = 'www.howlsmoviecastle.com'
    mockData = {
      name: 'Ponyo',
      director: 'Miyazaki',
      id: 1
    }
    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }))
  })

  it('should call fetch with the correct parameters', () => {
    fetchFilms(mockUrl)
    expect(fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return the expected data', async () => {
    const result = await fetchFilms(mockUrl)
    expect(result).toEqual(mockData)
  })

  it('should throw error if response fails', async() => {
    fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: false
    }))
    try {
      await fetchFilms(mockUrl)
    } catch(error) {
      expect(error.message).toBe('Response not okay')
    }
  })

})
