import axios from 'axios';

const FetchSpotifyAccessToken = async (code) => {
  try {
    return axios.post('/api/spotify-token', { code }).then((response) => response.data.access_token);
  } catch (e) {
    console.log(e);
  }
};

export default FetchSpotifyAccessToken;