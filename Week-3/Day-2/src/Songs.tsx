import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './SongAttributes.js';



function Songs()
{
    const [count,SetCount] = useState(0);


    return (
    <form>
  <label>
    SongName:
      <input type="text" name="name" />
  </label>
   <input type="submit" value="AddSong"  />
  <button onClick={()=>{SetCount(count+1)}}> ClickMe </button>
  <p>{SetCount}</p>

</form> );

}

export default Songs