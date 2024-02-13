import { Button } from "./components/Button";
import "./App.css";
import picHome from "./assets/picHome.jpeg";

function App() {
  return (
    <>
      <h1>The last legend</h1>
      <img className="picHome" src={picHome} alt="" />
      <h4>Un jeu indépendant</h4>
      <Button placeholder="Start" />
      <Button placeholder="Régles" />
    </>
  );
}

export default App;
