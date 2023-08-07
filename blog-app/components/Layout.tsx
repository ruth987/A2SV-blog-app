import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

const Layout: React.FC = ({ children }) => {
  return (
    <>
    <Nav />
    
    <div className = {styles.container}>
    <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;