import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <Dictionary defaultKeyword="tropical" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/marynburns"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maryn McNamara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/marynmcnamara/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://delightful-gumdrop-faeb0a.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
