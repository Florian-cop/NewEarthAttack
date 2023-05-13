import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import yourImage from '../Image/logo-navbar.png'; // Remplacez par le chemin de votre image

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center; // Centre les balises texte au milieu de la page
  align-items: center;
  background: transparent;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const NavItemsRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItemsLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(Link)`
  font-family: 'Metal Mania', cursive;
  color: #f39c12;
  letter-spacing: 2px;
  margin: 0 15px; // Ajuster les marges pour recentrer les éléments
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; // Supprime le soulignement du texte
  font-size: 1.5vmax ; // Augmente la taille du texte

  &:hover {
    color: #e67e22;
    transform: scale(1.1);
  }
`;

const Logo = styled.img`
  height: auto; // Conserver le ratio hauteur/largeur
  max-width: 70%; // Rendre l'image responsive
`;

const Overlay = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Popup = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  background-color: rgba(70, 70, 70, 0.95);
  padding: 20px;
  width: 50%; // Augmente la largeur de la popup
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: auto; // Ajoute un scroll si le contenu dépasse la hauteur ou la largeur de la popup
`;

const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  font-size: 24px; // Augmente la taille du bouton Close
  color: #f39c12;
  cursor: pointer;

  &:hover {
    color: #e67e22;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  font-size: 28px;
  color: #f39c12;
  cursor: pointer;
  position: fixed; // Ajoute une position fixe au bouton burger
  top: 20px; // Place le bouton burger en haut à droite
  right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const PopupNavItem = styled(NavItem)`
  font-size: 24px;
  display: block; // Change le display en block pour que les éléments ne soient pas sur la même ligne
  margin: 10px 0;
`;

const Navbar = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <>
    <NavbarContainer>
      <NavItemsLeft>
        <NavItem to="/discography">DISCOGRAPHY</NavItem>
        <NavItem to="/tour">TOUR</NavItem>
        <NavItem to="/news">NEWS</NavItem>
      </NavItemsLeft>
      <ImageContainer>
          <Link to="/">
            <Logo src={yourImage} alt="Logo" ></Logo>
          </Link>
        </ImageContainer>
      <NavItemsRight>
        <NavItem to="/band">BAND</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
        <NavItem to="/shop">SHOP</NavItem>
      </NavItemsRight>
      <HamburgerButton onClick={() => setPopupVisible(!popupVisible)}>
        ☰
      </HamburgerButton>
    </NavbarContainer>
    <Overlay visible={popupVisible} onClick={() => setPopupVisible(false)} />
    <Popup visible={popupVisible}>
        <CloseButton onClick={() => setPopupVisible(false)}>X</CloseButton>
        <PopupNavItem to="/discopgraphy">DISCOGRAPHY</PopupNavItem>
        <PopupNavItem to="/tour">TOUR</PopupNavItem>
        <PopupNavItem to="/news">NEWS</PopupNavItem>
        <PopupNavItem to="/band">BAND</PopupNavItem>
        <PopupNavItem to="/contact">CONTACT</PopupNavItem>
        <PopupNavItem to="/shop">SHOP</PopupNavItem>
      </Popup>
    </>
    
  );
};

export default Navbar;
