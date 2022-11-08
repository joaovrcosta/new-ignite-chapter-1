import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="João Victor"
          content="Esse post é mto fera"
        />
         <Post
          author="João Victor"
          content="Esse post é mto fera"
        />
      </main>
    </div>
    </>
  )
}

 