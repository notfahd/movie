import React, { Suspense } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";

import { FaStar, FaBookmark } from "react-icons/fa";
import Bookmark from "./Bookmark";
export default function Card({
  lastCardRef,
  id,
  title,
  name,
  poster_path,
  genre_ids,
  vote_count,
  vote_average,
  original_language,
  adult,
  media_type,
  release_date,
  first_air_date,
  profile_path,
  known_for_department,
  character,
  data
}) {
  let img2 = "https://image.tmdb.org/t/p/w300/";
  const img_rep =
    // "https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png";
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
  const genres = {
    genres: [
      {
        id: 28,
        name: "Action"
      },
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 16,
        name: "Animation"
      },
      {
        id: 35,
        name: "Comedy"
      },
      {
        id: 80,
        name: "Crime"
      },
      {
        id: 99,
        name: "Documentary"
      },
      {
        id: 18,
        name: "Drama"
      },
      {
        id: 10751,
        name: "Family"
      },
      {
        id: 14,
        name: "Fantasy"
      },
      {
        id: 36,
        name: "History"
      },
      {
        id: 27,
        name: "Horror"
      },
      {
        id: 10402,
        name: "Music"
      },
      {
        id: 9648,
        name: "Mystery"
      },
      {
        id: 10749,
        name: "Romance"
      },
      {
        id: 878,
        name: "Science Fiction"
      },
      {
        id: 10770,
        name: "TV Movie"
      },
      {
        id: 53,
        name: "Thriller"
      },
      {
        id: 10752,
        name: "War"
      },
      {
        id: 37,
        name: "Western"
      }
    ]
  };

  const genre = genres?.genres?.filter(
    (obj) => genre_ids?.indexOf(obj.id) !== -1
  );

  const pp = (img) => {
    if (img === undefined) return img_rep;
    else if (img) return img2 + img;
    else if (img === null) return img_rep;
  };
  const type = "/Detail/" + media_type ? media_type : "movie";

  return (
    <div key={type + id} className="card" ref={lastCardRef}>
      <Bookmark details={data} type={"movie"} />

      <Link to={`/detail/${type}/${id}`}>
        <div className="poster">
          <Suspense fallback={<Loading />}>
            <img
              src={pp(poster_path || profile_path)}
              alt={title}
              loading="lazy"
            />
          </Suspense>
        </div>
        <div className="info">
          <span>
            {original_language && original_language + " - "}
            {release_date?.split("-")[0] || first_air_date?.split("-")[0]}
            {adult && " - adult"}
            {known_for_department && " - " + known_for_department}
          </span>
          <h2>{title || name}</h2>
          {vote_average > 0 && (
            <h3 className="rating">
              <FaStar color="gold" />
              {(vote_average * 10).toFixed(1)}%
            </h3>
          )}
          {genre_ids && (
            <div className="genres">
              {genre.map((g, i) => {
                return (
                  <span key={g.id} className="genre">
                    {g.name}
                  </span>
                );
              })}
            </div>
          )}
          {character && <div>{character}</div>}
        </div>
      </Link>
    </div>
  );
}
