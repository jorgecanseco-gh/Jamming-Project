import React from "react";
import styles from "./Tracklist.module.css";


// Component to display the traclist

function TrackList() {
    return (
        <div className={styles.tracklist}>
            <h2>Tracklist</h2>
            {/*This is where the tracklist will be displayed */}
        </div>
    )
}

// Export function to be used in other components

export default TrackList;