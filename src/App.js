import "./App.css";
import React, { useState, useEffect } from "react";

import SingleEntry from "./components/SingleEntries";
import ActiveEntry from "./components/ActiveEntry";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [entriesArray, setEntriesArray] = useState([]);

  const serverError = "There was a server-side problem. Try again later.";
  const connectionError =
    "There is a problem with connection to server. Try again later.";



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
          setEntriesArray(jsonResponse.data)
        }
      })
      .catch((error) => {
        setErrorMessage(connectionError);
      });
  }, []);

  return (
    <div className="App">
      <p className={errorMessage ? "" : "invisible"}>{errorMessage}</p>
      <ActiveEntry />
      <SingleEntry weatherEntriesArray={entriesArray}/>
    </div>
  );
}

export default App;
