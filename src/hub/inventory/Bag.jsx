import React from 'react'
import DisplayItems from './DisplayItems'
const Bag = (props) =>{
let list = null;


    if(props.bagItems){
      list = props.bagItems.map( bagItems =>(
            <DisplayItems key={bagItems.name} bagItems={bagItems} />
      ))
    }
  return(
    <div>
    <div>{list}</div>
    </div>
  )
}
export default Bag
