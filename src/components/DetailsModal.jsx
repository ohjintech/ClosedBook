import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
//import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DetailsModal = ( { type, position, id, closeModal }) => {
  // what are these HOOKS wtf
  const [ details, setDetails ] = useState({})
  const [ isFetching, setIsFetching ] = useState(true)


  useEffect(()=> {
    // if id is found, fetch the api data. otherwise, return a default poopookaka value
    if (id) {
      setIsFetching(true) //idk what this is doing
      fetch(`/api/${type}?id=${id}`) // fetching from this place.... change it at a later time
      .then(res => res.json())
      .then(data => {
        setDetails(data);
        setIsFetching(false); // what does setIsFetching return? a boolean? part of the react hooks above
      })
      .catch( err => console.log('DetailsModal: fetch /api: Error: ', err))
    } else {
      setDetails( {firstName: 'poopoo', lastName: 'kaka'})
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

  let info = (
    <ul className="modalList">
      <li className=""></li>
      <li className=""></li>
      <li className=""></li>
      <li className=""></li>
      <li className=""></li>
      <li className=""></li>
      <li className=""></li>
    </ul>
  )

  return (
    <div className="modal" style={position}>
      <div className="modalHeading">
        <h4 className="modalName">{details}</h4>
      </div>
    </div>
  );
};
export default DetailsModal