import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {

handleAdd = e => {
  console.log('done');

		let obj = { heroName:this.props.newHeroname,
      race: this.props.heroRace,
      wapon: this.props.heroWapon
     };
      let db = firebase.firestore();

     db.collection('JHKmw250cal').doc(this.props.newHeroname).set({'heroName':this.props.newHeroname,
   'race':this.props.heroRace, 'wapon': this.props.heroWapon })
		.then(() => {

		})
		.catch(error => {
      console.log('kunde inte lägga till en ny karäktar');
		})

	}


  render() {

		return (
			<div>
<button onClick={this.handleAdd}> add hero </button>

			</div>
		)
	}


}

export default AddNewHeroToDatabase;
