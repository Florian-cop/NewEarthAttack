const clientId = '9b34c7670e78427eb6a8c98fe10f693f';
const clientSecret = '4cd2078c7ada47ecb7c72e8b7cee9633';

const getToken = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
  
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
      body: params,
    });
  
    const data = await response.json();
    return data.access_token;
  };
  
  const getTracks = async (accessToken, artistId) => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const data = await response.json();
    return data.tracks;
  };

  const getAlbums = async (accessToken, artistId) => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const data = await response.json();
    return data.items;
  };

  const getAlbumTracks = async (accessToken, albumId) => {
    const response = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    const data = await response.json();
    return data.items;
  };
  
  export { getToken, getTracks, getAlbums, getAlbumTracks };
