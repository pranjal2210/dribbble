import React, { useContext, useEffect, ComponentType } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalStateContext";

// Define the type for the props of the wrapped component
type WithAuthProps = {
  [key: string]: any; // Adjust this according to the expected props of your wrapped component
};

const withAuth = (WrappedComponent: ComponentType<WithAuthProps>) => {
  const AuthHOC: React.FC<Omit<WithAuthProps, keyof WithAuthProps>> = (
    props
  ) => {
    const { state } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!state.isAuthenticated) {
        navigate("/login");
      }
    }, [state.isAuthenticated, navigate]);

    return state.isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthHOC;
};

export default withAuth;
