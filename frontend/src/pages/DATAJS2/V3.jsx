import React, { useState, useEffect } from "react";

const V3 = () => {
  const [firstname, setFirstname] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v3/getv3data");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  const handleSubmit = async () => {
  if (!firstname.trim()) {
    alert("Please enter a firstname before submitting");
    return; // stop execution here
  }

  try {
    await fetch("http://localhost:5000/api/v3/postv3data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname }),
    });
    setFirstname("");
    fetchData();
    alert("Data saved");
  } catch (err) {
    console.error("Error saving data", err);
  }
};


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        margin: "0 auto",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h2>Simple V3 Data Form</h2>

      <input
        type="text"
        placeholder="Enter firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <h3 style={{ marginTop: 20 }}>Saved Data</h3>

      <div>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item._id}>
              <p style={{ margin: 0, fontWeight: "bold" }}>{item.firstname}</p>
              <small>{new Date(item.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default V3;
