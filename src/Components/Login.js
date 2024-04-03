import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success('Login Successful for ${response.data}', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        navigate('/sidebar');
      } else {
        toast.error('Invalid credentials\nLogin failed!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  return (
    <>
      <div className="auth-contianer">
        <form className="operation">
          <h1 className="co">FooDle</h1>

          <input type="text" className="format" id="username" placeholder="EMAIL" value={email} onChange={handleEmailChange} required />
          <input type="password" className="format" id="pw" placeholder="PASSWORD" value={password} onChange={handlePasswordChange} required />
          
          <button className="opt" onClick={handleLogin}>Login</button>
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
};

export default Login;