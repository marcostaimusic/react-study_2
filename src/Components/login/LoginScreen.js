import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  let history = useNavigate();
  const lastPath = localStorage.getItem("lastPath") || "/";
  console.log(lastPath);
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: "John" },
    });
    // history("/");
    history(lastPath, { replace: true }); // oppure
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
