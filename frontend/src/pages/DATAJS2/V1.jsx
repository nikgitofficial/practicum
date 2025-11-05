import React, { useState, useEffect } from "react";

const  V1 = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // filter posts by search input
  const filtered = data.filter(
    (posts) =>
      posts.title.toLowerCase().includes(search.toLowerCase()) ||
      posts.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>User Lists</h1>
      <input
        placeholder="search by title or body"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table border="2" cellPadding="10">
        <thead>
          <tr>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((posts) => (
              <tr key={posts.id}>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: "center", color: "red" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default V1;
