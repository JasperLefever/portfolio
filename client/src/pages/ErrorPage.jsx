import { Container } from "@nextui-org/react";
import { useRouteError } from "react-router-dom";

function ErrorPage({ error }) {
  const routeError = useRouteError();
  console.error(routeError);

  return (
    <Container
      justify={"center"}
      align={"center"}
      display={"flex"}
      direction={"column"}
    >
      <h1>Woopsie!</h1>
      <p>Something went wrong.</p>
      <p>
        <i>Status: {routeError?.status}</i>
        <br />
        <i>{routeError?.error?.message}</i>
        <br />
        <i>
          {routeError?.statusText ||
            routeError?.message ||
            error?.message ||
            "Unknown"}
        </i>
      </p>
    </Container>
  );
}

export default ErrorPage;
