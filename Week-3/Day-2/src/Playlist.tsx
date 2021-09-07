import React, { useEffect } from "react";
import logo from "./logo.svg";
import  "./App.css";
import SongAttributes from "./SongAttributes.js";
import MySongAttributes from "./SongAttributes.js";
import FindMySong from "./FindMySong";
import {useState} from "react";
import SongInputComponent from './SongInputComponent'

function Playlist() {
  
    const [songInput, setSongInput] = useState("priya")
    const playlistVar: Array<any> = MySongAttributes();

    console.log(playlistVar);

    function handleInputChange(event:any) 
    {
        const value:string = event.target.value;
        
       

        for(let i=0;i<playlistVar.length;i++)
        {
          if(value == playlistVar[i].artist)
          {
              console.log("true");
              return true;
          
          }
        }

        const searchString = value
                console.log(`input element value change ${value}`);
        setSongInput(value);


        
      
    }

    const playlistTable = playlistVar.map((song)=>{
      return (<tr>
      <td>{song.song}</td>
      <td>{song.artist}</td>
      <td>{song.duration}</td>
    </tr>)
    })
   
   
   
   
    useEffect(()=>{
      document.title = `${songInput}`;
    });

  
  
  return (
    <div>
      <h1>Hello User!! These are the songs from your Favorite Playlists</h1>

      <h2>{songInput}</h2>
      <h3 id = "h3element"> hello h3</h3>
     
      <ul>
        

        
      </ul>
      <label> Find the Song</label>
      <input type="text" onChange={handleInputChange} />

  <table id = "songsTable">
  <tr>
    <th>Song</th>
    <th>Artist</th>
    <th>Duration</th>
  </tr>

   {playlistTable}

</table>

    </div>
  );
}

export default Playlist;
