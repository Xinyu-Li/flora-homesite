import { Link } from 'react-router';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo} aria-label="Navigate to FLoRA home">
      <img src={`${import.meta.env.BASE_URL}images/logo1.png`} alt="FLoRA logo" width={96} height={64} />
      <span>FLoRA ENGINE</span>
    </Link>
  );
};

export default Logo;
