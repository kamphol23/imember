import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class  AddNewHeroToDatabase extends Component {

handleAdd = e => {
  console.log('done');

		let obj = { name:this.props.newHeroname,
      race: this.props.heroRace,
      wapon: this.props.heroWapon
     };


		const collectionRef = firebase.firestore().collection('JHKmw250cal');
		collectionRef.add(obj)
		.then(() => {

		})
		.catch(error => {

		})
    // this.setState({defaultState});
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
