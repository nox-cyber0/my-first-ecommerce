import Layout from "../Components/Layout";

const UndefinedRoute = () => {
  return (
    <div>
      <Layout />
        <h1 className="text-8xl text-black dark:text-white font-semibold text-center w-full block mt-20">Error 404</h1>
        <p className="text-lg text-center font-medium text-black dark:text-white w-full block">Page not found.</p>
    </div>
  )
}

export default UndefinedRoute;
