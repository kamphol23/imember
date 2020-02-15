import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {
    state = {
         bag: [
                {name: 'Healing Potion', amout: 1 , cost: 10, sellPrice: 5 },
                {name:'Mana Potion', amout: 1 , cost: 10, sellPrice: 5}],
        Staff:[
                {abilityOne:'Basic attack', dmg: 5, manaCost: +5 },
                {abilityTwo:'Fire ball', dmg: 15, manaCost: 20},
                {abilityThree:'pyroblast', dmg: 50, manaCost:100}
            ],
         LongSword:[
                {abilityOne:'Basic attack', dmg: 5, manaCost: +5 },
                {abilityTwo:'Heroic strike', dmg: 15, manaCost: 20 },
                {abilityThree: 'Mortal strike', dmg: 50, manaCost:100}
            ],
         BrokenCoockingRod:[
                {abilityOne:'Basic attack', dmg: 5, manaCost: +5 },
                {abilityTwo: 'Flying meatball', dmg: 15, manaCost: 20},
                {abilityThree:'Momspaghetti', dmg: 50, manaCost:100}],
         DiscoStick:[
                {abilityOne:'Basic attack', dmg: 5, manaCost: +5 }
                ,{abilityTwo:'Last order', dmg: 15, manaCost: 20},
                {abilityThree: 'Saturday night fever', dmg: 50, manaCost:100}
            ],
     }

handleAdd = e => {
    let waponAbilitis = null ;
  if(this.props.heroWapon === 'Staff'){
   waponAbilitis = this.state.LongSword
  }
   if(this.props.heroWapon === 'Long sword'){
      waponAbilitis = this.state.LongSword;
  }
  if(this.props.heroWapon === 'Broken coocking rod'){
   waponAbilitis = this.state.BrokenCoockingRod
  }
   if(this.props.heroWapon === 'Disco stick'){
      waponAbilitis = this.state.DiscoStick;
  }

      let db = firebase.firestore();
     db.collection('JHKmw250cal').doc(this.props.newHeroname).set({'heroName':this.props.newHeroname,
   'race':this.props.heroRace, 'inventory': this.state.bag, 'lvel': 1, 'health': 75, 'score' : 0,'wapon': this.props.heroWapon,
    'waponAbilitis' : waponAbilitis,'expToNextLvl': 200, 'gold': 0 })
		.then(() => {

		})
		.catch(error => {
      console.log('kunde inte lägga till en ny karäktar');
		})

	}


eventHandler = () => {
  this.props.isCreatecharacter();
   this.handleAdd();
}
  render() {
console.log(this.props.heroWapon);

		return (
			<div>
      <button onClick={this.eventHandler}> add hero </button>

			</div>
		)
	}


}

export default AddNewHeroToDatabase;
