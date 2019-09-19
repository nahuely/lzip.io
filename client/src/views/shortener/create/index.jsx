import React, { useState } from "react";
import { Button, Input } from "../../../components";

function CreateShortener({ history }) {
  const [inputs, setInputs] = useState([""]);
  const [hash, setHash] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function handleChangeInput(value, index) {
    let newState = [...inputs];
    newState[index] = value;
    setInputs(newState);
  }

  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  function handleCreateShortener() {
    const shortener = {
      links: inputs,
      hash: hash || undefined,
      description: description || undefined
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
      .then(({ data }) => {
        handleResetForm();
        setData(data.hash);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setLoader(false);
      });
  }

  function handleResetForm() {
    setInputs([""]);
    setHash("");
    setDescription("");
  }

  if (loader)
    return (
      <div>
        <p>creating shortener</p>
      </div>
    );

  if (data) {
    return (
      <div>
        <p>{data}</p>
        <Button onClick={() => setData(null)}>create new shortener</Button>
      </div>
    );
  }

  return (
    <div>
      <Input
        value={hash}
        onChange={value => setHash(value.target.value)}
        placeholder="customize hash"
      />
      <br />
      <Input
        value={description}
        onChange={value => setDescription(value.target.value)}
        placeholder="add description"
      />
      <br />
      {inputs.map((value, index) => {
        return (
          <div key={index}>
            <Input
              value={value}
              onChange={value => handleChangeInput(value.target.value, index)}
              placeholder="add url"
            />
          </div>
        );
      })}

      <br />
      <Button onClick={handleAddInput}>add more inputs</Button>
      <br />
      <Button onClick={handleCreateShortener}>create shortener</Button>
      <Button onClick={handleResetForm}>reset</Button>
      <br />
      <Button onClick={() => history.push("/")}>back home</Button>
    </div>
  );
}

export default CreateShortener;
