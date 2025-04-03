import React from "react";
import styles from './SearchResults.module.css';
import Track from "../Track/Track";


// Function component to display the search results

function SearchResults({ searchResults, onAdd }) {
    return (
        <div className={styles.SearchResults}>
            <h2>Search Results</h2>
            <section>
                {searchResults.map((track) => {
                    const { id, name, artist, album} = track;
                    return (
                        <div key={id}>
                        <Track name={name} artist={artist} album={album} track={track} onAdd={onAdd}/>
                        {/* Include a button to add o eliminate the track from the playlist */}
                        </div>
                    )
                })}
            </section>
        </div>
    )
}


// Export the SearchResults component
export default SearchResults;