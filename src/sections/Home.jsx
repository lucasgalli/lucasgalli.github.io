import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/lucas.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* A altura agora deve ser 100% para ocupar a altura da tela definida pelo wrapper */
  background-color: #0a192f;
  text-align: center;
  padding: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

const ProfileImage = styled.img`
  width: 300px; 
  height: 400px;
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

const Home = () => {
	return (
		<HomeContainer id="home">
			<ProfileImage src={profileImage} alt="Lucas" />
			<Title>Lucas Galli</Title>
			<SubTitle>Desenvolvedor Fullstack</SubTitle>
			<h4>Website e aplicativos híbridos</h4>
			<br />
			<a className="button" href="#">Download CV</a>
		</HomeContainer>
	);
};

export default Home;
