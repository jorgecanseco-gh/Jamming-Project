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

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri)
    console.log("Saving to Spotify:", trackURIs);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  }

  const initialTracks = [
    {
      id: 123,
      name: 'Rodeo',
      artist: 'Travis Scott',
      album: 'Rodeo',
      uri: 'spotify:track:1234567890'
    },
    {
      id: 456,
      name: 'Pluto',
      artist: 'Future',
      album: 'DS2',
      uri: 'spotify:track:1234562347890'
    },
    {
      id: 789,
      name: 'Verano',
      artist: 'Bad Bunny',
      album: 'Un Verano Sin Ti',
      uri: 'spotify:track:1234567657561890'
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
            onSave={savePlaylist}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App;