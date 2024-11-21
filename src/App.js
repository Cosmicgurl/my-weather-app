import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          <p>
            This page was coded by{" "}
            <a
              href="https://github.com/Cosmicgurl"
              target="_blank"
              rel="noreferrer"
            >
              Natalie Voigt
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Cosmicgurl/my-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              opensourced on GitHub.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
