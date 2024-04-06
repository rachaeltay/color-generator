import React, { useState, useEffect } from 'react';

const SingleColor = ({ weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color-item ${index > 10 && 'color-light'} ${
        weight === 0 && 'is-base'
      }`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <div className='percent-value'>{weight}%</div>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
