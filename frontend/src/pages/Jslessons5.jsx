import React, { useState} from "react";

const Jslessons5 = () => {
  
  const [coursevalue, setCoursevalue] = useState(() => {
    // Load saved value from localStorage when component starts
    return localStorage.getItem("coursevalue") || "";
  });
  //JSX content for the component // 

  const handleChange = (e) => {
    const newCoursevalue = e.target.value;
    setCoursevalue(newCoursevalue);
    localStorage.setItem("coursevalue", newCoursevalue); // Save to localStorage
  };

  const course = () => {
    if (coursevalue === "1") {
      return "Science";
    } else if (coursevalue === "2") {
      return "Maths";
    } else {
      return "Unknown Course";
    }
  };

  //calculator//

 


  return (
    <>

    {/* JSX content for the component */}
      <input
        type="number"
        placeholder="Enter Number"
        value={coursevalue}
        onChange={handleChange}
      />
      <h2>You type: {course()}</h2>
        <hr style={{ width: "60%", margin: "20px 0", border: "1px solid gray" }} />
         {/* calculator*/}
         
    </>
  );
};

export default Jslessons5;
