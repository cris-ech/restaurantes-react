import * as React from 'react';


const ReviewCard = ({name, rate, valoration}) => (
  <div>
  <p>{name}</p>
  <p>{rate}</p>
  <p>{valoration}</p>
  </div>
);

export default ReviewCard;