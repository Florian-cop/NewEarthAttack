function AlbumBox({ imageSrc, albumName, urlSpotify, albumId, openPopup }) {
    return (
      <div
        className="album-box"
        onClick={() =>
          openPopup({ name: albumName, imageSrc, urlSpotify, albumId })
        }
      >
        <img src={imageSrc[0].url} alt={"Earth Attack" + albumName} className="album-image" />
      </div>
    );
  }

export default AlbumBox;
