import { useParams } from "react-router-dom";
import { useState, useEffect, FC } from "react";
import parse from "html-react-parser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./recipe.scss";
import Loading from "../Shared/Loading/Loading";
import { Status } from "../Shared/Loading/Loading";

export interface Recipes {
  image: string;
  title: string;
  summary: string;
  id: number;
  analyzedInstructions?: any;
  cookingMinutes: number;
  preparationMinutes?: number;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: any;
}

interface Similar {
  title: string;
  image: string;
  id: number;
  imageType: string;
}

const Recipe: FC = () => {
  let { id } = useParams();
  const [data, setData] = useState<Recipes | null>(null);
  const [similar, setSimilar] = useState<Array<Similar> | null>(null);
  const api = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;
  let navigate = useNavigate();

  useEffect(() => {
    let req1 = axios.get(
      `${api}recipes/${id}/information?includeNutrition=false&apiKey=${key}`
    );
    let req2 = axios.get(`${api}recipes/${id}/similar?number=3&apiKey=${key}`);

    const fetchData = async () => {
      try {
        const res = await axios.all([req1, req2]);
        setData(res[0].data);
        setSimilar(res[1].data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      setData(null);
      setSimilar(null);
    };
  }, [id, api, key]);

  console.log(data, similar);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="recipe"
      >
        {!data ? (
          <Loading message={Status.quotaExceeded} />
        ) : (
          <>
            <div className="img-container">
              <motion.img
                initial={{ y: -400 }}
                animate={{ y: 0, transition: { duration: 0.5 } }}
                src={data?.image}
                alt={data?.title}
              />
              <motion.section
                initial={{ x: 1000 }}
                animate={{ x: 0, transition: { delay: 0.5, duration: 0.5 } }}
                className="cooking-time"
              >
                <h5>Cooking Time</h5>
                <ol className="time-list">
                  {data?.preparationMinutes !== -1 ? (
                    <li>
                      <label htmlFor="prep">Prep</label>{" "}
                      <span id="prep">
                        {" "}
                        &nbsp;: {data?.preparationMinutes} minutes
                      </span>
                    </li>
                  ) : (
                    ""
                  )}
                  {data?.cookingMinutes !== -1 ? (
                    <li>
                      <label htmlFor="cook">Cook</label>{" "}
                      <span id="cook"> : {data?.cookingMinutes} minutes</span>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <label htmlFor="total">Total</label>
                    <span id="total"> : {data?.readyInMinutes} minutes</span>
                  </li>
                  <li>
                    <label htmlFor="serving" className="serving">
                      Servings
                    </label>
                    <span id="serving"> : {data?.servings}</span>
                  </li>
                </ol>
              </motion.section>
            </div>
            <section className="description">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5 } }}
              >
                <h1 className="recipe-title">{data?.title}</h1>
                <p>{parse(data?.summary || "")}</p>
              </motion.div>
              <section className="ingredients">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  Ingredients :
                </motion.h4>
                <ol className="ingredient-list">
                  {data?.extendedIngredients.map(
                    (ingredient: any, id: number) => (
                      <motion.li
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 1 },
                        }}
                        viewport={{ once: true }}
                        key={id}
                      >
                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                      </motion.li>
                    )
                  )}
                </ol>
              </section>
              <section className="steps">
                {!data?.analyzedInstructions[0] ? (
                  ""
                ) : (
                  <>
                    <motion.h4
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: { duration: 0.5 },
                      }}
                      viewport={{ once: true }}
                    >
                      Instruction :
                    </motion.h4>
                    <ol className="step-list">
                      {data?.analyzedInstructions[0].steps.map(
                        (s: any, id: number) => (
                          <motion.li
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              transition: { duration: 1 },
                            }}
                            viewport={{ once: true }}
                            key={id}
                          >
                            {s.step}
                          </motion.li>
                        )
                      )}
                    </ol>
                  </>
                )}
              </section>
            </section>
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { delay: 0.5 },
              }}
              viewport={{ once: true }}
              className="similar"
            >
              <h1>Similar Recipe</h1>
              <div className="similar-recipe">
                {similar?.map((recipe) => (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    className="container"
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                    key={recipe.id}
                  >
                    <img
                      src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.${recipe.imageType}`}
                      alt={recipe.title}
                    />
                    <h4>{recipe.title.slice(0, 30)}...</h4>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </>
        )}
      </motion.section>
    </>
  );
};

export default Recipe;
