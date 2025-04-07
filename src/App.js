import React, { useState, useEffect } from 'react';
import styles from './App.module.css'
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import TrackList from './Components/Tracklist/Tracklist';
import Playlist from './Components/Playlist/Playlist';
import Track from './Components/Track/Track';
import Spotify from './util/Spotify';




function App() {

  useEffect(() => {
    Spotify.getAccessToken(); // triggers login on app load
  }, []);

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
    const trackURIs = playlistTracks.map((track) => track.uri);
  
    if (!playlistName || trackURIs.length === 0) {
      console.warn("Playlist name or track URIs missing.");
      return;
    }
  
    console.log("Saving to Spotify:", trackURIs);
  
    Spotify.savePlaylist(playlistName, trackURIs)
      .then(() => {
        console.log("Playlist successfully saved!");
        setPlaylistName('New Playlist');
        setPlaylistTracks([]);
      })
      .catch((error) => {
        console.error("Failed to save playlist:", error);
      });
  };

  const initialTracks = [
    {
      id: 123,
      name: 'Rodeo',
      artist: 'Travis Scott',
      album: 'Rodeo',
      uri: 'spotify:track:1234567890',
      preview: 'https://p.scdn.co/mp3-preview/2bc7eebf064c44300ad0196937b963f015b6b0a0?cid=774b29d4f13844c495f206cafdad9c86'
    },
    {
      id: 456,
      name: 'Pluto',
      artist: 'Future',
      album: 'DS2',
      uri: 'spotify:track:1234562347890',
      preview: 'https://p.scdn.co/mp3-preview/2bc7eebf064c44300ad0196937b963f015b6b0a0?cid=774b29d4f13844c495f206cafdad9c86'
    },
    {
      id: 789,
      name: 'Verano',
      artist: 'Bad Bunny',
      album: 'Un Verano Sin Ti',
      uri: 'spotify:track:1234567657561890',
      preview: 'https://p.scdn.co/mp3-preview/2bc7eebf064c44300ad0196937b963f015b6b0a0?cid=774b29d4f13844c495f206cafdad9c86'
    }
  ]

  const [searchResults, setSearchResults] = useState(initialTracks);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchSpotify = (term) => {
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    });
  };

  
  

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        Jamming
      </header>
      <main className={styles.main}>
        <SearchBar onSearch={searchSpotify} />
        <div className={styles.content}>
          <div className={styles.searchResults}>
            <SearchResults 
              searchResults={searchResults} 
              onAdd={addTrack} 
            />
          </div>
          <div className={styles.playlist}>
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