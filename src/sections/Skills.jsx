import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillItem = styled.div`
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Skills = () => {
	const skills = ['Git', 'Wordpress', 'Teamwork', 'Quick learning', 'Engagement', 'B2 English', 'RWD'];

	return (
		<SkillsContainer>
			<Title>Additional Technologies and Skills</Title>
			<SkillsList>
				{skills.map(skill => (
					<SkillItem key={skill}>
						<SkillName>{skill}</SkillName>
					</SkillItem>
				))}
			</SkillsList>
		</SkillsContainer>
	);
};

export default Skills;
