import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import AboutMe from './sections/AboutMe';
import { Link as ScrollLink, Element } from 'react-scroll'; // Importar o Link e Element do react-scroll

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			{/* Cada seção precisa de um Elemento do react-scroll */}
			<Element name="home" className="section">
				<Home />
			</Element>
			<Element name="projects" className="section">
				<Projects />
			</Element>
			<Element name="technologies" className="section">
				<Technologies />
			</Element>
			<Element name="about" className="section">
				<AboutMe />
			</Element>

			<Footer />
		</>
	);
};

export default App;
