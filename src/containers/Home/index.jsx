// Importação de componentes e hooks necessários
import { Background, Info, Poster, Container, ContainerButton } from "./styles"; // Componentes de estilo
import { useState, useEffect } from "react"; // Hooks do React
import Button from "../../components/Button"; // Componente Button
import Slider from "../../components/Slider"; // Componente Slider para exibir listas de filmes/series
import { getImages } from "../../utils/getImages"; // Função para recuperar imagens
import Modal from "../../components/Modal"; // Componente Modal para exibir trailers
import { useNavigate } from "react-router-dom"; // Hook de navegação do React Router
import { getMovies, getPersonPopular, getPopularMovies, getPopularSeries, getTopMovies, getTopSeries } from "../../services/getData"; // Funções para pegar dados da API

function Home() {
    // Declaração de estados para armazenar as informações dos filmes, séries e artistas populares
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [personPopular, setPersonPopular] = useState();
    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
    const navigate = useNavigate(); // Hook para navegação de páginas

    // useEffect para buscar todos os dados necessários assim que o componente é montado
    useEffect(() =>{
        async function getAllData(){
            // Faz as requisições simultâneas para obter as informações dos filmes, séries e artistas populares
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularMovies(),
                getPopularSeries(),
                getPersonPopular(),
            ]).then(([movie, topMovies, topSeries, popularMovies, popularSeries, personPopular]) => {
                // Atualiza os estados com as respostas das requisições
                setMovie(movie);
                setTopMovies(topMovies);
                setTopSeries(topSeries);
                setPopularMovies(popularMovies);
                setPopularSeries(popularSeries);
                setPersonPopular(personPopular);
            }).catch(error => console.log(error)) // Tratar qualquer erro de requisição
        }

        getAllData(); // Chama a função para buscar os dados
    }, []) // O efeito será executado apenas uma vez ao montar o componente

    return(
        <>
            {/* Se o filme principal estiver carregado, exibe o Background e informações sobre o filme */}
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {/* Se o modal estiver visível, exibe o Modal */}
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            {/* Exibe o título e a sinopse do filme */}
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                {/* Botões de ação: para assistir ao filme ou visualizar o trailer */}
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            {/* Exibe o poster do filme */}
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {/* Exibe sliders com os filmes e séries populares e em alta, caso os dados estejam disponíveis */}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularMovies && <Slider info={popularMovies} title={'Filmes Populares'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {personPopular && <Slider info={personPopular} title={'Artistas Populares'} />}
        </>
    )
}

export default Home;