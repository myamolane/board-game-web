import { Link } from 'umi';
import styles from './index.less';
// import '../styles/tailwind.css';

export default function IndexPage() {
  return (
    <div className="bg-blue-500">
      <h1 className={styles.title}>Page index</h1>
      <Link to="/login">login</Link>
      <Link to="/home">home</Link>
    </div>
  );
}
