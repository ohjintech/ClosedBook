import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DetailsModal = ( { type, position, id, closeModal }) => {
  // what are these HOOKS wtf
  const [ details, setDetails ] = useState({});
  const [ isFetching, setIsFetching ] = useState(true);

  console.log('details in useEffect: ', details)

  useEffect(()=> {
    console.log('in UseEffect: ', id)
    // if id is found, fetch the api data. otherwise, return a default poopookaka value
    if (id) {
      setIsFetching(true) //idk what this is doing
      fetch(`/bioDetail/id=${id}`) // fetching from this place.... change it at a later time
      .then(res => res.json())
      .then(data => {
        console.log('Fetched Data: ', data)
        setDetails(data);
        setIsFetching(false); // what does setIsFetching return? a boolean? part of the react hooks above
      })
      .catch( err => console.log('DetailsModal: fetch /api: Error: ', err))
    } else {
      console.log('detailsObj: ', details)
      setDetails(['Unavailable'])
      setIsFetching(false)
    }
  }, [id, type]); // type is probably not needed

  // provide placeholder while async fetch operation is happening
  if (isFetching) {
    return (
      <div className="modal" style={position}> 
        <p> Fetching cohortmate details... </p>
      </div>
    );
  }

  // type = "bioDetails"
  const {currentLocation, homeTown, previousJob, hobbies} = details;
  let info = (
    <ul className="modalList">
      <li className="bioDetail"><p>Current Location:</p>{currentLocation}</li>
      <li className="bioDetail"><p>Home Town:</p>{homeTown}</li>
      <li className="bioDetail"><p>Previous Job:</p>{previousJob}</li>
      <li className="bioDetail"><p>Hobbies:</p>{hobbies}</li>
    </ul>
  )

  return (
    <div className="modal" style={position}>
      <div className="modalHeading">
        <h4 className="modalName">{details}</h4>
        <i className="angle right icon" onClick={closeModal}></i>
      </div>
      {info}
    </div>
  );
};
export default DetailsModal