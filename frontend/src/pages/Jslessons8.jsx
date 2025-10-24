import React from "react";

const Jslessons8 = () => {
  const numberarray = ["1", "2", "3"];

  return (
    <>
      <h1>Page for Mapping</h1>
      <table>
        <thead>
            <tr>
                
                <th>numbers</th>
            </tr>
            
        </thead>
        <tbody>
               { numberarray.map((num, index) => (
                <tr key={index}>
                <td>{num}</td>

                </tr>
               )
            )}
            </tbody>
      </table>
      
    </>
  );
};

export default Jslessons8;
