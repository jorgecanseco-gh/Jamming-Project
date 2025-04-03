import React from "react";
import styles from './Track.module.css';


// component to display a single track

function Track({name, artist, album}) {
    return (
        <div className={styles.Track}>	
            <h3>{name}</h3>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}


// Export the Track component

export default Track;