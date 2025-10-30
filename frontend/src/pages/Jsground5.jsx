import React, { useState, useEffect } from "react";

// Custom hook: fetch data with loading & error
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // cleanup
  }, [url]);

  return { data, loading, error };
};

const Jsground5 = () => {
  const [message, setMessage] = useState("Waiting...");
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Hello after 3 seconds!");
    }, 3000); // 3 seconds delay

    // Cleanup: in case component unmounts before timeout
    return () => clearTimeout(timer);
  }, []); // [

  // 1️⃣ Data fetching
  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  
  );

  // 2️⃣ Event listener: window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3️⃣ Debounced search effect
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) console.log("Searching for:", query);
    }, 500);

    return () => clearTimeout(handler); // cleanup
  }, [query]);

  // 4️⃣ Update document title
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // 5️⃣ Sync with localStorage
  useEffect(() => {
    localStorage.setItem("lastCount", count);
  }, [count]);

  useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(timer); // cleanup
}, []);

  return (
    <>
      <h1>Professional useEffect Patterns 2025</h1>
      

      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Clicked: {count}</p>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Window width: {width}px</p>

      <h2>Users:</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name} ---- {`Name:${user.username}`}</li>
          
        ))}
      </ol>
    </>
  );
};

export default Jsground5;
