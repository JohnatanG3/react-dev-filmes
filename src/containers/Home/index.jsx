import { Background, Info, Poster, Container, ContainerButton } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom"
import { getMovies, getPersonPopular, getPopularMovies, getPopularSeries, getTopMovies, getTopSeries } from "../../services/getData";

function Home() {
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [personPopular, setPersonPopular] = useState();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect( () =>{
        async function getAllData(){
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularMovies(),
                getPopularSeries(),
                getPersonPopular(),
            ]).then(([movie, topMovies, topSeries, popularMovies, popularSeries, personPopular]) => {
                setMovie(movie);
                setTopMovies(topMovies);
                setTopSeries(topSeries);
                setPopularMovies(popularMovies);
                setPopularSeries(popularSeries);
                setPersonPopular(personPopular);
            }).catch(error => console.log(error))
        }

        getAllData();
    }, [])

    return(
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assita Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularMovies && <Slider info={popularMovies} title={'Filmes Populares'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {personPopular && <Slider info={personPopular} title={'Artistas Populares'} />}
        </>
    )
}

export default Home