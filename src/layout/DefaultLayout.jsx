// Importa o componente Outlet do react-router-dom, que serve como um marcador
// para onde o conteúdo das rotas será renderizado dentro do layout.
import { Outlet } from "react-router-dom";

// Importa o componente Header que será exibido em todas as páginas dentro do layout.
import Header from "../components/Header";

// Componente que define o layout padrão para a aplicação
function DefaultLayout(){
    return(
        <>
            {/* Renderiza o Header que será exibido em todas as páginas */}
            <Header />
            {/* O Outlet é o local onde o conteúdo das rotas internas será renderizado */}
            <Outlet />
        </>
    )
}

// Exporta o componente DefaultLayout para ser utilizado nas rotas
export default DefaultLayout;