import React, { useState } from "react";

function CreateShortener(props) {
  const [inputs, setInputs] = useState([""]);
  const [hash, setHash] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);

  function handleChangeInput(value, index) {
    const text = value.target.value;
    let newState = [...inputs];
    newState[index] = text;
    setInputs(newState);
  }

  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  function createShortener() {
    const shortener = {
      links: inputs,
      hash: hash,
      description: description
    };
    setLoader(true);
    fetch("http://127.0.0.1:8080/api/shortener", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(shortener)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setLoader(false);
      });
  }

  if (loader)
    return (
      <div>
        <p>loading</p>
      </div>
    );

  return (
    <div>
      <input
        value={hash}
        onChange={value => setHash(value.target.value)}
        placeholder="customize hash"
      />
      <input
        value={description}
        onChange={value => setDescription(value.target.value)}
        placeholder="add description"
      />
      {inputs.map((value, index) => {
        return (
          <input
            key={index}
            value={value}
            onChange={value => handleChangeInput(value, index)}
            placeholder="add url"
          />
        );
      })}

      <br />
      <button onClick={() => handleAddInput()}>add more inputs</button>
      <br />
      <button
        onClick={() => {
          createShortener();
        }}
      >
        create shortener
      </button>
    </div>
  );
}

export default CreateShortener;
