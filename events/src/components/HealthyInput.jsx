import styles from './HealthyInput.module.css';
const HealthyInput = ({handleOnChange}) => {
    return(
        // <input className={styles.healthyInput} placeholder="enter the vegetable name" onChange={(event)=> console.log(event)}></input>
        /**
         * within the event generated their is a target within wich their is the value that stores the value exactly as being input in the input box
         * so i can print only that value now instead of the complete event
         */
        // <input className={styles.healthyInput} placeholder="enter the vegetable name" onChange={(event)=> console.log(event.target.value)}></input>

        // ab dekho bhai yahan par ye jo hai vo hai child component to isme itni takat honi nahi chahiye ki vo kuch behaviour decide kare better hai ki sab logic jo hai vo parent ke paas hi ho 
        //to hum ye onChange ke andar ek function handleOnChange call karenge jo ki hum define karenge parent me yani app me
        <input className={styles.healthyInput} placeholder="enter the vegetable name" onChange={handleOnChange}></input>
    )
} 

export default HealthyInput;