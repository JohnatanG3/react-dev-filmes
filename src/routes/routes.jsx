// Importa os componentes necessários do React Router para definição de rotas
import { Route, Routes } from "react-router-dom";

// Importa os componentes que serão renderizados para cada rota
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";

// Função que define as rotas da aplicação
function Router() {
    return(
        <Routes>
            {/* Define a rota principal que irá usar o layout DefaultLayout */}
            <Route element={<DefaultLayout />}>
                {/* Define a rota para a página inicial (Home) */}
                <Route path="/" element={<Home />} />
                {/* Define a rota para a página de filmes (Movies) */}
                <Route path="/filmes" element={<Movies />} />
                {/* Define a rota para a página de séries (Series) */}
                <Route path="/series" element={<Series />} />
                {/* Define a rota para a página de detalhes do filme ou série, com o id dinâmico */}
                <Route path="/detalhe/:id" element={<Detail />} />
            </Route>
        </Routes>
    )
}

// Exporta o componente Router para ser utilizado na aplicação
export default Router;