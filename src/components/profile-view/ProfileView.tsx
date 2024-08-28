import exitPng from "../../assets/exit.png";
import styles from "./profile-view.module.scss";
import { useAuth } from "../../provider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfileView = () => {
  const { setToken, user } = useAuth();
  const navigate = useNavigate();

  const signOut = (): void => {
    setToken(null);
    navigate(0);
  };

  console.log(user);

  return (
    <section className={styles.profileWrapper}>
      <Link to={"profile"} className={styles.profileAboutUser}>
        <h5 className={styles.profileName}>{user.name}</h5>
        <h5 className={styles.profileEmail}>{user.email}</h5>
      </Link>
      <button onClick={signOut} className={styles.profileExitButton}>
        <img
          className={styles.profileExitImage}
          src={exitPng}
          title={"Exit"}
          alt={"Exit"}
        />
      </button>
    </section>
  );
};

export { ProfileView };
