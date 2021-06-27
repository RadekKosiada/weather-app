import "./styles/index.min.css";

import React, { useState, useEffect, useCallback } from "react";

import SingleEntries from "./components/SingleEntries";
import ActiveEntry from "./components/ActiveEntry";

import getTemperatures from "./helpers/getTemperatures";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [entriesArray, setEntriesArray] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [lowestTemp, setLowestTemp] = useState(0);
  const [highestTemp, setHighestTemp] = useState(0);

  const serverError = "There was a server-side problem. Try again later.";
  const connectionError =
    "There is a problem with connection to server. Try again later.";

  const getSelectedEntry = useCallback((id) => {
    setSelectedId(id);
  }, []);

  useEffect(() => {
    fetch("/weather-data")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.code === "404") {
          setErrorMessage(serverError);
        } else {
          setEntriesArray(jsonResponse.data);
          setLowestTemp(getTemperatures(selectedId, jsonResponse.data)[0]);
          setHighestTemp(getTemperatures(selectedId, jsonResponse.data)[1]);

        }
      })
      .catch((error) => {
        setErrorMessage(connectionError);
      });
  }, [selectedId]);

  return (
    <div className="App">
      {errorMessage ? <p className="error-message">{errorMessage}</p> : null}

      <ActiveEntry 
      selectedEntry={entriesArray[selectedId]}
      lowestTemp={lowestTemp}
      highestTemp={highestTemp}
       />
      <SingleEntries
        selectedId={selectedId}
        weatherEntriesArray={entriesArray}
        getSelectedEntry={getSelectedEntry}
      />
    </div>
  );
}

export default App;
