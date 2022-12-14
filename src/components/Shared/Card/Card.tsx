import { RandomRecipe } from "../../Popular/Popular";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import "./card.scss";
const Card: FC<RandomRecipe> = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <section className="cardContainer">
        <button
          className="btn-detail"
          onClick={() => navigate(`/recipe/${props.id}`)}
        >
          See this recipe
        </button>
        <section className="summary">
          <h2>{props.title}</h2>
          <p>{parse(props.summary.slice(0, 350))}....</p>
        </section>
        <section className="cardImg">
          <img src={props.image} alt={props.title} />
        </section>
      </section>
    </>
  );
};

export default Card;
