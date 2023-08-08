import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav: React.FC = () => {
  return (
    <nav className = {navStyles.nav}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
        <Link href="/addArticle">
            Add Article
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;