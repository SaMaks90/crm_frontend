import styles from "./header.module.scss";
import { HeaderNavigation, ProfileView } from "../";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <HeaderNavigation />
      <ProfileView />
    </header>
  );
};

export { Header };
