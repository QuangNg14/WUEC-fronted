import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../Style.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const [verified, setVerified] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value).then(
          (data) => {
            const name = data.user.displayName;
            const loggedInUser = {
              name,
              uid: data.user.uid,
              email: data.user.email,
            };
            emailRef.current.value = "";
            passwordRef.current.value = "";
            localStorage.setItem("user", JSON.stringify(loggedInUser));
          }
        );

        navigate("/home");
      } catch {
        setError(
          "Failed to login. Please check your password or username and try again"
        );
      }
      setLoading(false);
      console.log(currentUser);
    } catch {
      setError(
        "Failed to login. Please check your password or username and try again"
      );
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="bgImage"></div>
      <div className="headerAuth">
        {/* <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        /> */}
      </div>

      <div className="wrap ">
        <div className="title">Sign in</div>
        {error && <div className="error">{error}</div>}

        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Control
              className="input"
              type="email"
              placeholder="Email Address"
              ref={emailRef}
              required
            ></Form.Control>
          </Form.Group>

          <Form.Group id="password">
            <Form.Control
              className="input"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            ></Form.Control>
          </Form.Group>

          <Button className="button" disabled={loading} type="submit">
            Sign in
          </Button>
        </Form>

        <div className="text">
          New to the website?{" "}
          <Link className="link" to="/signup">
            Sign up now{" "}
          </Link>
        </div>
        <div className="capcha">
          This website is a project from WUEC. If you are interested in starting
          the next unicorn, this is for you!{" "}
        </div>

        <div cclassName="capcha" style={{ color: "red" }}>
          Product by{" "}
          <Link
            style={{ color: "red" }}
            to="https://groups.wharton.upenn.edu/wuec/home/"
          >
            WUEC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
