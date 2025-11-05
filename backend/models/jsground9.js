// models/userModel.js
const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "Guest" },
];

// simulate async DB query
export const getAllUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 1000); // delay to simulate async
  });
};
