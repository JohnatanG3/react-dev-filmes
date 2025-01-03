// Importação de uma função utilitária que retorna a URL da imagem com base no caminho fornecido
import { getImages } from "../../utils/getImages";
// Importação do componente estilizado 'Continaer' (note que o nome contém um erro de digitação, deveria ser 'Container')
import { Continaer } from "./styles";

// Função Card que recebe um item (filme ou série) e renderiza um card com suas informações
function Card({ item }) {
  return (
    <>
      {/* Componente estilizado 'Continaer' para o card */}
      <Continaer>
        {/* Exibe a imagem do item (filme ou série). A função 'getImages' retorna a URL da imagem com base no caminho fornecido. */}
        <img src={getImages(item.poster_path || item.profile_path || '')} alt="cards-top-filmes" />
        
        {/* Exibe o título ou o nome do item */}
        <h3>{item.title || item.name}</h3>
      </Continaer>
    </>
  );
}

// Exportação do componente Card
export default Card;