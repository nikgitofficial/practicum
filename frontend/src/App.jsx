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
import Jsground8 from "./pages/Jsground8";


 {/*V2 NAVBAR MENU*/}
 import V1 from "./pages/DATAJS2/V1";
 import V2 from "./pages/DATAJS2/V2";
 import V3 from  "./pages/DATAJS2/V3";
 import V4 from "./pages/DATAJS2/V4";
 import V5 from "./pages/DATAJS2/V5";
 import V6 from "./pages/DATAJS2/V6";
 import V7 from "./pages/DATAJS2/V7";
 import V8 from "./pages/DATAJS2/V8";
 import V9 from "./pages/DATAJS2/V9";
 import V10 from "./pages/DATAJS2/V10";
 import V11 from "./pages/DATAJS2/V11";
 import V12 from "./pages/DATAJS2/V12";
 import V12login from "./pages/DATAJS2/V12login";
 import V13 from "./pages/DATAJS2/V13";
 import Activitylinks from "./pages/practicum/Activitylinks";

  {/*Practicum pages*/}
  import Practicum1 from "./pages/practicum/Practicum1";
  import Practicum2 from "./pages/practicum/Practicum2";
  import Practicum3 from "./pages/practicum/Practicum3";
  import Practicum4 from "./pages/practicum/Practicum4";
  import Practicum5 from "./pages/practicum/Practicum5";
  import Practicum6 from "./pages/practicum/Practicum6";
 
 




const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Activitylinks />} />
          <Route path="/data2" element={<Data2 />} />
          <Route path="/displaydata2" element={<DisplayData2 />} />
          <Route path="/data3" element={<Data3/>}/>
          <Route path="/data4" element={<Data4/>}/>


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
          <Route path="/jsground8" element ={<Jsground8/>}/>
          {/*V2 NAVBAR MENU*/}
          <Route path="/v1" element ={<V1/>}/>
          <Route path="/v2" element={<V2/>}/> 
          <Route path="/v3" element={<V3/>}/> 
          <Route path="/v4" element={<V4/>}/> 
          <Route path="/v5" element={<V5/>}/> 
          <Route path="/v6" element={<V6/>}/>
          <Route path="/v7" element={<V7/>}/>
          <Route path="/v8" element={<V8/>}/>   
          <Route path="/v9" element={<V9/>}/>
          <Route path="/v10" element={<V10/>}/>  
          <Route path="/v11" element={<V11/>}/> 
          <Route path="/v12" element={<V12/>}/> 
          <Route path="/v12login" element={<V12login/>}/> 
          <Route path="/v13" element={<V13/>}/> 
          <Route path="/home" element={<Home/>}/> 

          {/*practicum pages routes*/}
          <Route path="/practicum1" element={<Practicum1/>}/>
          <Route path="/practicum2" element={<Practicum2/>}/>
          <Route path="/practicum3" element={<Practicum3/>}/>
          <Route path="/practicum4" element={<Practicum4/>}/>
          <Route path="/practicum5" element={<Practicum5/>}/>
          <Route path="/practicum6" element={<Practicum6/>}/>
          



          <Route path="/jsgames" element={<Jsgames/>}/>
          <Route path="/create-question" element={<QuestionCreator />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        
      </Routes>
    </Router>
  );
};

export default App;
