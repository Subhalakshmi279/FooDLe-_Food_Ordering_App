import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    const navigate = useNavigate();

    function show() {
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
        
          navigate('/signup');
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

                <form class="operation" onSubmit={show}>
                    <h1 class="co">FooDle</h1>


                    <input type="text" class="format" id="username" placeholder="USERNAME" required/>
                    <input type="password" class="format"id="pw" placeholder="PASSWORD " required />


                    <button class="opt">Login</button>

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

    )
}
export default Login;