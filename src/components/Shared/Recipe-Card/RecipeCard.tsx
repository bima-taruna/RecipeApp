import { FC } from "react";
import { SearchRecipe } from "../../Search/Search";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./recipe-card.scss";
const RecipeCard: FC<SearchRecipe> = (props) => {
  let navigate = useNavigate();
  return (
    <motion.section
      whileHover={{ scale: 1.2 }}
      className="card-body"
      onClick={() => navigate(`/recipe/${props.id}`)}
    >
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
    </motion.section>
  );
};

export default RecipeCard;
