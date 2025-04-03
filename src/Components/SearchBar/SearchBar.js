
import React, { useState } from "react";
import styles from './SearchBar.module.css'


// function for the SearchBar component

function SearchBar({ onSearch }) {

    const handleSearch = (e) => {
        e.preventDefault();
        if (term) {
          onSearch(term);
        }
      };

    const [term, setTerm] = useState('');
    return (
        <div className={styles.searchBarContainer}>
            <form>
                <input 
                type='text' 
                className={styles.input} 
                placeholder="Search for your song"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                />
                <button type='submit' className={styles.searchButton} onClick={handleSearch}>
                    Search
                </button>
            </form>
        </div>
    )
}


// export the function for use in other components
export default SearchBar;