import { Link } from "react-router-dom";
import styles from "./header-navigation.module.scss";

const HeaderNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link
        to={"dashboard"}
        title={"Dashboard"}
        className={styles.navigationLink}
      >
        Dashboard
      </Link>
      <Link
        to={"customer"}
        title={"Customers"}
        className={styles.navigationLink}
      >
        Customers
      </Link>
      <Link to={"item"} title={"Items"} className={styles.navigationLink}>
        Items
      </Link>
    </nav>
  );
};

export { HeaderNavigation };
