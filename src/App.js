import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="container">
        <FunctionalComponent />
        <ClassComponent />
      </div>
    </div>
  );
}

export default App;
