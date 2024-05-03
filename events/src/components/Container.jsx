// this is the prop that is going to have all the things that will come in it as 
// it is gonna take the children of the props which means blindly taking everything that comes within 
// const Container = () => {
//     return(
//         <div>container</div>
//     )
// }
/**
 * agar mai bina props.children ke pass karunga to vo sab kuch uske <Container></Container>
 * ke bich ka  hata kar container hi likh dega 
 */

import styles from './Container.module.css';
const Container = (props) => {
    return(
        <div className={styles.container}>{props.children}</div>
    )
}

/**
 * props.children de dene par usne bich me jo bhi tha container ke unn sabko le liya
 */
export default Container;