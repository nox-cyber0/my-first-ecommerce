import Layout from "../Components/Layout";
import { useAuth } from "../Utils/Auth";

const Home = () => {
  const auth = useAuth();
  return (
    <>
      <Layout>
        <h1>Welcome to Nox Commerce, {auth.username}</h1>
      </Layout>
    </>
  );
};

export default Home;
