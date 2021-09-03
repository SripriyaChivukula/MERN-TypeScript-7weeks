import React from "react";
import logo from "./logo.svg";
import  "./App.css";
import SongAttributes from "./SongAttributes.js";
import MySongAttributes from "./SongAttributes.js";
import FindMySong from "./FindMySong";
import {useState} from "react";
import SongInputComponent from './SongInputComponent'

function Playlist() {
  
    const [songInput, setSongInput] = useState()

    function handleInputChange(event:any) {
        const value = event.target.value;
        console.log('input element value change ', value);
        setSongInput(value);
    }

  const myvar: Array<any> = MySongAttributes();
  return (
    <div>
      <h1>Hello User!! These are the songs from your Favorite Playlists</h1>

      <h2>{songInput}</h2>

      <ul>
        <p>
          Senorita {myvar[0].title} ,{myvar[0].duration}
        </p>

        <ol>
          Cheap Thrills {myvar[1].title} ,{myvar[1].duration}{" "}
        </ol>
      </ul>
      <label> Find the Song</label>
      <input type="text" onChange={handleInputChange} />

    </div>
  );
}

export default Playlist;
