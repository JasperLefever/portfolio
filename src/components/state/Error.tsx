interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return (
    <div className="text-center text-red-500">
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
