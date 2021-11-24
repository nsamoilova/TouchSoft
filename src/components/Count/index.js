import React, { useState, useEffect } from 'react';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import styles from './style.module.scss';


const Count = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const onCount = count % 2 == 0;
  const [theme, setTheme] = useState()
 


  useEffect(() => {
     setTitle(onCount ? 'чётное' : 'не чётное')
   }, [count])




    return (
        <div className={styles.form}>
        <div className={styles.input}>
           <div className={styles.default} >{count}</div>
           <div className={styles.default}  style={{background: onCount ? 'green' : 'red'}}>{title}</div>
        </div>
      
      <div className={styles.button}>
      <Button onClick={() => setCount(count - 1)} disabled={count === 0}>-</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(count + 1)} >+</Button >
      </div>
        
    </div>
    )

}

export default Count;