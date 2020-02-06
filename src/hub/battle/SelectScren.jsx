import  React from  'react'
import {Link } from "react-router-dom";
const SelectScren = (props) =>{
  const heroName = props.location.state.heroName;
  console.log(heroName);
  return(
    <div>
    <button> Arena pvp </button>
    <button ><Link to={{pathname:'/SelectArea',state:{heroName:heroName}}}> Adventure time </Link></button>
    <button ><Link to={{pathname:'/Hub',state:{heroName:heroName}}}> Back </Link></button>

    </div>
  )
}
export default SelectScren;
