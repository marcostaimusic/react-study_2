import React from "react";
import { useNavigate } from "react-router";

export const LoginScreen = () => {
  let history = useNavigate();
  const handleLogin = () => {
    // history("/");
    history("/", { replace: true }); // oppure
  };

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
