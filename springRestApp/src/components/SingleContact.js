import React from 'react';

const SingleContact = ({contactItem}) => (
<div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{contactItem.firstName} {contactItem.lastName}</span>
          
        </div>
        <div className="card-action">
          <p>{contactItem.email}</p>
        </div>
      </div>
    </div>
  </div>
)

export default SingleContact;
