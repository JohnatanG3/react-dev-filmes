// Importa o modo estrito do React para ajudar no desenvolvimento, identificando problemas no código
import { StrictMode } from 'react'

// Importa a função createRoot do ReactDOM para inicializar a renderização da aplicação
import { createRoot } from 'react-dom/client'

// Importa o BrowserRouter do react-router-dom para habilitar a navegação dentro da aplicação
import { BrowserRouter } from 'react-router-dom'

// Importa o arquivo de rotas onde são definidas as rotas da aplicação
import Router from './routes/routes.jsx'

// Importa o arquivo de estilos globais, que contém estilos CSS globais para a aplicação
import GlobalStyle from './styles/GlobalStyles.js'

// Cria e renderiza a árvore de componentes dentro do elemento com id 'root'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolvem a aplicação com o BrowserRouter, com um prefixo de base "/react-dev-filmes" nas rotas */}
    <BrowserRouter basename="/react-dev-filmes">
      {/* O componente Router contém as rotas da aplicação */}
      <Router />
    </BrowserRouter>
    {/* Aplica os estilos globais na aplicação */}
    <GlobalStyle />
  </StrictMode>
)