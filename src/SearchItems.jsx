
import { useState } from "react";

const SearchItems = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ol>
        {filteredItems.map((item, index) => (
          <li key={index}>
            <p>
              <strong>{item}</strong>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};



export default SearchItems;
