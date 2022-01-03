import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

const SocialSection = styled.div`
  background: #000;
  color: #fff;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FooterSection = styled.div`
  background: #000;
  color: #fff;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <div>
      <SocialSection>
        <h3><a role="button" href="https://twitter.com/kilroyrobotics" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="xs"/></a> <a role="button" href="https://facebook.com/kilroyrobotics" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="xs"/></a> <a role="button" href="https://github.com/FIRST-TEAM-339" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="xs"/></a></h3>
      </SocialSection>
      <FooterSection>
        <p>FIRST Team 339 | <FontAwesomeIcon icon={faCopyright} size="xs"/> 2021 All Rights Reserved</p>
      </FooterSection>
    </div>
  );
};

export default Footer;