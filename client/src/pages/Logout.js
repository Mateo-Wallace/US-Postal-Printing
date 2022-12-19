import React from "react";
import AuthService from "../utils/auth";

export default function Logout() {
  AuthService.logout();
  return <h1>You have Successfully been logged out!</h1>;
}
