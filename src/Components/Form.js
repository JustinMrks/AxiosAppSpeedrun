import React from 'react';

const Form = (props) => {
  return (
    <div>
      {props.fetching ? (
        <p>fetching</p>
      ) : (
        <button onClick={props.getMissions}>Get Updated Missions List</button>
      )}
    </div>
  );
};

export default Form;
