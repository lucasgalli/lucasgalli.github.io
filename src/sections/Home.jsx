import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/lucas.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 250px);
  background-color: #0a192f;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 200px; 
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

const Home = () => {
	return (
		<HomeContainer id="home">
			<ProfileImage src={profileImage} alt="Lucas" />
			<Title>Lucas Galli</Title>
			<SubTitle>Desenvolvedor Fullstack e Professor</SubTitle>
			<a className="button" href="#">Download CV</a>
		</HomeContainer>
	);
};

export default Home;
