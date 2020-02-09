import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {
    state = {
         bag: ['HealingPotion', 'ManaPotion'],
         Staff:['Basic attack', 'Fire ball', 'pyroblast'] ,
         LongSword:['Basic attack','Heroic strike', 'Mortal strike'],
         BrokenCoockingRod:['Basic attack','Flying meatball','Momspaghetti'],
         DiscoStick:['Basic attack', 'Last order', 'Saturday night fever']
     }

handleAdd = e => {
    let waponAbilitis =  this.state.Staff;
  if(this.props.heroWapon === 'Staff'){
      waponAbilitis = this.state.Staff;
  }
  if(this.props.heroWapon === 'LongSword'){
      waponAbilitis = this.state.LongSword;
  }
  if(this.props.heroWapon === 'BrokenCoockingRod'){
      waponAbilitis = this.state.BrokenCoockingRod;
  }
  if(this.props.heroWapon === 'DiscoStick'){
      waponAbilitis = this.state.DiscoStick;
  }
      let db = firebase.firestore();
     db.collection('JHKmw250cal').doc(this.props.newHeroname).set({'heroName':this.props.newHeroname,
   'race':this.props.heroRace, 'inventory': this.state.bag, 'lvel': 1, 'health': 75, 'score' : 0,'wapon': this.props.heroWapon, 'waponAbilitis' : waponAbilitis, 'expToNextLvl': 200 })
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
