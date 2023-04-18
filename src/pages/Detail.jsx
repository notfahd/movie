import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import VoteContainer from "../components/VoteContainer";
import Bookmark from "../components/Bookmark";
import Loading from "../components/Loading";
import Card from "../components/Card";
import Image from "../components/Image";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  let Params = useParams();

  const img2 = "https://image.tmdb.org/t/p/w185";
  // const img22 = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/";
  const img22 = "https://www.themoviedb.org/t/p/w1280";

  const getDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${Params.type}/${Params.id}?api_key=729a4b9f9d981662d72f3372b90203a9&append_to_response=recommendations,director,translations,certification,similar,trailers,credits,reviews,keywords,certification,images,external_ids
        `
      );
      const data = await response.json();
      setLoading(false);
      setDetails(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
    window.scrollTo(0, 0);
  }, [Params.id, Params.type]);
  // console.log(details);

  return (
    <>
      <main className="detail">
        {loading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              background: "#0000005c",
              zIndex: "99999",
              height: "100%"
            }}
          >
            <Loading />
          </div>
        )}
        <header
          style={{
            background: `
            linear-gradient(to right, var(--linear-gradient-hed)),
            url(${img22 + details.backdrop_path})
            `
          }}
        >
          <div className="headerInfo">
            <div className="poster">
              <img
                src={img2 + (details?.profile_path || details?.poster_path)}
                alt={details.title || details.name}
              />
            </div>
            <div className="movie-card-description">
              <h1 className="movie-title">
                {details.title || details.name}
                {details?.release_date ||
                  (details?.first_air_date && (
                    <h5>
                      (
                      {details?.release_date?.split("-")[0] ||
                        details?.first_air_date?.split("-")[0]}
                      )
                    </h5>
                  ))}
              </h1>

              <p className="genres">
                {details.genres?.map((genre) => (
                  <span key={genre.id}> {genre.name} </span>
                ))}
              </p>
              <div className="lik">
                {details.vote_average ? (
                  <div
                    className="voteContainer"
                    style={{
                      width: "60px"
                    }}
                  >
                    <VoteContainer Vote={details.vote_average} />
                  </div>
                ) : null}

                <Bookmark details={details} type={Params.type} />
              </div>
              <p className="movie-shorts">
                {details?.overview || details?.biography}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: " repeat(auto-fit, minmax(40%, 0fr))",
                  gridGap: "10px",
                  justifyItems: "start"
                }}
              >
                {details.release_date && (
                  <h3>Release Date: {details.release_date}</h3>
                )}
                {/* movie or tv  */}
                {details.runtime && <h3>Runtime: {details.runtime}</h3>}
                {details.revenue > 0 && <h3>Revenue: {details.revenue}</h3>}
                {details.budget > 0 && <h3>Budget: {details.budget}</h3>}
                {/* end  movie or tv  */}

                {/* person */}
                {details.known_for_department && (
                  <h3>known for department: {details.known_for_department}</h3>
                )}
                {details.birthday && <h3>birthday: {details.birthday}</h3>}
                {details.place_of_birth && (
                  <h3>place of birth: {details.place_of_birth}</h3>
                )}
                {details.deathday && <h3>deathday: {details.deathday}</h3>}
                {/* end  person */}
              </div>
            </div>
          </div>
        </header>

        <div className="detailBody">
          <h2>credits</h2>
          <div className="trending">
            {details?.credits?.cast?.map((item, index) => {
              return (
                <Suspense key={index} fallback={<Loading />}>
                  <Card
                    key={index}
                    {...item}
                    media_type={Params.type === "person" ? "movie" : "person"}
                  />
                </Suspense>
              );
            })}
          </div>

          {details?.images?.backdrops && (
            <>
              <h2>backdrops</h2>
              <div className="trending">
                {details?.images?.backdrops?.map((item, index) => {
                  return (
                    <Suspense key={index} fallback={<Loading />}>
                      <Image key={index} {...item} />
                    </Suspense>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Detail;
