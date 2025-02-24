import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops !!</h1>
      <h3>Somethig went wrong..!</h3>
      <h3>{err.message}</h3>
    </div>
  );
};

export default Error;
