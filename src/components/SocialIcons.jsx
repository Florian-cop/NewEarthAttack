import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIconsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  gap: 10px;

  ${({ direction }) => {
    if (direction === 'right') {
      return `
        right: 50px;
      `;
    } else if (direction === 'middle') {
      return `
        left: 50%;
        right: auto;
        transform: translateX(-50%);
      `;
    } else if (direction === 'left') {
      return `
        left: 50px;
      `;
    }
  }}
`;

const SocialIcon = styled.a`
  color: white;
  transition: color 0.2s;
  padding: 0 5px;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }
`;

const SocialIconImage = styled(FontAwesomeIcon)`
  font-size: 28px;
`;

const SocialIcons = ({ socialLinks, direction = 'right' }) => {
  return (
    <SocialIconsContainer direction={direction}>
      {socialLinks.map(({ icon, url, color }) => (
        <SocialIcon key={url} href={url} target="_blank" rel="noreferrer" hoverColor={color}>
          <SocialIconImage icon={icon} />
        </SocialIcon>
      ))}
    </SocialIconsContainer>
  );
};

export default SocialIcons;
