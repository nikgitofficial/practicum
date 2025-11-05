import React, { useState, useEffect } from "react";

const V2 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const api_url = "https://jsonplaceholder.typicode.com/comments";

  const getdata = async () => {
    try {
      const res = await fetch(api_url);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("failed to fetch data", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const filtered = data.filter(
    (comment) =>
      comment.name.toLowerCase().includes(search.toLowerCase()) ||
      comment.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Comments</h1>
      <input
        type="text"
        placeholder="Search by name or body"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border="2" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: "center", color: "red" }}>
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default V2;
