import { useState } from "react";

const Jsground2 = () => {
  const [buy, setBuy] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [money,setMoney] = useState(0);


  const menu = [
    { item1: 1, itemname: "burgers", itemprice: 50 },
    { item1: 2, itemname: "pizza", itemprice: 100 },
  ];

  const buyed = (itemname, itemprice) => {
    setBuy(`You bought ${itemname} for ₱${itemprice}`);
    setPrice(itemprice); // store the selected item’s price
  };

  // compute total dynamically
  const total = quantity && price ? Number(quantity) * Number(price) : 0;

  const exchange = money  && total ? Number(money) - Number(total) : 0;

  return (
    <>
      <h1>Fast Food</h1>
      <p>Choose your menu</p>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((m, index) => (
            <tr key={index}>
              <td>{m.itemname}</td>
              <td>{m.itemprice}</td>
              <td>
                <button onClick={() => buyed(m.itemname, m.itemprice)}>
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{buy}</h2>

      <p>Enter Quantity</p>
      <input
        type="number"
        placeholder="Enter Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <p>
        <strong>Total:</strong> ₱{total}
      </p>
      <p>Enter Your Money</p>
      <input 
      type="number"
      placeholder="Enter Youre Money"
      value={money}
      onChange={(e) => setMoney(e.target.value)}
      />
      <strong>Change:</strong> ₱{exchange}

    </>
  );
};

export default Jsground2;
