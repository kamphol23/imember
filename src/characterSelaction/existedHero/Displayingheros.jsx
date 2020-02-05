import React from 'react'
import DeleteHero from './DeleteHero';
import './ExistedHeros.css';
const Displayingheros = (props) =>{
let list = null;

  if(props.heroNameList){
    list = props.heroNameList.map( heroName =>(
          <DeleteHero key={heroName.id} heroName={heroName} />
    ));
   }
  return(
    <div>
    <div className="heroName">{list}</div>
    </div>
  )
}
export default Displayingheros
