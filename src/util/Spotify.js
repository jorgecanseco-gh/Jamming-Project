import React from "react";

let accessToken;
const clientId = 'fbc15bcdb8a64809a90b4d0daa3fca1a';
const redirectUri = "http://localhost:3000/";

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        
        if (accessTokenMatch && expiresInMatch) {

            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
            
        }

        const scopes = 'playlist-modify-public';
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scopes}&redirect_uri=${redirectUri}`;
    }
}


export default Spotify;