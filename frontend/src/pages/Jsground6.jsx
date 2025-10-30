import React, { useState, useEffect } from "react";

const Jsground6 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({ firstname: "", middlename: "", lastname: "" });
  const [editId, setEditId] = useState(null);

  const API_URL = "http://localhost:5000/api/data2";

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/getdata2`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new user
  const handleAdd = async () => {
    try {
      const res = await fetch(`${API_URL}/postdata2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to add");
      setForm({ firstname: "", middlename: "", lastname: "" });
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  // Update user
  const handleUpdate = async () => {
    try {
      const res = await fetch(`${API_URL}/updatedata2/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to update");
      setForm({ firstname: "", middlename: "", lastname: "" });
      setEditId(null);
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/deletedata2/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  // Start editing a user
  const startEdit = (user) => {
    setEditId(user._id);
    setForm({
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Data2 CRUD the data is come dron data2 then fetch here</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={form.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="middlename"
          placeholder="Middle Name"
          value={form.middlename}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={form.lastname}
          onChange={handleChange}
        />
        {editId ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.firstname} {user.middlename} {user.lastname}{" "}
            <button onClick={() => startEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jsground6;
