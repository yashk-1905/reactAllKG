import styles  from './HealthyListItem.module.css'

const HealthyListItem = ({items}) => {
   const handleButtonClicked = (event,item) => {
         console.log(event);
         console.log(`Bought ${item}`);
     }
    return(
        <>
            {items.map((item)=>(
                <li key={item} className={styles.healthyListItem}>
                    <span>{item}</span> 
                    <button onClick={(event) => handleButtonClicked(event,item)
                    }>buy</button>
                </li>
            ))}
        </>
    )
}

export default HealthyListItem;