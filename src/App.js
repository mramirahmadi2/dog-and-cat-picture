import RandomCatPicture from "./RandomCatPicture";
import RandomDogPicture from "./RandomDogPicture";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navebar";

function App() {
  return (
    <Router>
      <div >
      <Navbar />
        <div >
          <Routes className="App">
            <Route path="/RandomCatPicture" exact element={<RandomCatPicture />} />
            <Route path="/" element={<RandomDogPicture />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
