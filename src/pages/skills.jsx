import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillItem = styled.div`
  width: 200px; /* Ajuste conforme necessário */
  text-align: left;
`;

const SkillName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SkillBarContainer = styled.div`
  background-color: #333;
  width: 100%;
  margin-bottom: 1rem;
  height: 1.5rem;
  border-radius: 5px;
  position: relative;
`;

const SkillLevel = styled.div`
  background-color: #ffb400;
  width: ${props => props.level}%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
`;

const SkillPercentage = styled.span`
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 1rem;
  color: #fff;
`;

const Skills = () => {
	const skills = [
		{ name: 'PHP', level: 90 },
		{ name: 'HTML5', level: 95 },
		{ name: 'WordPress', level: 70 },
		{ name: 'jQuery', level: 85 },
		{ name: 'CSS3', level: 90 },
		{ name: 'SEO', level: 80 },
	];

	return (
		<SkillsContainer>
			<Title>My Skills</Title>
			<SkillList>
				{skills.map(skill => (
					<SkillItem key={skill.name}>
						<SkillName>{skill.name}</SkillName>
						<SkillBarContainer>
							<SkillLevel level={skill.level} />
							<SkillPercentage>{skill.level}%</SkillPercentage>
						</SkillBarContainer>
					</SkillItem>
				))}
			</SkillList>
		</SkillsContainer>
	);
};

export default Skills;
