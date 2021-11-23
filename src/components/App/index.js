import React from 'react';
import styles from './style.module.scss';
import Count from 'components/Count';


class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
               <Count />
              
            </div>
        )
    }
}

export default App;