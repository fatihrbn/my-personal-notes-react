import React from "react";

const SearchBar = ({ searchTitle, onSearch }) => {
  return (
    <div className="note__search">
      <input type="text" placeholder="Cari catatan ..." value={searchTitle} onChange={onSearch} />
    </div>
  )
}

export default SearchBar;