import {useState} from 'react';
import { useGetGoodsQuery } from './redux';

function App() {
  const [count, setCount]=useState('');
  const { data = [], error, isLoading } = useGetGoodsQuery();

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
