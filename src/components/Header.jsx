import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll'; // Importa o Link do react-scroll

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(ScrollLink)`
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;

  a {
    color: #ccd6f6;
  }
`;

const LogoImage = styled.img`
  width: 50px;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<Logo>
				<NavLink to="home" smooth={true} duration={500}>
					<LogoImage src={logoImage} alt="Lucas" />
				</NavLink>
			</Logo>
			<Nav>
				{/*<NavLink to="projects" smooth={true} duration={500}>
					Projetos
				</NavLink>*/}
				<NavLink to="technologies" smooth={true} duration={500}>
					Tecnologias
				</NavLink>
				{/*<NavLink to="about" smooth={true} duration={500}>
					Sobre mim
				</NavLink>*/}
			</Nav>
		</HeaderContainer>
	);
};

export default Header;
