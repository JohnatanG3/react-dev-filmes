// Função que recebe um caminho de imagem (path) e retorna a URL completa da imagem no TMDB
export function getImages(path) {
    // A URL base "https://image.tmdb.org/t/p/original" é concatenada com o caminho da imagem fornecido, formando a URL completa
    return `https://image.tmdb.org/t/p/original${path}`;
}