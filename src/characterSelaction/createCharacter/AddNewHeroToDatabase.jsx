import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {
    state = {
         bag: ['HealingPotion', 'ManaPotion'],
         Staff:['Basic attack', 'Fire ball', 'pyroblast'] ,
         LongSword:['Basic attack','Heroic strike', 'Mortal strike'],
         BrokenCoockingRod:['Basic attack','Flying meatball','Momspaghetti'],
         DiscoStick:['Basic attack', 'Last order', 'Saturday night fever'],
         waponDmg:[5, 15, 50]
     }

handleAdd = e => {
    let waponAbilitis = null ;
  if(this.props.heroWapon === 'Staff'){
  let waponAbilitis = this.state.LongSword
  }
  else if(this.props.heroWapon === 'LongSword'){
    let waponAbilitis = this.state.LongSword;
  }


      let db = firebase.firestore();
     db.collection('JHKmw250cal').doc(this.props.newHeroname).set({'heroName':this.props.newHeroname,
   'race':this.props.heroRace, 'inventory': this.state.bag, 'lvel': 1, 'health': 75, 'score' : 0,'wapon': this.props.heroWapon,
    'waponAbilitis' : waponAbilitis, 'waponDmg':this.state.waponDmg, 'expToNextLvl': 200 })
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
