import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App">
      <input
        placeholder="E.g. Ahmed..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age!</button>

      <h1> Name: {predictedAge?.name} </h1>
      <h1> Count: {predictedAge?.count} </h1>
      <h1> Predicted Age: {predictedAge?.age} </h1>
    </div>
  );
}

export default App;
