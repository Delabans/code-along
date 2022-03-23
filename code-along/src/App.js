import "./App.css";
import writers from "./writers";
import { useEffect, useState } from "react";
function App() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const getwriters = async () => {
      const response = await fetch("/writers.json");
      const data = await response.json();
      setWriters(data);
    };
    getwriters();
  }, []);

  return (
    <div className="App">
      <h1>Writer Profiles.</h1>
      <div className="container">
        {writers.map((writer) => (
          <div className="card">
            <img
              src={`/images/${writer.avatar}.png`}
              alt=""
              width="100%"
              height="300px"
            />
            <div className="textGroup">
              <h3>{writer.name}</h3>
              <p>{writer.email}</p>
              <p>{writer.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
