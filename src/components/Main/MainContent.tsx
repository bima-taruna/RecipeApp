import { FC, useEffect, useState, lazy, Suspense } from "react";
import { RandomRecipe } from "../Popular/Popular";
import "./main.scss";
import axios from "axios";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loading, { Status } from "../Shared/Loading/Loading";
const Popular = lazy(() => import("../Popular/Popular"));
const Search = lazy(() => import("../Search/Search"));
const Recipe = lazy(() => import("../Recipe/Recipe"));
const About = lazy(() => import("../About/About"));

const MainContent: FC = () => {
  const [data, setData] = useState<Array<RandomRecipe> | null>(null);
  const api = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${api}recipes/random?number=4&apiKey=${key}`
        );

        setData(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      setData(null);
    };
  }, [api, key]);
  return (
    <>
      <main>
        <Suspense fallback={<Loading message={Status.isLoading} />}>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/RecipeApp/" element={<Popular data={data} />} />
              <Route path="/RecipeApp/search" element={<Search />} />
              <Route path="/RecipeApp/recipe/:id" element={<Recipe />} />
              <Route path="/RecipeApp/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </>
  );
};

export default MainContent;
