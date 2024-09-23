import React,{useState} from 'react';

import AddedFeature from './AddedFeature';
import Clear from './Clear';

const AddedFeatures = props => {

  return (
    <div className="content">
      {props.car.features.length && <Clear  />}
      <h6>Added features:</h6>
      {props.car.features.length ? (
        
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
