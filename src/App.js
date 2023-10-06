import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import F1 from './componrnts/F1';
import Nav from "./componrnts/Nav";
import {Home , About} from "./componrnts/F2";
import Contact from './componrnts/Contact';

import {HashRouter , Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <F1 /> */}
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
