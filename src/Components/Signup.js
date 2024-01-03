import {Link} from 'react-router-dom';

const Signup = () => {
    return (
        <div className="auth-contianer">

            <form class="container">

                <h1 className="call">Registration page</h1>

                <input type="text" id="Name" className="correct" placeholder="Name" required/>

                <input type="email" id="email" className="correct" placeholder="email" />

                <input type="number" id="Number" className="correct" placeholder="Phone" />

                <input type="datetime-local" className="correct" />

                <input type="password" id="passr" className="correct" placeholder="password" />
                <input type="password" id="pass" className="correct" placeholder="retype your password" />

                <Link to="/login"><input type="submit" className="but" value="SUBMIT" /></Link>


            </form >
        </div>

    )
}
export default Signup;