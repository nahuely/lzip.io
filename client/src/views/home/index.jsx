import React, { useState } from "react";

function Home({ history }) {
  return (
    <div>
      <button onClick={() => history.push("/shortener/create")}>
        create shortener
      </button>
    </div>
  );
}

export default Home;
