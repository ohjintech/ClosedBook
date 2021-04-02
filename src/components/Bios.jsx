import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BioCard from './BioCard';
import DetailsModal from './DetailsModal';

class Bios extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchedDetails: false,
      bioDetails: [],
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0},
        id: null
      }
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  // upon successful component mount, make a GET request for the bio details
  componentDidMount() {
    fetch('/bioDetail/')
    .then(res => res.json())
    .then( bioDetails => {
      // input integrity check
      console.log('Bio Details: ', bioDetails)
      if (!Array.isArray(bioDetails)) bioDetails = [];
      return this.setState({
        bioDetails,
        fetchedDetails: true
      });
    })
    .catch(err => console.log('Bios.componentDidMount: get bioDetails: Error: ', err))
  }

  // opens the selected modal
  openModal(type, position, id) {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: true,
        type,
        position,
        id
      }
    });
  }

  // closes the modal
  closeModal() {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: false
      }
    })
  }

  render() {
    

    // loading screen
    if (!this.state.fetchedDetails) return (
      <div>
        <h1> Patience is a virtue </h1><p>but holy shit this is taking long...</p>
      </div>
    );

    const {bioDetails} = this.state;

    if (!bioDetails || !bioDetails.length) return (
      <div>RIP something went wrong</div>
    )

    
    // convert the bioDetails array into the bioElemes components
    const bioElems = bioDetails.map( (info, i) => {
      return (
        <BioCard
          key={`bio-${i}`}
          info={info}
          openModal={this.openModal}
        />
      );
    });

    console.log('BioDetails: ', bioDetails);
    console.log('state modal state: ', this.state.modalState.open)
    console.log('modal state: ', this.modalState)
    return (
      <section className="mainSection">
        <header className="pageHeader">

          <div className="banner"><img src={`../../assets/cover.png`}/></div>
                    
        </header>
        
        <div id="login"><a href="/login" className="ui button">Login</a></div>

        <div className="bioContainer">
          {bioElems}
        </div>
        {this.state.modalState.open && 
        <DetailsModal
          type={this.state.modalState.type}
          position={this.state.modalState.position}
          id={this.state.modalState.id}
          closeModal={this.closeModal}
  
        />
      }
        
      </section>
    )
  }
}

export default Bios;