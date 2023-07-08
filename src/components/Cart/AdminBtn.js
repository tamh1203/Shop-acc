import React from "react";
import { NavLink } from "react-router-dom";
export default function AdminBtn() {
  return (
    <NavLink to="/admin" className="btn btn-outline-primary mx-2">
      <span className="">Admin </span>
    </NavLink>
  );
}