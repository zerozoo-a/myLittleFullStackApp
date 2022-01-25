import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FirstJSON {
  // [key: string]: string;
  helloWorld: string;
}

function App() {
  const [data, setData] = useState<FirstJSON>();
  useEffect((): void => {
    async function helloExpress(): Promise<void> {
      const response = await fetch('http://localhost:8000/');
      const data = await response.json();
      console.log(data);
      setData(data.helloWorld);
    }
    helloExpress();
  }, []);

  if (data) {
    <div>LOADING...</div>;
  }
  return (
    <div className='App'>
      hi~
      <div>{data}</div>
      <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}>
          <Link to='/link1'>Link 1</Link>
          <Link to='/link2'>Link 2</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
