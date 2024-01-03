// import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

    const navigate = useNavigate();

    function show() {
        let x = document.getElementById("pass").value;
        let y = document.getElementById("passr").value;;
    
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
          
            navigate('/login');
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

            <form class="container">

                <h1 className="call">Registration page</h1>

                <input type="text" id="Name" className="correct" placeholder="Name" required/>

                <input type="email" id="email" className="correct" placeholder="email" />

                <input type="number" id="Number" className="correct" placeholder="Phone" />

                <input type="datetime-local" className="correct" />

                <input type="password" id="passr" className="correct" placeholder="password" />
                <input type="password" id="pass" className="correct" placeholder="retype your password" />

               <button className='but' onClick={show}>Register</button>


            </form >
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
export default Signup;