
import React, { useState } from 'react';
import './Calc.css';
import { motion } from 'framer-motion';

export default function Calc() {
  const [exp, setExp] = useState('');

  const clear = () => {
    setExp('');
  };

  const result = () => {
    try {
      let v = exp;
      setExp(eval(v));
    } catch (error) {
      setExp('expression non valide');
    }
  };

  const tapecar = (e) => {
    let oldval = exp;
    let newval = oldval + e.target.value;
    setExp(newval);
  };

  const absoluteValue = () => {
    try {
      let v = exp;
      setExp(Math.abs(eval(v)));
    } catch (error) {
      setExp('expression non valide');
    }
  };

  const racice = () => {
    try {
      let v = exp;
      setExp(Math.sqrt(eval(v)));
    } catch (error) {
      setExp('expression invalide');
    }
  };

  const percentage = () => {
    try {
      let v = exp;
      setExp((eval(v) / 100).toString());
    } catch (error) {
      setExp('expression invalide');
    }
  };

  return (
    <motion.div
      className='c'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <form action=''>
          <input value={exp} className='a' type='text' />
        </form>
        <div className='button'>
          <input onClick={clear} type='button' value='C' id='clear' />
          <input onClick={(e) => tapecar(e)} type='button' value='.' />
          <input onClick={(e) => tapecar(e)} type='button' value='+' id='operator-button' />
          <input onClick={(e) => tapecar(e)} type='button' value='1' />
          <input onClick={(e) => tapecar(e)} type='button' value='2' />
          <input onClick={(e) => tapecar(e)} type='button' value='3' />
          <input onClick={(e) => tapecar(e)} type='button' value='-' />
          <input onClick={(e) => tapecar(e)} type='button' value='4' />
          <input onClick={(e) => tapecar(e)} type='button' value='5' />
          <input onClick={(e) => tapecar(e)} type='button' value='6' />
          <input onClick={(e) => tapecar(e)} type='button' value='/' />
          <input onClick={(e) => tapecar(e)} type='button' value='7' />
          <input onClick={(e) => tapecar(e)} type='button' value='8' />
          <input onClick={(e) => tapecar(e)} type='button' value='9' />
          <input onClick={(e) => tapecar(e)} type='button' value='*' />
          <input onClick={(e) => tapecar(e)} type='button' value='0' />
          <input onClick={percentage} type='button' value='%' />
          <input onClick={absoluteValue} type='button' value='|x|' />
          <input onClick={racice} type='button' value='√x' />
          <input onClick={result} type='button' value='=' id='result' />
        </div>
      </div>
    </motion.div>
  );
}
