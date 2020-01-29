import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {

handleAdd = e => {
  console.log('done');
      let db = firebase.firestore();

     db.collection('JHKmw250cal').doc(this.props.newHeroname).set({'heroName':this.props.newHeroname,
   'race':this.props.heroRace, 'wapon': this.props.heroWapon })
		.then(() => {

		})
		.catch(error => {
      console.log('kunde inte lägga till en ny karäktar');
		})

	}

  backToSelection = () => {
    this.props.history.push('/CharacterSelaction')
    console.log('jag sticker hem');
  }

eventHandler = () => {
  this.handleAdd();
  this.backToSelection();
  this.props.isCreatecharacter();
}
  render() {
console.log(this.props);
		return (
			<div>
<button onClick={this.eventHandler}> add hero </button>

			</div>
		)
	}


}

export default AddNewHeroToDatabase;
