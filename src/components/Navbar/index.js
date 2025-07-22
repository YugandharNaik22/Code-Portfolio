import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
} from './NavbarStyledComponent';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import "../HeroSection/hero.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <img
            src="https://res.cloudinary.com/drdjty87p/image/upload/v1724943417/WhatsApp_Image_2024-08-29_at_8.22.35_PM-removebg-preview_zhmjwv.png"
            alt=""
            className='port'
          />
          <Span className='portfol'>PortFolio</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about" className='about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#services'>Services</NavLink>
          <NavLink href='#certificates'>Certifications</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
        </ButtonContainer>
        <NavItems>
          <NavLink href='#contact' className='join'>Join With Me</NavLink>
        </NavItems>
        {isOpen && (
          <MobileMenu $isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About Me</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href='#services' onClick={() => setIsOpen(!isOpen)}>Services</MobileLink>
            <MobileLink href='#certificates' onClick={() => setIsOpen(!isOpen)}>Certifications</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <GitHubButton
              style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
