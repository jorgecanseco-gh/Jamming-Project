import React from "react";
import styles from './SearchResults.module.css';


// Function component to display the search results

function SearchResults() {
    return (
        <div className={styles.SearchResults}>
            <h2>Search Results</h2>
            <main>
                {/* This is where the search results will be displayed */}
            </main>
        </div>
    )
}


// Export the SearchResults component
export default SearchResults;