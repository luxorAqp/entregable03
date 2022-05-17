import "./App.css";
import Location from "./components/Location/Location.js";
import header1 from "./assets/img/header1.png";
function App() {
  return (
    <div className="App">
      <header className="item-app">
        <img src={header1} alt="" />
      </header>
      <body className="item-app">
        <Location />
      </body>
    </div>
  );
}

export default App;
