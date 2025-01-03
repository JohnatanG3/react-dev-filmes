// Importação da função 'getImages' para buscar as imagens dos artistas a partir de um caminho de imagem
import { getImages } from "../../utils/getImages";

// Importando os componentes estilizados 'Title' e 'Container' para a interface de exibição dos créditos
import { Title, Container } from "./styles";

// Função 'Credits' que recebe as informações de créditos como props
function Credits({ credits }) {
    return(
        <>
            {/* Título dos créditos */}
            <Title>Créditos</Title>
            
            {/* Verifica se os créditos foram fornecidos e renderiza o conteúdo */}
            {credits && (
                <Container>
                    {/* Itera pelos créditos, exibindo as informações dos 5 primeiros artistas */}
                    {credits.slice(0, 5).map(artist => (
                        <div key={artist.id}>
                            {/* Exibe a imagem do artista usando a função 'getImages' para obter o caminho correto da imagem */}
                            <img src={getImages(artist.profile_path)} alt="artistas" />
                            {/* Exibe o nome do artista */}
                            <p>{artist.name}</p>
                        </div>
                    ))}
                    <div></div> {/* Espaço extra (pode ser usado para outros itens ou estilização futura) */}
                </Container>
            )}
        </>
    )
}

// Exporta o componente para uso em outras partes da aplicação
export default Credits;