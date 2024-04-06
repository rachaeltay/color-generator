import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [baseColor, setBaseColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(baseColor).all(10);
      setList(colors);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            Generate!
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default App;
