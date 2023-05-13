import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import imageCenterLogo from '../Image/EA-LOGO-F2022-blanc-Sans-FOND-Mini.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from './SocialIcons';
import { faDeezer, faSpotify, faYoutube, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const VideoContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
`;

const Video = styled.video`
  position: fixed; // Modifiez ici en 'fixed'
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

const ControlButtons = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 10px;
  z-index: 1; // Ajoutez un z-index pour que les boutons soient au-dessus de la vidéo

  @media (max-width: 768px) {
    display:none;
  }

`;

const Button = styled.button`
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background: transparent;

  &:hover {
    background: #555;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px; // Ajustez la taille des icônes si nécessaire
`;

const CenterLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


`;

const Logo = styled.img`
  height: auto; // Conserver le ratio hauteur/largeur
  max-width: 50%; // Rendre l'image responsive
  min-width: 200px; // Rendre l'image responsive
  opacity: 0.7;

`;



const LogoText = styled.a`
  font-size: 3vw; // Ajustez la taille du texte si nécessaire
  color: #fff;
  text-decoration: none;
  position: absolute;
  top: calc(85%);
  transform: translateX(-50%);
  transition: all 0.3s;

  &:hover {
    color: #ff0;
    text-shadow: 0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0;
  }

  @media (max-width: 768px) {
    top: 80%;
    font-size: 25px;
  }
`;

const BackgroundVideo = ({ videoSrc }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const socialLinks = [
      { icon: faDeezer, url: 'https://www.deezer.com/', color: '#FF0000' },
      { icon: faSpotify, url: 'https://open.spotify.com/artist/3vppTGRQJhWqqvfCjtKE6b', color: '#1DB954' },
      { icon: faYoutube, url: 'https://www.youtube.com/', color: '#FF0000' },
      { icon: faInstagram, url: 'https://www.instagram.com/', color: '#C13584' },
      { icon: faTwitter, url: 'https://twitter.com/band_attack', color: '#1DA1F2' },
      { icon: faFacebook, url: 'https://www.facebook.com/', color: '#1877F2' },
    ];

    const handleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !isMuted;
    };

    const handlePause = () => {
        setIsPaused(!isPaused);
        if (isPaused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
      <VideoContainer>
        <Video src={videoSrc} ref={videoRef} autoPlay muted loop />
        <ControlButtons>
          <Button onClick={handleMute}>
            <Icon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </Button>
          <Button onClick={handlePause}>
            <Icon icon={isPaused ? faPlay : faPause} />
          </Button>
        </ControlButtons>
        <SocialIcons socialLinks={socialLinks}></SocialIcons>
        <CenterLogo>
          <Logo src={imageCenterLogo} alt="Logo Earth Attack" />
        </CenterLogo>
        <LogoText>NEW EP HERE</LogoText>
    </VideoContainer>
    );
};

export default BackgroundVideo;
