import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../../components";
import { RESOLVER_URL } from "../../../config/constants";

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
    fetch("http://localhost:8080/api/shortener", {
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

  function handleCopyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      alert("the link was copied to your clipboard");
    });
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
        <p>{`${RESOLVER_URL}/${data}`}</p>
        <Button
          onClick={() => handleCopyToClipboard(`${RESOLVER_URL}/${data}`)}
        >
          copy shortener
        </Button>
        <br />
        <Link to={`/shortener/track/${data}`}>go to tracking</Link>
        <br />
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
