import React, { useState } from 'react';
import styles from './App.module.css'
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import TrackList from './Components/Tracklist/Tracklist';
import Playlist from './Components/Playlist/Playlist';
import Track from './Components/Track/Track';




function App() {

  const addTrack = (track) => {
    let tracks = [...playlistTracks];
    const alreadyInPlayList = playlistTracks.some((savedTrack) => savedTrack.id === track.id);
    if (!alreadyInPlayList) {
      tracks.push(track);
      setPlaylistTracks(tracks);
    }
  }

  const removeTrack = (track) => {
    const removeFromPlaylist = playlistTracks.filter((savedTrack) => savedTrack.id !== track.id);
    setPlaylistTracks(removeFromPlaylist);
  }

  const initialTracks = [
    {
      id: 123,
      name: 'Rodeo',
      artist: 'Travis Scott',
      album: 'Rodeo'
    },
    {
      id: 456,
      name: 'Pluto',
      artist: 'Future',
      album: 'DS2'
    },
    {
      id: 789,
      name: 'Verano',
      artist: 'Bad Bunny',
      album: 'Un Verano Sin Ti'
    }
  ]

  const [searchResults, setSearchResults] = useState(initialTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
      Jamming
      </header>
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.content}>
          <div className={styles.searchResults}>
            <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack}
            />
            <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={setPlaylistName}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;