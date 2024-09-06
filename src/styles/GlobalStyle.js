import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Calibre', sans-serif; /* Fonte principal */
    background-color: #0a192f; /* Fundo principal */
    color: #ccd6f6; /* Texto principal */
    overflow-x: hidden;
  }

  a {
    color: #ccd6f6; /* Destaque para links */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #34a299; /* Cor de hover para links */
    }
  }

  button {
    background-color: #64ffda; /* Cor de destaque para botões */
    color: #0a192f; /* Texto de botões */
    border: 2px solid #34a299; /* Detalhe de borda */
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background-color: #ccd6f6; /* Cor de hover para botões */
      color: #0a192f;
      border-color: #64ffda; /* Muda a cor da borda ao passar o mouse */
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Calibre', sans-serif; /* Fonte principal para cabeçalhos */
    color: #ccd6f6; /* Texto dos cabeçalhos */
  }

  p {
    color: #ccd6f6; /* Texto secundário */
  }

  .section {
    padding: 2rem;
    background-color: #0a192f; /* Fundo secundário para seções */
    border-radius: 8px; /* Bordas arredondadas para seções */
    margin-bottom: 2rem; /* Margem inferior para espaçamento entre seções */
  }

  code, pre {
    font-family: 'SF Mono', monospace; /* Fonte monoespaçada para código */
    background-color: #0a192f; /* Fundo para blocos de código */
    color: #ccd6f6; /* Texto de código */
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #34a299; /* Borda para blocos de código */
  }

  input, textarea {
    background-color: #0a192f; /* Fundo para inputs */
    color: #ccd6f6;
    border: 2px solid #34a299; /* Detalhe de borda para inputs */
    padding: 10px;
    border-radius: 5px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #64ffda; /* Borda neon no foco */
      box-shadow: 0 0 5px #64ffda;
      outline: none;
    }
  }

	.button{
		background-color: rgba(45,212,191,.1);
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 5px;
		transition: background-color 0.3s;
		text-align: center;
		text-decoration: none;
		
		&:hover {
			background-color: #34a299;
			color:#FFF;
		}
	}
	
`;

export default GlobalStyle;
