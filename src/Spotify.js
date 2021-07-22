import SpotifyWrapper from 'spotify-wrapper';

const SPOTIFY_API_TOKEN = process.env.SPOTIFY_API_TOKEN;

const spotify = new SpotifyWrapper({
  token: SPOTIFY_API_TOKEN,
});

export default spotify;
