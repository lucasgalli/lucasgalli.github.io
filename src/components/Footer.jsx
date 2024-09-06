import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<ContactInfo>
				<p>Email: lucasgalli.tsi@gmail.com</p>
				<p>Whatsapp: (46) 991163865</p>
			</ContactInfo>
			<SocialIcons>
				<FaGithub size={24} />
				<FaLinkedin size={24} />
				<FaInstagram size={24} />
			</SocialIcons>
		</FooterContainer>
	);
};

export default Footer;
