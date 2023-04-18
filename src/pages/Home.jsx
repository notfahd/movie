// ___________________________________
import React, { Suspense } from "react";

import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
// const Loading = React.lazy(() => import("../components/Loading"));

// import Card from "../components/Card";
const Card = React.lazy(() => import("../components/Card"));
export default function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult`
        );
        const data = await response.json();
        setLoading(false);
        setMovies(data.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  // console.log(movies);

  return (
    <>
      <main>
        <h2 className="sectionTitle">Trending</h2>
        <div className="trending">
          {movies.map((item, index) => {
            return (
              <Suspense key={index} fallback={<Loading />}>
                <Card key={index} {...item} media_type={"movie"} />
              </Suspense>
            );
          })}
        </div>
        {loading && <Loading />}
      </main>
    </>
  );
}
