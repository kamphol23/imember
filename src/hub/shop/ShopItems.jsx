import React from 'react';
const ShopItems = (props) =>{
  const item = props.item;
  return(
    <div>
      <h3>{item.name}</h3>
      <span> Cost : {item.cost}</span>
      <br/>
      <p>{item.onUseDisc}</p>
      <button> Buy </button>
    </div>
  )
}
export default ShopItems
