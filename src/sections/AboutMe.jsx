import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 600px;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  max-width: 800px;
  position: relative;
  padding-left: 20px; /* Altere o padding para alinhar corretamente os itens */
  border-left: 2px solid #34a299; /* Linha vertical contínua */
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
`;

const Year = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: left;
  margin: 0;
`;

const Dot = styled.div`
  position: absolute;
  left: -30px; /* Ajuste para centralizar na linha */
  top: 9px;
  width: 18px;
  height: 18px;
  background-color: #34a299;
  border-radius: 50%;
  transform: translateY(-50%); /* Centraliza o ponto verticalmente */
`;

const AboutMe = () => {
	const timelineData = [
		{ year: '2015', description: 'Started my career in web development with a focus on front-end technologies.' },
		{ year: '2017', description: 'Joined XYZ Company as a junior developer and quickly advanced to a mid-level position.' },
		{ year: '2019', description: 'Contributed to several high-profile projects, enhancing my skills in React and Angular.' },
		{ year: '2021', description: 'Became a senior developer, leading a team of 5 in building scalable web applications.' },
		{ year: '2023', description: 'Transitioned to freelance work, focusing on modern web technologies and mobile development.' },
	];

	return (
		<AboutMeContainer id="about">
			<Title>About Me</Title>
			<Subtitle>A passionate front-end developer with a knack for creating engaging, user-friendly web applications.</Subtitle>
			<Timeline>
				{timelineData.map((item, index) => (
					<TimelineItem key={index}>
						<Dot />
						<Year>{item.year}</Year>
						<Description>{item.description}</Description>
					</TimelineItem>
				))}
			</Timeline>
		</AboutMeContainer>
	);
};

export default AboutMe;
