import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./sign-in.module.scss";
import { ErrorMessage } from "../";
import { useAuth } from "../../provider";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getUser, signIn } from "../../api";
import { useState } from "react";
import clsx from "clsx";

interface ISignInForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const { setToken, setUser } = useAuth();
  const [tokenError, setTokenError] = useState("");
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInForm>();

  const onSubmit: SubmitHandler<ISignInForm> = async (
    data: ISignInForm,
  ): Promise<void> => {
    try {
      let result: { token: string; message: string } = await signIn(data);

      if (result.token) {
        setToken(result.token);
        let user = await getUser(result.token);
        setUser(user);
        navigate("/dashboard", { replace: true });
      }
      setTokenError(result.message);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.wrapperSignInForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          className={clsx(
            styles.signInInput,
            errors.email && styles.signInInputErrorValidation,
          )}
        />
        {errors.email && (
          <ErrorMessage
            message={
              errors.email.message
                ? errors.email.message
                : "This field is required"
            }
          />
        )}

        <input
          type={"password"}
          {...register("password", { required: true })}
          className={clsx(
            styles.signInInput,
            errors.password && styles.signInInputErrorValidation,
          )}
        />
        {errors.password && <ErrorMessage message={"This field is required"} />}

        <input
          type={"submit"}
          disabled={isSubmitting || !!tokenError}
          value={"Sign In"}
          className={styles.signInSubmit}
        />
        {tokenError && <ErrorMessage message={"This field is required"} />}
      </form>
    </div>
  );
};

export { SignIn };
