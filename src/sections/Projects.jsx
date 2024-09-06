import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0a192f;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background-color: #1e2746;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;


const Projects = () => {
	const projects = [
		{
			title: 'Furniture store landing page',
			description: 'Responsive HTML/CSS layout for online furniture store.',
			image: 'https://source.unsplash.com/random/300x200?furniture',
		},
		{
			title: 'Designer furniture store',
			description: 'Responsive HTML/CSS layout for designer furniture store.',
			image: 'https://source.unsplash.com/random/300x200?interior',
		},
		{
			title: 'Landing page for front-end developer',
			description: 'Responsive HTML/CSS layout for front-end developer.',
			image: 'https://source.unsplash.com/random/300x200?web',
		},
		{
			title: 'Website redesign for The Venus project',
			description: 'Responsive HTML/CSS layout for The Venus project.',
			image: 'https://source.unsplash.com/random/300x200?technology',
		},
	];

	return (
		<ProjectsContainer id="projects">
			<Title>Projects</Title>
			<ProjectGrid>
				{projects.map((project, index) => (
					<ProjectCard key={index}>
						<ProjectImage src={project.image} alt={project.title} />
						<ProjectTitle>{project.title}</ProjectTitle>
						<ProjectDescription>{project.description}</ProjectDescription>
						<ButtonGroup>
							<a className="button" href="#">Live Preview</a>
							<a className="button" href="#">Check on GitHub</a>
						</ButtonGroup>
					</ProjectCard>
				))}
			</ProjectGrid>
		</ProjectsContainer>
	);
};

export default Projects;
