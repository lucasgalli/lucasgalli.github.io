import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 24px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<ContactInfo>
				<p>lucasgalli.tsi@gmail.com</p>
				<p>(46) 991163865</p>
			</ContactInfo>
			<SocialIcons>
				<a href='https://www.github.com/lucasgalli' target='_blank'><FaGithub size={40} /></a>
				<a href='https://www.linkedin.com/in/mrgalli/' target='_blank'><FaLinkedin size={40} /></a>
				<a href='https://www.instagram.com/mr.galli' target='_blank'><FaInstagram size={40} /></a>
			</SocialIcons>
		</FooterContainer>
	);
};

export default Footer;
