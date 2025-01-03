import Card from "../Card"; // Importa o componente Card que vai ser utilizado para exibir cada item do slider
import { Container } from "./styles"; // Importa o Container estilizado para o layout
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa os componentes Swiper e SwiperSlide da biblioteca 'swiper' para criar o slider

function Slider({ info, title }) {
    return(
        <>
            <Container> {/* Container para o título e o slider */}
                <h2>{title}</h2> {/* Exibe o título do slider, passado como prop */}
                {/* Swiper é o componente que cria o slider */}
                <Swiper 
                    grabCursor // Habilita o cursor de 'mão' ao interagir com o slider
                    spaceBetween={10} // Define o espaçamento entre os slides
                    slidesPerView={'auto'} // Exibe um número variável de slides dependendo do tamanho da tela
                    className='swiper' // Classe para personalização do slider
                >
                    {/* Itera sobre os dados passados para exibir os slides */}
                    {info.map((item, index) => (
                        <SwiperSlide key={index}> {/* Cada item é envolvido em um SwiperSlide */}
                            <Card item={item} /> {/* Card é responsável por exibir cada item no slide */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </>
    )
}

export default Slider