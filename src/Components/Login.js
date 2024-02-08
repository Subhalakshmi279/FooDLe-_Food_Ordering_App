import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  function show(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    let x = document.getElementById("pw").value;
    let y = "1234";

    if (x === y) {
      toast.success('Login Successful!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        navigate('/sidebar');
      }, 2000);
    } else {
      toast.error('Invalid password\nLogin failed!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <div className="auth-contianer">
        <form className="operation">
          <h1 className="co">FooDle</h1>

          <input type="text" className="format" id="username" placeholder="USERNAME" required />
          <input type="password" className="format" id="pw" placeholder="PASSWORD-1234 " required />
          
          {/* Change onSubmit to onClick */}
          <button className="opt" onClick={show}>Login</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Login;
