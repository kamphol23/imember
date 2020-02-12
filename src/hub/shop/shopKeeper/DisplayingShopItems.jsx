import React from 'react';
import ShopItems from './ShopItems'
import '../Shop.css'
const DisplayingShopItems = (props) =>{
  let itemList = null;

    if(props.items){
      itemList = props.items.map( item =>(
            <ShopItems key={item.name} item={item}/>
      ));
     }

  return(
    <div className="displaItems">
    {itemList}
    </div>
  )
}
export default DisplayingShopItems
