import React, { useContext, useEffect } from "react";
import { Context } from "../context/AuthContext";

function ResolveAuthScreen(props) {
  const { tryLocalSignin } = useContext(Context);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
}

export default ResolveAuthScreen;
