// File: Tab.tsx
"use client"; // Needed if you're using Next.js App Router

import React, { useState, useEffect, useMemo } from 'react';

function Tab() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const [count, setCount] = useState(0);

  // useEffect: Runs once after initial render
  useEffect(() => {
    console.log("Component mounted or count changed:", count);
  }, [count]);

  // useMemo: Expensive calculation only recalculates when 'numbers' changes
  const evenNumbers = useMemo(() => {
    console.log("Calculating even numbers...");
    return numbers.filter(num => num % 2 === 0);
  }, [numbers]);

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Numbers: {numbers.join(', ')}</h2>
      <h3>Even Numbers (useMemo): {evenNumbers.join(', ')}</h3>
      <button onClick={addNumber}>Add Number</button>
      <br /><br />
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default Tab;
