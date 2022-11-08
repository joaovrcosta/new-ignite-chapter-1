import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1667226569516-457bc34613dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
                alt=" " 
            />

            <div className={styles.profile}>
                <img src="https://avatars.githubusercontent.com/u/70654718?v=4"/>
                <strong>João Victor</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}