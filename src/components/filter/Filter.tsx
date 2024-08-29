import styles from "./filter.module.scss";

interface IFilterProps {
  name: string[];
  func: Array<() => void>;
}

const Filter = ({ name, func }: IFilterProps) => {
  return (
    <section className={styles.wrapperFilter}>
      {name.map((elem: string, index: number) => (
        <input
          className={styles.filterInput}
          key={index}
          title={elem}
          type={"text"}
          name={elem}
          onChange={func[index]}
        />
      ))}
    </section>
  );
};

export { Filter };
