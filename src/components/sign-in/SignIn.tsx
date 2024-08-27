import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./sign-in.module.scss";
import { ErrorMessage } from "../";
import { useAuth } from "../../provider";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const { setToken } = useAuth();
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>();

  const onSubmit: SubmitHandler<ISignInForm> = (data: ISignInForm) => {
    setToken("this is a test token");
    navigate("/dashboard", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
      {/*<input*/}
      {/*  {...register("email", { required: true })}*/}
      {/*  className={styles.signInInput}*/}
      {/*/>*/}
      {/*{errors.email && <ErrorMessage message={"This field is required"} />}*/}

      {/*<input*/}
      {/*  {...register("password", { required: true })}*/}
      {/*  className={styles.signInInput}*/}
      {/*/>*/}
      {/*{errors.password && <ErrorMessage message={"This field is required"} />}*/}

      <input type={"submit"} />
    </form>
  );
};

export { SignIn };
