// Importa os hooks do React e o componente Slider, além das funções para obter dados sobre séries
import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import { getPopularSeries, getSeriesNext, getSeriesToday, getTopSeries } from "../../services/getData";
import { Container, Info } from "./styles";

// Componente que exibe as séries na página de séries
function Series() {
    // Declaração dos estados para armazenar os dados de cada categoria de séries
    const [topSeries, settopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [seriesToday, setSeriesToday] = useState();
    const [seriesNext, setSeriesNext] = useState();

    // useEffect que executa a busca dos dados quando o componente é montado
    useEffect( () =>{
        async function getAllData(){
            // Faz uma requisição para buscar todos os dados necessários
            Promise.all([
                getTopSeries(),        // Obtém as séries top
                getPopularSeries(),    // Obtém as séries populares
                getSeriesToday(),      // Obtém as séries lançadas hoje
                getSeriesNext(),       // Obtém as séries lançadas nos próximos dias
            ])
            .then(([topSeries, popularSeries, seriesToday, seriesNext]) => {
                // Atualiza os estados com os dados recebidos
                settopSeries(topSeries);
                setPopularSeries(popularSeries);
                setSeriesToday(seriesToday);
                setSeriesNext(seriesNext);
            })
            .catch(error => console.log(error)); // Caso ocorra um erro, ele será logado no console
        }

        // Chama a função para obter os dados
        getAllData();
    }, []) // O array vazio garante que o efeito seja executado apenas uma vez, quando o componente for montado

    return(
        <>
            <Container>
                {/* Exibe o título da página */}
                <Info>
                    <h1>SÉRIES</h1>
                </Info>
            </Container>
            {/* Condicionais para renderizar os Sliders somente quando os dados estiverem disponíveis */}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {seriesToday && <Slider info={seriesToday} title={'Séries Lançadas Hoje'} />}
            {seriesNext && <Slider info={seriesNext} title={'Séries Lançadas nos Próximos Dias'} />}
        </>
    )
}

// Exporta o componente Series para ser utilizado em outras partes da aplicação
export default Series;