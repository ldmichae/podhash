'use server'

const getQueryCreds = () => {
  if(!process.env.API_KEY || !process.env.API_SECRET) throw new Error('API_KEY and API_SECRET must be set')
  let crypto = require('crypto');
  const apiHeaderTime = Math.floor(Date.now()/1000);
  const sha1Algorithm = "sha1"; var sha1Hash = crypto.createHash(sha1Algorithm);
  const data4Hash = process.env.API_KEY + process.env.API_SECRET + apiHeaderTime;
  sha1Hash.update(data4Hash);
  const hash4Header = sha1Hash.digest('hex');
  return {
    "X-Auth-Date": ""+apiHeaderTime,
    "X-Auth-Key": process.env.API_KEY,
    "Authorization": hash4Header
  }
}

export const searchFeedsByTerm = async (term: string) => {
  const baseURL = "https://api.podcastindex.org/api/1.0/search/byterm?q="

  const options = {
    method: 'GET',
    headers: {
      ...getQueryCreds()
    }
  }

  try{
    const response = await fetch(baseURL + term + '&max=10&aponly&clean=true', options)
    return response.json()
  } catch(e){
    throw new Error('Failed to fetch podcasts')
  }
}

export const getFeedDetails = async (feedId: string) => {
  const baseURL = "https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id="

  const options = {
    method: 'GET',
    headers: {
      ...getQueryCreds()
    }
  }

  try{
    const response = await fetch(baseURL + feedId, options)
    return response.json()
  } catch(e){
    throw new Error('Failed to fetch episodes')
  }
}

export const getFeedEpisodes = async (feedId: string) => {
  const baseURL = "https://api.podcastindex.org/api/1.0/episodes/byfeedid?id="

  const options = {
    method: 'GET',
    headers: {
      ...getQueryCreds()
    }
  }

  try{
    const response = await fetch(baseURL + feedId, options)
    return response.json()
  } catch(e){
    throw new Error('Failed to fetch episodes')
  }
}