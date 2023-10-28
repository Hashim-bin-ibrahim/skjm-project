import { Button } from "react-bootstrap";
import Header from "./components/Header";
import OverRoll from "./components/OverRoll";
import Result_chart from "./components/Results";
import './style.css'

function App() {
  return (
    <div>
      <Header />
      <h5 className="musabaka_text">മുസാബഖ 2023 കോയിലോട് </h5>
      <OverRoll/>
      <Result_chart/>
    </div>
  );
}

export default App;
