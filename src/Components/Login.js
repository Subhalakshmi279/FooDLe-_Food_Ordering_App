import {Link} from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    
    return (
     


            <div className="auth-contianer">

                <form class="operation" >
                    <h1 class="co">FooDle</h1>


                    <input type="text" class="format" placeholder="USERNAME" required/>
                    <input type="password" class="format" placeholder="PASSWORD " required />


                    <Link to='/'><input type="button" class="opt" value="Login"/></Link>

                </form>
            </div>

    )
}
export default Login;