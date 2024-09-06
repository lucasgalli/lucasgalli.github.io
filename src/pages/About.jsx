import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/lucas.png'; // Importe a imagem diretamente

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: #fff;
  background-color: #000;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1000px;
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); // Adiciona um efeito de sombra
`;

const AboutDetails = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffb400;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #bbb;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  color: #fff;
`;

const DownloadButton = styled.button`
  background-color: #ffb400;
  color: #000;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 2rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
  }
`;

const About = () => {
	return (
		<AboutContainer>
			<Content>
				<ProfileImage src={profileImage} alt="Lucas" />
				<AboutDetails>
					<Title>About Me</Title>
					<SubTitle>A small river named Duden flows by their place and supplies it with the necessary regelialia.</SubTitle>
					<InfoList>
						<InfoItem>
							<InfoLabel>Name:</InfoLabel> Shasika Shehan
						</InfoItem>
						<InfoItem>
							<InfoLabel>Date of birth:</InfoLabel> January 01, 1987
						</InfoItem>
						<InfoItem>
							<InfoLabel>Address:</InfoLabel> San Francisco CA 97987 USA
						</InfoItem>
						<InfoItem>
							<InfoLabel>Zip code:</InfoLabel> 1000
						</InfoItem>
						<InfoItem>
							<InfoLabel>Email:</InfoLabel> clarkthomp@gmail.com
						</InfoItem>
						<InfoItem>
							<InfoLabel>Phone:</InfoLabel> +1-2234-5678-9-0
						</InfoItem>
						<InfoItem>
							<InfoLabel>Projects completed:</InfoLabel> 73
						</InfoItem>
					</InfoList>
					<DownloadButton>Download CV</DownloadButton>
				</AboutDetails>
			</Content>
		</AboutContainer>
	);
};

export default About;
