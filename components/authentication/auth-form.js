import Image from "next/image";
import { useState, useRef } from "react";
import classes from "./auth-form.module.css";
import { useRouter } from "next/router";
import createUser from "../../loaders/signUp";
import signInUser from "../../loaders/logIn";

export default function AuthForm({ loginPage }) {
  //Create router
  const router = useRouter();
  //Create refs for username, email, and password
  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //Create useState for login and error
  const [isLogin, setIsLogin] = useState(loginPage);
  const [errorOccured, setErrorOccured] = useState();

  //Create function to handle state
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  //Submit handler for auth
  async function submitHandler(event) {
    //Prevent default HTMl function
    event.preventDefault();

    //Get value of email and password inputs
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signInUser(enteredEmail, enteredPassword);

      if (!result.ok) {
        //Set error messsage
        const formattedLoginResponse = await result.json();
        setErrorOccured(formattedLoginResponse.error);
      } else {
        //Get json and set token
        const formattedLoginResponse = await result.json();
        localStorage.setItem("x-amz-security-token", formattedLoginResponse);
        router.push("/");
      }
    } else {
      try {
        //Get username input and make sure it's the right length
        const enteredUsername = usernameInputRef.current.value;
        if (enteredUsername.length < 6 || enteredPassword.length < 6) {
          setErrorOccured("6 character minimum for each field");
        }

        //Create user with inputs
        const response = await createUser(
          enteredUsername,
          enteredEmail,
          enteredPassword
        );

        if (!response.ok) {
          // set error messsage
          const formattedSignUpResponse = await response.json();
          setErrorOccured(formattedSignUpResponse.error);
        } else {
          //Get response json and set token
          const formattedSignUpResponse = await response.json();
          localStorage.setItem("x-amz-security-token", formattedSignUpResponse);
          router.push("/welcome");
        }
      } catch (error) {
        console.log(error);
      }
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
        {isLogin ? "Welcome back" : "Sign Up"}
      </h2>
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={usernameInputRef} required />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.buttons}>
          <button className={classes.signInButton}>
            {isLogin ? <h1>Login</h1> : <h1>Create Account</h1>}
          </button>
          {errorOccured && <h3 className={classes.error}>{errorOccured}</h3>}
          {isLogin && (
            <h3
              className={classes.toggle}
              onClick={() => router.push("/forgot-password")}
            >
              Forgot Password
            </h3>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}
