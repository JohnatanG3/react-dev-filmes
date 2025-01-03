// Importando hooks e componentes necessários do React e react-router-dom
import { useState } from 'react';
import Logo from '../../assets/logo.png'; // Importando a logo da pasta de assets
import { Container, Menu, Li } from './styles'; // Estilos personalizados para o header
import { Link, useLocation } from 'react-router-dom'; // 'Link' para navegação e 'useLocation' para obter a URL atual

function Header() {
    // Hook 'useLocation' para obter o pathname da URL atual, ou seja, a página em que o usuário está
    const { pathname } = useLocation();

    // Hook 'useState' para gerenciar o estado de alteração do fundo do cabeçalho
    const [changeBackground, setChangeBackground] = useState(false);

    // Função que altera o fundo do cabeçalho baseado na rolagem da página
    window.onscroll = () => {
        if (window.scrollY >= 120) { // Se a posição da rolagem for maior ou igual a 120px
            setChangeBackground(true); // Muda o estado para indicar que o fundo deve mudar
        } else {
            setChangeBackground(false); // Caso contrário, o fundo permanece sem alteração
        }
    }

    return (
        <Container $changeBackground={changeBackground}> {/* Estilo condicional baseado no estado changeBackground */}
            <img src={Logo} alt="logo-dev-movies" /> {/* Logo da aplicação exibida no cabeçalho */}
            <Menu>
                {/* Componente de item de menu para cada link de navegação */}
                {/* Cada item de menu é destacado se o pathname corresponder ao caminho atual */}
                <Li $isActive={pathname === '/'}> 
                    <Link to="/">Home</Link> {/* Link para a página inicial */}
                </Li>
                <Li $isActive={pathname.includes('filmes')}> 
                    <Link to="/filmes">Filmes</Link> {/* Link para a página de filmes */}
                </Li>
                <Li $isActive={pathname.includes('series')}> 
                    <Link to="/series">Séries</Link> {/* Link para a página de séries */}
                </Li>
            </Menu>
        </Container>
    );
}

export default Header; // Exportando o componente Header para ser utilizado em outras partes do projeto