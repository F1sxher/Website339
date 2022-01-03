import styled from 'styled-components';
// import Link from 'next/link';
// import Image from 'next/image';
// import Logo from '../public/favicon.ico';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;


const Nav = styled.nav`
  height: auto;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Navbar = () => {
  return (
    <Nav className="navbar navbar-dark navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><strong>Kilroy Robotics</strong></a>
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/" id="navlist">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/history" id="navlist">History</a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.thebluealliance.com/team/339" target="_blank" rel="noopener noreferrer" id="navlist">Blue Alliance <FontAwesomeIcon icon={faExternalLinkAlt} size="xs"/></a></li>
            <li className="nav-item"><a className="nav-link" href="/archive" id="navlist">Previous Years</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact" id="navlist">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="/donate" id="navlist">Donate</a></li>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
