import React from 'react';

const MemoComponent = props => {
  console.log('MemoComponent');
  return <p>Length is {props.length}</p>;
};

export default React.memo(MemoComponent);
