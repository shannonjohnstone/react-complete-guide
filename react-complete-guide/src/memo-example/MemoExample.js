import React, { useState } from 'react';
import MemoComponent from './MemoComponent';

const MyList = React.memo(function MyList({ items }) {
  console.log('MyList');
  return items.map((item, key) => <div key={key}>{item}</div>);
});

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['fox', 'ziggy']);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count + 0)}>Same again</button>
      <MemoComponent length={count} />
      <MyList items={items} />
    </>
  );
};

export default MemoExample;
