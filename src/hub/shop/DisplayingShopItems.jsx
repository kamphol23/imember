import React from 'react';
import ShopItems from './ShopItems'
const DisplayingShopItems = (props) =>{
  let itemList = null;

    if(props.items){
      itemList = props.items.map( item =>(
            <ShopItems key={item.name} item={item}/>
      ));
     }

  return(
    <div>
    {itemList}
    </div>
  )
}
export default DisplayingShopItems
