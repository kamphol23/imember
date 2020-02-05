import React, {useState} from 'react'
import Hub from '../../hub/Hub'
import {Link } from "react-router-dom";
const ToHub = (props) =>{
const [heroNameData, setHeroNameData] = useState(null)

console.log(heroNameData);
console.log(props);

    return(
      <div>
      <button ><Link to={{pathname:'/Hub',
      state:{
        heroName:props.heroId
      }}}> play </Link></button>

      </div>
    )
  }
export default ToHub;
