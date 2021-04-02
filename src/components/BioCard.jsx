import React from 'react';

// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

//const getImgSrc = require('../../assets/profilePics')

const BioCard = ({ info, openModal } ) => {
  const {
    firstName,
    lastName,
    img_id, 
    currentLocation, 
    homeTown, 
    previousJob, 
    hobbies,
    details,
    githubURL,
    _id,
    img
  } = info;

  const openDetailsModal = (e, type, id) => {
    const top = e.pageY;
    const left = e.pageX;
    console.log('Opening Details Modal: ', _id)
    console.log('on: ', firstName, lastName)
    openModal(type, { top, left }, id)
  }

/*
  <div class="card" style="--background: #3c3b3d; --text: white">
          <div class="multi-button">
            <button class="fas fa-heart"></button>
          </div>
          <div class="container"></div>
        </div>
*/
  return (

    <article className="card bioCard">
      <div class="multi-button">
        <i className="list icon"></i>
        <i className="linkedin icon"></i>
        <i onClick={e => open("http://github.com")} className="github icon"></i>
      
      </div>
          
      <div className="bioHeadContainer">
        <h3 className="memberName">{firstName} {lastName}</h3>
      </div>

      {img &&
        <figure className="profilePhoto">
          <img src={`../../assets/profilePics/${img}`}/>
        </figure>
      }
      
      <div><span><i className="angle down icon" onClick={e => openDetailsModal(e, 'bioDetails', _id)}></i></span></div>
      
    
    </article>
// <div><span><i className="angle down icon" onClick={e => openDetailsModal(e, 'bioDetails', _id)}></i></span></div>


        
  );
};

export default BioCard;


/**
 * <ul className="bioDetailsList container">
        <li className="bioDetail"><strong>Current Location:</strong>{currentLocation}</li>
        <li className="bioDetail"><strong>Home Town: </strong>{homeTown}</li>
        <li className="bioDetail"><strong>Previous Job: </strong>{previousJob}</li>
        <li className="bioDetail"><strong>Hobbies: </strong>{hobbies}</li>
      </ul>
 */

