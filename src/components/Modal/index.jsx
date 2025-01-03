import { Container, Background, CloseButton } from './styles';
import { useState, useEffect } from 'react';
import { getMovieVideo } from '../../services/getData';

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState();

    useEffect( () =>{
        async function getMovies(){
            setMovie(await getMovieVideo(movieId));
        }
        
        getMovies();
    }, [])

    return(
        <>
            {movie && (
                <Background onClick={() => setShowModal(false)}>
                    <Container>
                        <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
                        <iframe src={`https://www.youtube.com/embed/${movie[0].key}`} title='Youtube Video Player' height="500px" width="100%" frameborder="0"></iframe>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Modal