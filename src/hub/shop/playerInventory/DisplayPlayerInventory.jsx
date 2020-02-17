import React from 'react'
import SellItems from './SellItems'
const DisplayPlayerInventory = (props) =>{
  const items = props.items

    return(
      <div>
      <p>{items.name} x {items.amout}</p>
      <SellItems item={items} heroName={props.heroName} gold={items.gold}
      sellPrice={items.sellPrice}/>
      </div>
    )
}
export default DisplayPlayerInventory
