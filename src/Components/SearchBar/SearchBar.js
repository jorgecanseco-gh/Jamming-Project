
import React from "react";
import styles from './SearchBar.module.css'


// function for the SearchBar component

function SearchBar() {
    return (
        <div className="{styles.searchBarContainer}">
            <form>
                <input type='text' className={styles.input} placeholder="Search for your song"/>
                <button type='submit' className={styles.searchButton}>
                    Search
                </button>
            </form>
        </div>
    )
}


// export the function for use in other components
export default SearchBar;