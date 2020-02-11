import React, {Component} from 'react'
import DisplayingShopItems from './DisplayingShopItems'
class Shop extends Component{
  state ={
    shopItems:[
        {name: 'Magno', cost: 50, sellPrice: 5, onUse: 50,  itemCatergory: 'items', onUseDisc:'Instantly restores 50 mana' },
        {name: 'Ring of protection', cost: 20, sellPrice: 8, onUse: 10, itemCatergory: 'items', onUseDisc:'Gain 10 armor for 3 rounds'},
        {name: 'Healing Potion', cost: 10, sellPrice: 5, onUse: 10, itemCatergory: 'items', onUseDisc:'Instantly restores 10 health'},
        {name: 'Mana Potion', cost: 10, sellPrice: 5, onUse: 10, itemCatergory: 'items', onUseDisc:'Instantly restores 10 mana'},
        {name: 'SharpningStone', cost: 5, sellPrice: 1, onUse: 5, itemCatergory: 'items', onUseDisc:'Make your next basix attack delas 5 more dmg'},
        {name: 'Lucky cone', cost: 100, sellPrice: 50, onUse: 1, itemCatergory: 'items', onUseDisc:'On use gain one more pionts in luck'},
        {name: 'Stick of truth', abilityOne: 'Basic attack', abilityTwo :'Kill Kenny', abilityThree :'Fractured but whole', itemCatergory: 'wapon'},
        {name: 'Sulfuras', abilityOne: 'Basic attack', abilityTwo :'Lava lash', abilityThree :'Sundering', itemCatergory: 'wapon', cost: 100, sellPrice: 50,},
        {name: 'Orge club', abilityOne: 'Basic attack', abilityTwo :'Ogre Smash', abilityThree :'Multi Cast', itemCatergory: 'wapon', cost: 100, sellPrice: 50,},
        {name: 'Rhok delar', abilityOne: 'Basic attack', abilityTwo :'Viper sting', abilityThree :'Aim shot', itemCatergory: 'wapon', cost: 100, sellPrice: 50,},
            ]
      }

  render() {


     return(
    <div>
    <h1> shop </h1>
    <DisplayingShopItems items={this.state.shopItems}/>
    </div>
  )}
}
export default Shop
