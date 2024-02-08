import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

    const navigate = useNavigate();

    function show(e) {
            e.preventDefault();
      let name = document.getElementById("Name").value;
      let email = document.getElementById("email").value;
      let number = document.getElementById("Number").value;
      let date = document.getElementById("date").value;
      let pass = document.getElementById("pass").value;
      let passr = document.getElementById("passr").value;

        if (name && email && number && date && pass && passr && pass === passr)  {
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

            <form className="container">

                <h1 className="call">Registration page</h1>

                <input type="text" id="Name" className="correct" placeholder="Name" required/>

                <input type="email" id="email" className="correct" placeholder="email" required/>

                <input type="number" id="Number" className="correct" placeholder="Phone" required/>

                <input type="datetime-local" id="date" className="correct" required/>

                <input type="password" id="passr" className="correct" placeholder="password"  required/>
                <input type="password" id="pass" className="correct" placeholder="retype your password"  required/>

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