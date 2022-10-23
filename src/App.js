import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [click, setClick] = useState(true);
  const [ id, setId ] = useState("");
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const API_URL = "https://api.adviceslip.com/advice";
    const fetchRequest = async () => {
      try {
        if (click === true) {
          const response = await fetch(API_URL);
          const randomAdvice = await response.json();
          setAdvice(randomAdvice.slip.advice);
          setId(randomAdvice.slip.id)
          setClick(false);
        }
      } catch (err) {
        setFetchError(err.message);
        setAdvice("");
        setId("");
      }
    }
    fetchRequest();
  }, [click]);
  
  return (
    <div className="App">
      <Card advice={advice} setAdvice={setAdvice} id={id} setId={setId} click={click} setClick={setClick} fetchError={fetchError}/>
    </div>
  );
}

export default App;
