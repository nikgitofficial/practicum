import React from "react";

const Jslessons4 = () => {
  const operation = ["addition", "subtraction", "multiplication", "division"];
  const operationSign = ["+", "-", "*", "/"];
  const add = (a, b) => a + b;
  const results = add(2, 3);

  // 23/10/25 practice //
  const courseArray = ["Mathematics", "Science", "History", "Art"];
  

  return (
    <>
      <h1>the results: {`${results}  ${operation[0]}`}</h1>

      <h1>Operations</h1>
      <table>
        <thead>
          <tr>
            <th>List</th>
            <th>Signs</th>
          </tr>
        </thead>
        <tbody>
          {operation.map((operation, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{operation}</td>
              <td>{operationSign[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 📍 Embedded Google Map - Nasipit, Agusan del Norte */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  }}
>
  <h2>Our Location</h2>
  <iframe
    title="Google Map - Nasipit, Agusan del Norte"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31607.53428641477!2d125.29797159999999!3d8.970320600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fdc89edbaf99b3%3A0xf9a4e13ffaf872e2!2sNasipit%2C%20Agusan%20Del%20Norte%2C%20Philippines!5e0!3m2!1sen!2sph!4v1730000000000!5m2!1sen!2sph"
    width="1000"
    height="600"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  />
</div>
{/*23/10/25 practice*/}
<div>
  <h1>Course:{courseArray[0]}</h1>
  
</div>




   

    </>
  );
};

export default Jslessons4;
