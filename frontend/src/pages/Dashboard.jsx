import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/answers") // GET all answers
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard - User Answers</h1>

      {data.map((userData, i) => (
        <div key={i} style={{ marginBottom: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
          <h2>User: {userData.user}</h2>
          <ul>
            {userData.responses.map((r, j) => (
              <li key={j} style={{ marginBottom: "0.5rem" }}>
                <strong>Question:</strong> {r.question} <br/>
                <strong>Selected:</strong> {r.selected} <br/>
                <strong>Correct:</strong> {r.correct} <br/>
                <strong>Status:</strong> {r.isCorrect ? "✅ Correct" : "❌ Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
