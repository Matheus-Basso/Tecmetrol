import "./styles.css";
import Navbar from "../src/Components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="exclamation-sign">
        <i className="bi bi-exclamation-octagon-fill"></i>
        <p>Estamos em manutenção</p>
      </div>
    </>
  );
}
