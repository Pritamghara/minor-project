import React, { useState } from 'react';
import './SearchBar.css';
import { SearchBarProps } from './SearchBarProps';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch=()=>{

    onSearch(query)
  }

  

 

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
       
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
