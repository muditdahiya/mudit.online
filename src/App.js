//components
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
