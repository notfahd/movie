function VoteContainer({ Vote }) {
  return (
    <>
      <div
        className="Vote"
        style={{
          position: "relative"
        }}
      >
        <svg
          viewBox="0 0 100 100"
          style={{
            background: "#00000080",
            borderRadius: "10000px",
            padding: "3px"
          }}
        >
          <path
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
            stroke="#BDC3C7"
            strokeWidth="5"
            fillOpacity="0"
          ></path>
          <path
            d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
            stroke="#f92b1e"
            strokeWidth="10"
            fillOpacity="0"
            style={{
              strokeDasharray: "280",
              strokeLinecap: "round",
              strokeDashoffset: Vote ? 280 - Vote * 2.8 * 10 : 280
            }}
          ></path>
        </svg>
        <span>
          {(Vote * 10).toFixed(0)}
          <br />%
        </span>
      </div>
    </>
  );
}

export default VoteContainer;
