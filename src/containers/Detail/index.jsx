import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo } from "../../services/getData";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getImages } from "../../utils/getImages"
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

function Detail() {
    const [movie, setMovie] = useState();
    const [movieVideo, setMovieVideo] = useState();
    const [movieCredits, setMovieCredits] = useState();
    const [movieSimilar, setMovieSimilar] = useState();
    const { id } = useParams();

    useEffect( () =>{
        async function getAllData(){
            Promise.all([
                getMovieById(id),
                getMovieVideo(id),
                getMovieCredits(id),
                getMovieSimilar(id),
            ]).then(([movie, videos, credits, similar]) => {
                setMovie(movie);
                setMovieVideo(videos);
                setMovieCredits(credits);
                setMovieSimilar(similar);
            }).catch(error => console.log(error))
        }

        getAllData();
    }, [id])
    return(
        <>
            {movie && (
                <>
                    <Background $image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>
                    <ContainerMovies>
                        {Array.isArray(movieVideo) && movieVideo.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>
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
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
                </>
             )}
        </>
    )
}

export default Detail