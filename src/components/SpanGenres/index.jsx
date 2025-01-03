import { Container } from "./styles";

// Componente SpanGenres que exibe uma lista de gêneros
function SpanGenres({ genres }) {
    return(
        <>
            {/* Container que envolve os gêneros */}
            <Container>
                {/* Verifica se há gêneros e os mapeia para exibição */}
                {genres && genres.map(genre => (
                    // Exibe cada gênero dentro de uma tag <span> com a chave única 'genre.id'
                    <span key={genre.id}>{genre.name}</span>
                ))}
            </Container>
        </>
    )
}

export default SpanGenres;