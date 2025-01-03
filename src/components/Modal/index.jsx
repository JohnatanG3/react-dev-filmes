import { Container, Background, CloseButton } from './styles'; // Importa os componentes estilizados para o modal
import { useState, useEffect } from 'react'; // Importa hooks do React: useState e useEffect
import { getMovieVideo } from '../../services/getData'; // Importa a função para obter vídeos do filme

// Componente Modal
function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState(); // Estado para armazenar informações do vídeo do filme

    // useEffect para buscar os dados do vídeo do filme assim que o componente for montado
    useEffect( () =>{
        async function getMovies(){
            // Chama a função getMovieVideo para obter os vídeos do filme e armazena no estado
            setMovie(await getMovieVideo(movieId));
        }
        
        getMovies(); // Chama a função dentro do useEffect
    }, []) // Dependência vazia, ou seja, o useEffect será executado apenas uma vez após a primeira renderização

    return(
        <>
            {movie && ( // Condicional para renderizar o modal apenas se a informação do vídeo estiver disponível
                <Background onClick={() => setShowModal(false)}> {/* Fecha o modal quando o fundo for clicado */}
                    <Container>
                        <CloseButton onClick={() => setShowModal(false)}>X</CloseButton> {/* Fecha o modal ao clicar no botão X */}
                        <iframe 
                            src={`https://www.youtube.com/embed/${movie[0].key}`} // Embeda o vídeo no modal usando o link do YouTube
                            title='Youtube Video Player' 
                            height="500px" 
                            width="100%" 
                            frameborder="0">
                        </iframe>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Modal; // Exporta o componente Modal para uso em outras partes do código