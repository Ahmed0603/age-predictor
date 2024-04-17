import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get().then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Facts!</button>
      <p> {catFact} </p>
    </div>
  );
}
export default App;
