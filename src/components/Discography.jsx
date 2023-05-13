import React, { useEffect, useState } from 'react';
import { getToken, getTracks, getAlbums } from './Api/spotifyApi';
import { Link } from 'react-router-dom';
import '../Style/Discography.css';
import AlbumBox from './AlbumBox';
// import EpAbyss from '../Image/Morceaux/EP-Abyss.jpg';
// import SingleFracture from '../Image/Morceaux/Single-Fracture.jpg';
// import SingleLetMeOut from '../Image/Morceaux/Single-LetMeOut.jpg';
// import SingleNebulous from '../Image/Morceaux/Single-Nebulous.jpg';

function Discography() {
	const [selectedAlbum, setSelectedAlbum] = useState(null);
	const [tracks, setTracks] = useState([]);
	const [albums, setAlbums] = useState([]);
	// const epAlbums = tracks.filter((track) => track.album.total_tracks > 1);
	// const singleAlbums = tracks.filter((track) => track.album.total_tracks <= 1);
	const epAlbums = albums.filter((album) => album.total_tracks > 1);
	const singleAlbums = albums.filter((album) => album.total_tracks <= 1);

	const openPopup = (albumInfo) => {
		setSelectedAlbum(albumInfo);
	};

	const closePopup = () => {
		setSelectedAlbum(null);
	};

	const epAlbumComponents = epAlbums.map((album, index) => (
		<AlbumBox
			key={index}
			imageSrc={album.images}
			albumName={album.name}
			urlSpotify={album.external_urls.spotify}
			albumId={"https://open.spotify.com/embed/album/" + album.id}
			openPopup={openPopup}
		/>
	));
	
	const singleAlbumComponents = singleAlbums.map((album, index) => (
		<AlbumBox
			key={index}
			imageSrc={album.images}
			albumName={album.name}
			urlSpotify={album.external_urls.spotify}
			albumId={"https://open.spotify.com/embed/album/" + album.id}
			openPopup={openPopup}
		/>
	));
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getToken();
      const artistId = '3vppTGRQJhWqqvfCjtKE6b'
      const tracksData = await getTracks(accessToken, artistId);
	  const albumsData = await getAlbums(accessToken, artistId);
      setTracks(tracksData);
	  setAlbums(albumsData);
    };

    fetchData();
  }, []);
  console.log(selectedAlbum);
  return (
      <div className="discography-container">
        <h1 className="custom-title custom-title-first-title">EP</h1>
        <div className="albums-container ep-albums-container">
          {epAlbumComponents}
        </div>
        <h1 className="custom-title">Singles</h1>
        <div className="albums-container">
			{singleAlbumComponents}
        </div>
        {selectedAlbum && (
          <div className="overlay" onClick={closePopup}>
            <div className="album-popup">
              <button className="close-button" onClick={closePopup}>X</button>
              <img
                src={selectedAlbum.imageSrc[1].url}
                alt={"Earth Attack" + selectedAlbum.name}
                className="album-popup-image"
              />

              <div className="album-popup-details">
                <h2>{selectedAlbum.name}</h2>
                <p>{selectedAlbum.details}</p>
				<iframe
					title="Spotify Album Player"
					style={{ borderRadius: '0px' }}
					width="100%"
					height="160"
					frameBorder="0"
					allowFullScreen
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
					className="optanon-category-C0003"
					src={selectedAlbum.albumId}
					// src="https://open.spotify.com/embed/album/3my2peJtfBhAQ8nT9W66JH"
				/>
                <p className='pop-pup-link'><Link to="/"  target="_blank" rel="noopener noreferrer">Listen</Link></p>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default Discography;
