import React, { useState } from 'react';
import { Title } from './components/Title';
import { InitialState } from './data/initialState';

require('./style.scss');

export function App({initialState}: {initialState: InitialState}) {
  const [value, setValue] = useState(() => initialState.serverValue);
  
  function updateValue() {
    setValue('CLIENT VALUE : ' + Date.now());
  }
  
  return (
    <Title text={value} onClick={updateValue}/>
  );
}