import React from 'react'
import DeleteHero from './DeleteHero';
const Displayingheros = (props) =>{
let list = null;
let toHub = (<button onClick={props.toHub}> play </button>);

  if(props.heroNameList){
    list = props.heroNameList.map( heroName =>(
          <DeleteHero key={heroName.id} heroName={heroName} />
    ));
   }
  return(
    <div>
    <div>{list}</div>
    </div>
  )
}
export default Displayingheros
