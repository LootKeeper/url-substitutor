import React from 'react';

import {btn} from './styles.module.css';

const NewNavItem = () => {
  return (<button className={btn} onClick={() => console.log({TEST: true})}>+</button>)
}

export default NewNavItem;