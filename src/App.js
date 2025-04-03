import React from 'react';
import styles from './App.module.css'
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import TrackList from './Components/Tracklist/Tracklist';
import Playlist from './Components/Playlist/Playlist';
import Track from './Components/Track/Track';



function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
      Jamming
      </header>
      <main className={styles.main}>
        <SearchBar />
        <SearchResults />
        <TrackList />
        <Playlist />
        <TrackList/>
        <Track />
      </main>
    </div>
  )
}

export default App;