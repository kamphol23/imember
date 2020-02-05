import React from 'react'
import DeleteAndUseItems from './DeleteAndUseItems'
const Bag = (props) =>{
let list = null;


    if(props.bagItems){
      list = props.bagItems.map( bagItems =>(
            <DeleteAndUseItems key={bagItems} bagItems={bagItems} />
      ))
    }
  return(
    <div>
    <div>{list}</div>
    </div>
  )
}
export default Bag
