import React from 'react';
// import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

const BioCard = ({ info, openModal } ) => {
  const {
    firstName,
    lastName,
    img_id, 
    currentLocation, 
    homeTown, 
    previousJob, 
    hobbies,
    details
  } = info;

  const openDetailsModal = (e, type, id) => {
    const top = e.pageY;
    const left = e.pageX;
    openModal(type, { top, left }, id)
  }

  return (

    <article className="card bioCard">
      <div className="charHeadContainer">
        <h3 className="charName">{firstName} {lastName}</h3>
      </div>
      <ul className="bioDetailsList">
        <li className="charDetail">Current Location: {currentLocation}</li>
        <li className="charDetail">Home Town: {homeTown}</li>
        <li className="charDetail">Previous Job: {previousJob}</li>
        <li className="charDetail">Hobbies: {hobbies}</li>
      </ul>
    </article>
  );
};

export default BioCard;