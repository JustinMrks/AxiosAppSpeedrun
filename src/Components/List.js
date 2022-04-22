import React from 'react';

const List = (props) => {
  return (
    <div>
      {props.errors ? (
        <p>{props.errors}</p>
      ) : (
        props.missions.map((item, key) => <p>{item.mission_name}</p>)
      )}
    </div>
  );
};

export default List;
