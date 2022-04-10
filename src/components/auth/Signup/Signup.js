import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";
import { db } from "../../../services/firebase";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      let result = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );
      await result.user.updateProfile({
        displayName: firstNameRef.current.value,
      });
      // const verified = await result.user.sendEmailVerification();
      // console.log(verified);
      await db.collection("users").add({
        email: emailRef.current.value,
        name: firstNameRef.current.value,
        uid: result.user.uid,
        bookmarked: [],
      });
      const loggedInUser = {
        name: firstNameRef.current.value,
        uid: result.user.uid,
        email: result.user.email,
      };
      await localStorage.setItem("user", JSON.stringify(loggedInUser));
      // console.log("log in successfully")
      navigate("/home");
    } catch (e) {
      console.log(e);
      setError(
        "Failed to create an account. Password must be at least 6 characters or username already existed"
      );
    }
    console.log(currentUser);
    setLoading(false);
  }
  return (
    <>
      <div className="bgImage"></div>
      <div className="headerAuth">
        {/* <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        /> */}
      </div>
      <div className="wrap">
        <div className="title">Sign Up</div>
        {error && <div className="error">{error}</div>}

        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group id="first-name">
            <Form.Control
              type="first-name"
              className="input"
              placeholder="First Name"
              ref={firstNameRef}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group id="email">
            <Form.Control
              type="email"
              className="input"
              placeholder="Email Address"
              ref={emailRef}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group id="password">
            <Form.Control
              type="password"
              className="input"
              placeholder="Password"
              ref={passwordRef}
              required
            ></Form.Control>
          </Form.Group>

          <Button disabled={loading} className="button" type="submit">
            Sign Up
          </Button>
        </Form>

        <div className="text">
          Already an user?{" "}
          <Link className="link" to="/login">
            Sign in now.
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
