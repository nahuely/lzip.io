import React, { useState, useContext, useEffect } from "react";
import { Button, Input, Loader } from "../../../components";
import { RESOLVER_URL } from "../../../config/constants";
import DispatchContext from "../../../context/dispatchContext";
import "./styles.scss";

function CreateShortener({ history }) {
  const [inputs, setInputs] = useState([""]);
  const [hash, setHash] = useState("");
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [execute, setExecute] = useState(null);

  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    if (!execute) return;

    async function makeRequest() {
      try {
        setLoader(true);
        const response = await fetch("http://localhost:8080/api/shortener", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            links: inputs,
            hash: hash || undefined,
            description: description || undefined
          })
        });

        const { data } = await response.json();

        dispatch({
          type: "addShortener",
          payload: {
            url: `${RESOLVER_URL}/${data.hash}`,
            id: data.hash,
            timestamp: new Date().toString()
          }
        });
        handleResetForm();
        setData(data.hash);
      } catch ({ message, name }) {
        setError(message);
      } finally {
        setLoader(false);
      }
    }
    makeRequest();

    setExecute(false);

    return () => {};
  }, [execute]);

  function handleChangeInput(value, index) {
    let newState = [...inputs];
    newState[index] = value;
    setInputs(newState);
  }

  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  function handleCreateShortener(event) {
    event.preventDefault();
    setExecute(true);
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

  return (
    <div className="view view__container">
      {loader ? (
        <Loader />
      ) : data ? (
        <div className="create-shortener create-shortener__container">
          <p className="create-shortener__link">
            The shortener link is <span>{`${RESOLVER_URL}/${data}`}</span>
          </p>
          <div className="create-shortener__actions">
            <Button
              onClick={() => handleCopyToClipboard(`${RESOLVER_URL}/${data}`)}
            >
              copy shortener
            </Button>

            <Button onClick={() => history.push(`/shortener/track/${data}`)}>
              go to tracking
            </Button>

            <Button onClick={() => setData(null)}>create new shortener</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleCreateShortener} className="form form__container">
          <div className="form__header">
            <div className="form__title">
              <p>create shortener</p>
            </div>
            <div className="form__explanation">
              <p>create shortener that open multiple links</p>
            </div>
          </div>
          <div className="form__inputs">
            <Input
              className="form__input"
              value={hash}
              type="text"
              onChange={value => setHash(value.target.value)}
              placeholder="customize hash"
            />
            <Input
              className="form__input"
              value={description}
              type="text"
              onChange={value => setDescription(value.target.value)}
              placeholder="add description"
            />
            {inputs.map((value, index) => (
              <Input
                className="form__input"
                required
                type="url"
                value={value}
                key={index}
                onChange={value => handleChangeInput(value.target.value, index)}
                placeholder="add url"
              />
            ))}
            <Button onClick={handleAddInput}>add more inputs</Button>
          </div>
          <div className="form__controls">
            <Button type="submit">create</Button>
            <Button onClick={handleResetForm}>reset</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default CreateShortener;
