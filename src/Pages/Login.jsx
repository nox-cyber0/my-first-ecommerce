
const Login = () => {
  return (
    <>
      <div className="bg-gray-100 rounded p-6 justify-center align-center flex">
        <form>
          <h1 className="text-xl text-slate-500 font-semibold text-left">Log In</h1>
          <input type="text" className="w-full text-lg rounded-md" placeholder="Enter username" />
        </form>
      </div>
    </>
  );
}

export default Login;