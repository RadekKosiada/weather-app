import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
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
        }
      })
      .catch((error) => {
        setErrorMessage(connectionError);
      });
  }, []);

  return (
    <div className="App">
      <p className={errorMessage ? "" : "invisible"}>{errorMessage}</p>
    </div>
  );
}

export default App;
