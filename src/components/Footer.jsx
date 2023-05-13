import React from 'react';
import '../Style/Footer.css';
import SocialIcons from './SocialIcons';
import { faDeezer, faSpotify, faYoutube, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialLinks = [
    { icon: faDeezer, url: 'https://www.deezer.com/', color: '#FF0000' },
    { icon: faSpotify, url: 'https://open.spotify.com/artist/3vppTGRQJhWqqvfCjtKE6b', color: '#1DB954' },
    { icon: faYoutube, url: 'https://www.youtube.com/', color: '#FF0000' },
    { icon: faInstagram, url: 'https://www.instagram.com/', color: '#C13584' },
    { icon: faTwitter, url: 'https://twitter.com/band_attack', color: '#1DA1F2' },
    { icon: faFacebook, url: 'https://www.facebook.com/', color: '#1877F2' },
  ];

  return (
    <footer className="footer">
      {/* <SocialIcons socialLinks={socialLinks} direction={"middle"}></SocialIcons> */}
      © Copyright 2023 - Earth Attack - FCOP - All Rights Reserved
    </footer>
  );
};

export default Footer;
