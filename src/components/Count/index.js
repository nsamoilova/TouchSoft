import React, { useState, useEffect } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import styles from './style.module.scss';
import { values } from 'lodash';

const Count = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('default')

  const [theme, setTheme] = useState()
 


  useEffect(() => {
     if(count % 2 == 0){
      console.log('чётное')
      
     }else{
      console.log('не чётное')
     }
   }, [count,title])




    return (
        <div className={styles.form}>
        <div className={styles.input}>
      <div className={styles.default}>{count}</div>
      <div className={styles.default} >{title}</div>
        </div>
      
      <div className={styles.button}>
      <Button onClick={() => setCount(count - 1)} disabled={count === 0}>-</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(count + 1)} disabled={count === 0} >+</Button >
      </div>
        
    </div>
    )

}

export default Count;