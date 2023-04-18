import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading";
// const Loading = React.lazy(() => import("../components/Loading"));

// import Card from "../components/Card";
const Card = React.lazy(() => import("../components/Card"));
export default function Movies() {
  let Params = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const observer = useRef();
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&query=${Params.inpot}`
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
  }, [Params.inpot]);

  const loadMoreMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=729a4b9f9d981662d72f3372b90203a9&include_adult&query=${Params.inpot}&page=${page}`
    );
    const data = await response.json();

    setPage(page + 1);
    setMovies([...movies, ...data.results]);
    setLoading(false);
  }, [page]);

  const lastCardRef = useCallback(
    // (*)
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreMovies();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMoreMovies]
  );

  return (
    <>
      <main>
        <div className="CardsContener">
          {movies.length > 0
            ? movies.map((item, index) => {
                return (
                  <Suspense key={index} fallback={<Loading />}>
                    <Card
                      data={item}
                      key={index}
                      {...item}
                      media_type={item.media_type || "movie"}
                      lastCardRef={lastCardRef}
                    />
                  </Suspense>
                );
              })
            : "no data"}
        </div>

        {loading && <Loading />}
      </main>
    </>
  );
}
