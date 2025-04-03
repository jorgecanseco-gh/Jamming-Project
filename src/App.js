
import React from 'react';
import styles from './App.module.css'
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import TrackList from './Components/Tracklist/Tracklist';

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
      </main>
    </div>
  )
}

export default App;