import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length > 0) navigate("/Search/" + input);
  };
  return (
    <form className="" onSubmit={submitHandler}>
      {/* <h1>SEARCH</h1> */}
      <div className="s">
        {/* <FaSearch onClick={submitHandler} /> */}
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          // value={input}
          // placeholder={"SEARCH"}
          placeholder={"Search for a movie, tv show, person......"}
        />
        <div className="icons" onClick={submitHandler}>
          <svg
            stroke="currentColor"
            // fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
