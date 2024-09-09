import React from 'react';
import styled from 'styled-components';

const TechnologiesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0a192f;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillBarContainer = styled.div`
  width: 200%;
  max-width: 600px;
  margin: 1rem 0;
`;

const SkillBar = styled.div`
  background-color: #1e2746;
  height: 1.5rem;
  border-radius: 5px;
  position: relative;
`;

const SkillLevel = styled.div`
  background: linear-gradient(90deg, #34a299, #34a273);
  width: ${props => props.level}%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Technologies = () => {
	const skills = [
		{ name: 'PHP', level: 100, levelText: 'Avançado' },
		{ name: 'PHP POO', level: 50, levelText: 'Intermediário' },
		{ name: 'Laravel', level: 50, levelText: 'Iniciante' },
		{ name: 'Mysql', level: 80, levelText: 'Avançado' },
		{ name: 'React js', level: 70, levelText: 'Intermediário' },
		{ name: 'jQuery, Zepto', level: 100, levelText: 'Avançado' },
		{ name: 'JavaScript, CSS, HTML5', level: 100, levelText: 'Avançado' },
		{ name: 'Amazon Web Service ECS, RDS, S3', level: 90, levelText: 'Avançado' },
	];

	return (
		<TechnologiesContainer id="technologies">
			<Title>Tecnologias</Title>
			{skills.map(skill => (
				<SkillBarContainer key={skill.name}>
					<SkillLabel>
						<span>{skill.name}</span>
						<span>{skill.levelText}</span>
					</SkillLabel>
					<SkillBar>
						<SkillLevel level={skill.level} />
					</SkillBar>
				</SkillBarContainer>
			))}
		</TechnologiesContainer>
	);
};

export default Technologies;
