import React from "react";
import styles from './Track.module.css';


// component to display a single track

function Track({name, artist, album, track, onAdd, onRemove, preview}) {
    return (
        <div className={styles.Track}>	
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
            {onAdd && <button onClick={() => onAdd(track)}>+</button>}
            {onRemove && <button onClick={() => onRemove(track)}>-</button>}
            {preview && (
            <audio controls className={styles.audioPlayer}>
                <source src={preview} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
)}

        </div>
    )
}



// Export the Track component

export default Track;