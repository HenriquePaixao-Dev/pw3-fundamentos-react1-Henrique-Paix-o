import { Outlet, Link } from "react-router-dom";
import styles from './NavBar.module.css'
export default function NavBar(){
    return(
        <>
            <ul className={styles.list}>
                <li className={styles.item} >
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/contatos'>Contatos</Link>
                </li>
                <li className={styles.item} >
                    <Link to='/empresa'>Empresa</Link>
                </li>
            </ul>

            <Outlet/>
        </>


    )
}