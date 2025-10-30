import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Data2 from "./pages/Data2";
import Data3 from "./pages/Data3";
import Data4 from "./pages/Data4";

import Data5 from "./pages/Data5";

import DisplayData2 from "./pages/DisplayData2";
import QuestionCreator from "./pages/QuestionCreator";
import Questionnaire from "./pages/Questionnaire";
import Dashboard from "./pages/Dashboard";
import Jslessons from "./pages/Jslessons";
import Jslessons2 from "./pages/Jslessons2";
import Jslessons3 from "./pages/Jslessons3";
import Jslessons4 from "./pages/Jslessons4";  
import Jslessons5 from "./pages/Jslessons5";
import Jslessons6 from "./pages/Jslessons6";
import Jslessons7 from "./pages/Jslessons7";
import Jslessons8 from "./pages/Jslessons8";
import Fortasks from "./pages/Fortasks";
import Jsground1 from "./pages/Jsground1";
import Jsgames from "./pages/Jsgames";
import Jsground2 from "./pages/Jsground2";
import Jsground3 from "./pages/Jsground3";
import Jsground4 from "./pages/Jsground4";
import Jsground5 from "./pages/Jsground5";
import Jsground6 from "./pages/Jsground6";
import Jsground7 from "./pages/Jsground7";





const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/data2" element={<Data2 />} />
          <Route path="/displaydata2" element={<DisplayData2 />} />
          <Route path="/data3" element={<Data3/>}/>
          <Route path="/data4" element={<Data4/>}/>

=
          <Route path="/data5" element={<Data5/>}/>
          <Route path="/jslessons" element={<Jslessons/>}/>
          <Route path="/jslessons2" element={<Jslessons2/>}/>
          <Route path="/jslessons3" element={<Jslessons3/>}/>
          <Route path="/jslessons4" element={<Jslessons4/>}/>
          <Route path="/jslessons5" element={<Jslessons5/>}/>
          <Route path="/jslessons6" element={<Jslessons6/>}/>
          <Route path="/jslessons7" element={<Jslessons7/>}/>
          <Route path="/jslessons8" element={<Jslessons8/>}/>
          <Route path="/tasks1" element={<Fortasks/>}/>
          <Route path="/jsground1" element={<Jsground1/>}/>
          <Route path="/jsground2" element ={<Jsground2/>}/>
          <Route path="/jsground3" element ={<Jsground3/>}/>
          <Route path="/jsground4" element ={<Jsground4/>}/>
          <Route path="/jsground5" element ={<Jsground5/>}/>
          <Route path="/jsground6" element ={<Jsground6/>}/>
          <Route path="/jsground7" element ={<Jsground7/>}/>
          <Route path="/jsgames" element={<Jsgames/>}/>
          <Route path="/create-question" element={<QuestionCreator />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        
      </Routes>
    </Router>
  );
};

export default App;
