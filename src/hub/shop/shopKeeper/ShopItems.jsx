import React from 'react';
const ShopItems = (props) =>{
  const item = props.item;
  return(
    <div>
      <h4>{item.name}</h4>
      <span> Cost : {item.cost}</span>
      <br/>
      <p>{item.onUseDisc}</p>
      <button> Buy </button>
    </div>
  )
}
export default ShopItems
