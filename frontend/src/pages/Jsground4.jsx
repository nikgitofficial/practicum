import React, { useState } from "react";

const Jsground4 = () => {
  const [click, setClick] = useState([]); // current array to display
  const [search, setSearch] = useState("");

  const names = ["pacquiao", "marquez", "barera", "bradley"];
  const vegetables = [
    "Artichoke", "Arugula", "Asparagus", "Avocado", "Bamboo shoots", "Beetroot",
    "Belgian endive", "Bok choy", "Broccoli", "Brussels sprouts", "Cabbage",
    "Carrot", "Cauliflower", "Celeriac", "Celery", "Chard", "Collard greens",
    "Corn", "Courgette", "Cucumber", "Daikon", "Dandelion greens", "Edamame",
    "Eggplant", "Fennel", "Garlic", "Ginger", "Green beans", "Jicama", "Kale",
    "Kohlrabi", "Leek", "Lettuce", "Mushroom", "Mustard greens", "Napa cabbage",
    "Okra", "Onion", "Parsnip", "Pea shoots", "Peas", "Pepper", "Potato",
    "Pumpkin", "Radicchio", "Radish", "Rutabaga", "Shallot", "Spinach",
    "Squash", "Sweet potato", "Tomato", "Turnip", "Watercress", "Yam",
    "Zucchini", "Alfalfa sprouts", "Bitter melon", "Chayote", "Endive", "Fiddlehead",
    "Galangal", "Horseradish", "Jalapeno", "Kangkung", "Kimchi cabbage",
    "Malabar spinach", "Mizuna", "Nopal cactus", "Pepino", "Purslane", "Ramps",
    "Samphire", "Scallion", "Seaweed", "Snap peas", "Sorrel", "Sunchoke",
    "Taro", "Tatsoi", "Tomatillo", "Turmeric", "Ube", "Wasabi", "Yardlong bean",
    "Yucca", "Zizania", "Bok choy sum", "Broccolini", "Cabbage palm", "Cardoon",
    "Celeriac root", "Chicory", "Corn salad", "Kohlrabi greens", "Mustard cress",
    "Oca", "Onion leek", "Rutabaga greens", "Sweetcorn", "White radish", "Yuca root",
    "Zostera", "Pumpkin leaves", "Winter melon", "Cucumber melon", "Spaghetti squash"
  ];

  // Filter the currently displayed array based on search
  const filteredClick = click.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (type) => {
    if (type === "names") {
      setClick(click === names ? [] : names); // toggle names
    } else if (type === "vegetables") {
      setClick(click === vegetables ? [] : vegetables); // toggle vegetables
    }
    setSearch(""); // reset search when switching arrays
  };

  return (
    <>
      <button onClick={() => handleClick("names")}>Show Names</button>
      <button onClick={() => handleClick("vegetables")}>Show Vegetables</button>

      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredClick.length > 0 ? (
          filteredClick.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No data found</li>
        )}
      </ul>
    </>
  );
};

export default Jsground4;
