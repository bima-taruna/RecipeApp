import { useState, useRef, FC, useEffect, Suspense, lazy } from "react";
import { slice } from "lodash";
import "./search.scss";
import logo from "../../logo/logo.png";
import { motion } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import Loading, { Status } from "../Shared/Loading/Loading";
import axios from "axios";
const RecipeCard = lazy(() => import("../Shared/Recipe-Card/RecipeCard"));
export interface SearchRecipe {
  id: number;
  title: string;
  image: string;
}

const Search: FC = () => {
  const [data, setData] = useState<Array<SearchRecipe> | null>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const secondBodyRef = useRef<HTMLDivElement | null>(null);
  const api = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;
  let initialPost = slice(data, 0, index);
  const [query, setQuery] = useState<string | undefined>(
    inputRef.current?.value
  );

  useEffect(() => {
    const getData = async () => {
      try {
        if (inputRef.current?.value.trim().length !== 0) {
          console.log(inputRef.current?.value);
          setIsEmpty(false);

          const res = await axios.get(
            `${api}recipes/complexSearch?query=${query}&number=${index}&apiKey=${key}`
          );
          setData(res.data.results);
          setTotal(res.data.totalResults);

          if (bodyRef.current?.style) {
            bodyRef.current.style.overflow = "scroll";
          }
        } else {
          setIsEmpty(true);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getData();
  }, [index, query, api, key]);

  const loadMore = () => {
    setIndex(index + 10);
    console.log(index);
    if (total) {
      if (index >= total) {
        setIsCompleted(true);
      } else {
        setIsCompleted(false);
      }
    }
  };
  console.log(index);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="latest"
      ref={bodyRef}
    >
      <section className="search-bar">
        <img src={logo} alt="logo" />
        <div className="input-container">
          <input id="input-form" ref={inputRef} type="text" />
          <div
            className="search-icon"
            onClick={() => {
              setClicked(true);
              setIndex(10);
              setQuery(inputRef.current?.value);
            }}
          >
            <motion.div whileTap={{ scale: 0.2 }} className="icon">
              <BsSearch />
            </motion.div>
          </div>
        </div>
      </section>
      {error ? (
        <Loading message={Status.quotaExceeded} />
      ) : clicked && isEmpty ? (
        <Loading message={Status.empty} />
      ) : data && total === 0 && clicked ? (
        <Loading message={Status.notFound} />
      ) : data ? (
        <>
          <div className="card-body-container">
            <section className="card-container" ref={secondBodyRef}>
              {initialPost.length > 0
                ? initialPost.map((recipe) => (
                    <Suspense fallback={<Loading message={Status.isLoading} />}>
                      <RecipeCard
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        key={recipe.id}
                      />
                    </Suspense>
                  ))
                : null}
            </section>
          </div>
          {!isCompleted ? (
            <div className="button-container">
              <motion.button
                whileTap={{ scale: 1.1 }}
                type="button"
                className="btn-loadmore"
                onClick={() => loadMore()}
              >
                Load More
              </motion.button>
            </div>
          ) : null}
        </>
      ) : null}
    </motion.section>
  );
};

export default Search;
