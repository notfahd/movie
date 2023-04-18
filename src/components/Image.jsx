import React, { Suspense } from "react";
import Loading from "./Loading";

export default function Image(data) {
  let img2 = "https://image.tmdb.org/t/p/w300/";

  return (
    <Suspense fallback={<Loading />}>
      <img
        stule={{
          width: data.width
        }}
        src={img2 + data.file_path}
        alt={"title"}
        loading="lazy"
      />
    </Suspense>
  );
}
