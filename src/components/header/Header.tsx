import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { ProfileView } from "../";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <nav>
        <Link to={"dashboard"} title={"Dashboard"}>
          Dashboard
        </Link>
        <Link to={"customer"} title={"Customers"}>
          Customers
        </Link>
        <Link to={"item"} title={"Items"}>
          Items
        </Link>
      </nav>
      <ProfileView />
    </header>
  );
};

export { Header };
