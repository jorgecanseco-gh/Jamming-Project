import React from "react";
import styles from "./Playlist.module.css";

// This component is responsible for rendering the playlist section of the app.

function Playlist() {
    return (
        <div classNAme={styles.Playlist}>
            <h2>Playlist</h2>
            {/* Add your playlist items here */}
            <button type='submit' className={styles.saveButton}>Save to Spotify</button>
        </div>
    )
}

// Export function other components can use it

export default Playlist;

