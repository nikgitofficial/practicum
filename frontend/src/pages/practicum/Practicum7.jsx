import React from "react";

const Practicum7 = () => {
  const user = { name: "nickapcs123", age: 21, isvalid: false };

  return (
    <>
      {!user.isvalid ? <h1>welcome</h1> : <h1>not welcome</h1>}
    </>
  );
};

export default Practicum7;
