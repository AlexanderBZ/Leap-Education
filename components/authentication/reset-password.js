import Image from "next/image";
import { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import { useRouter } from "next/router";
import resetPassword from "../../loaders/resetPassword";

export default function ResetPasswordForm({ passwordPathname }) {
  //Create router
  const router = useRouter();

  //Create new password and email refs
  const newPasswordRef = useRef();
  const emailInputRef = useRef();

  const [errorOccured, setErrorOccured] = useState();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const result = await resetPassword(
      enteredEmail,
      passwordPathname,
      enteredNewPassword
    );

    if (!result.ok) {
      // set error messsage
      const formattedResponse = await response.json();
      setErrorOccured(formattedResponse.error);
    } else {
      // set token
      router.push("/login");
    }
  }

  return (
    <section className={classes.container}>
      <Image
        src={"/images/logo/logo.png"}
        alt={"Profile Photo"}
        width={125}
        height={125}
      />
      <h2 className={classes.welcome}>
        Welcome back. Login with new password when the page appears.
      </h2>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">New Password</label>
          <input type="password" id="password" ref={newPasswordRef} required />
        </div>
        <div className={classes.buttons}>
          <button className={classes.signInButton}>
            <h1>Reset Password</h1>
          </button>
          {errorOccured && <h3 className={classes.error}>{errorOccured}</h3>}
        </div>
      </form>
    </section>
  );
}
