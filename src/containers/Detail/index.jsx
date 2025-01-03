import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo } from "../../services/getData";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
    const [movie, setMovie] = useState(); // Estado para armazenar as informações do filme
    const [movieVideo, setMovieVideo] = useState(); // Estado para armazenar vídeos do filme
    const [movieCredits, setMovieCredits] = useState(); // Estado para armazenar créditos do filme (atores, diretores, etc.)
    const [movieSimilar, setMovieSimilar] = useState(); // Estado para armazenar filmes semelhantes
    const { id } = useParams(); // Captura o id do filme a partir da URL

    useEffect(() => {
        // Função para buscar todos os dados necessários sobre o filme
        async function getAllData() {
            Promise.all([
                getMovieById(id), // Detalhes do filme
                getMovieVideo(id), // Vídeos relacionados ao filme
                getMovieCredits(id), // Créditos (atores, diretores, etc.)
                getMovieSimilar(id), // Filmes semelhantes
            ]).then(([movie, videos, credits, similar]) => {
                // Atualiza os estados com os dados recebidos
                setMovie(movie);
                setMovieVideo(videos);
                setMovieCredits(credits);
                setMovieSimilar(similar);
            }).catch(error => console.log(error)); // Em caso de erro, loga no console
        }

        getAllData(); // Chama a função para buscar os dados
    }, [id]); // Executa o efeito sempre que o id do filme na URL mudar

    return(
        <>
            {movie && ( // Verifica se os dados do filme foram carregados
                <>
                    {/* Exibe o fundo com a imagem do filme */}
                    <Background $image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            {/* Exibe o poster do filme */}
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            {/* Exibe o título do filme */}
                            <h2>{movie.title}</h2>
                            {/* Exibe os gêneros do filme usando o componente SpanGenres */}
                            <SpanGenres genres={movie.genres} />
                            {/* Exibe a descrição do filme */}
                            <p>{movie.overview}</p>
                            <div>
                                {/* Exibe os créditos do filme (atores, diretores, etc.) */}
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {/* Verifica se há vídeos relacionados ao filme */}
                        {Array.isArray(movieVideo) && movieVideo.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
                                {/* Exibe o vídeo no formato de iframe do YouTube */}
                                <iframe 
                                    src={`https://www.youtube.com/embed/${video.key}`} 
                                    title="Youtube Video Player" 
                                    height="500px" 
                                    width="100%" 
                                >
                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {/* Exibe filmes semelhantes usando o componente Slider */}
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
                </>
             )}
        </>
    )
}

export default Detail;