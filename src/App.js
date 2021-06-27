import "./styles/index.min.css";

import React, { useState, useEffect, useCallback } from "react";

import SingleEntries from "./components/SingleEntries";
import ActiveEntry from "./components/ActiveEntry";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [entriesArray, setEntriesArray] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const serverError = "There was a server-side problem. Try again later.";
  const connectionError =
    "There is a problem with connection to server. Try again later.";

  const getSelectedEntry = useCallback((id) => {
    setSelectedId(id);
  });

  useEffect(() => {
    fetch("/weather-data")
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if (jsonResponse.code === "404") {
          setErrorMessage(serverError);
        } else {
          setEntriesArray(jsonResponse.data);
        }
      })
      .catch((error) => {
        setErrorMessage(connectionError);
      });
  }, []);

  return (
    <div className="App">
      {errorMessage ? <p>{errorMessage}</p> : null}

      <ActiveEntry selectedEntry={entriesArray[selectedId]} />
      <SingleEntries
        weatherEntriesArray={entriesArray}
        getSelectedEntry={getSelectedEntry}
      />
    </div>
  );
}

export default App;
