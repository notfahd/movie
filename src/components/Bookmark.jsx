import React from "react";
import { FaBookmark } from "react-icons/fa";

const Bookmark = ({ details, type }) => {
  return (
    <>
      <div className={`bookMark `}>
        <FaBookmark />
      </div>
    </>
  );
};

export default Bookmark;
