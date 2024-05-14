import Loading from "./Loading.tsx";
import Error from "./Error.tsx";
import React from "react";

interface StateHandlerProps {
  children: React.ReactNode;
  error: Error;
  isLoading: boolean;
}

function StateHandler({ children, error, isLoading }: StateHandlerProps) {
  if (error) {
    return <Error error={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return children;
}

export default StateHandler;
