import React from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";

// This component is responsible for rendering the playlist section of the app.

function Playlist({playlistName, playlistTracks, onRemove, onNameChange}) {
    return (
        <div className={styles.Playlist}>
            <input
                value={playlistName}
                onChange={(e) => onNameChange(e.target.value)}
                className={styles.playlistInput}
            />
            {playlistTracks.map((track) => {
                const { id, name, artist, album } = track;
                return <Track
                    key={id}
                    name={name}
                    artist={artist}
                    album={album}
                    track={track}
                    onRemove={onRemove}
                />
            })}
            <button type='submit' className={styles.saveButton}>Save to Spotify</button>
        </div>
    )
}

// Export function other components can use it

export default Playlist;

