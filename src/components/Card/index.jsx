import { getImages } from "../../utils/getImages";
import { Continaer } from "./styles";

function Card({ item }) {
  return (
    <>
      <Continaer>
        <img src={getImages(item.poster_path || item.profile_path || '')} alt="cards-top-filmes" />
        <h3>{item.title || item.name}</h3>
      </Continaer>
    </>
  );
}

export default Card;
