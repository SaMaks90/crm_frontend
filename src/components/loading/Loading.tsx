import { HashLoader } from "react-spinners";

interface ILoadingProps {
  size?: number;
  style?: {};
}

const Loading = ({ size, style }: ILoadingProps) => {
  if (style) {
    return (
      <HashLoader
        size={size ? size : 50}
        aria-label="Loading Spinner"
        data-testid="loader"
        style={style}
      />
    );
  }

  return (
    <HashLoader
      size={size ? size : 50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export { Loading };
