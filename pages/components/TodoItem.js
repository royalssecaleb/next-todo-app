import React, {useState} from 'react';
import styles from '../../styles/Home.module.css';

const TodoItem  = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        console.log('handleCheck function clicked');
    }
    const handleDelete = () => {
        console.log('handleDelete function clicked');
    }
    return (
        <div>
            <span className={styles.eachtodo}>
                <p className={styles.text}>Eat Breakfast</p>
                <div>
                    <input
                        type='checkbox'
                        className={styles.toggle}
                        onChange={handleCheck}
                        onClick={()=>setIsChecked(!isChecked)} 
                    />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </span>
        </div>
    )
};

export default TodoItem;