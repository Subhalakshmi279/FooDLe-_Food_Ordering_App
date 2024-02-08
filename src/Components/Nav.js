import { Link } from 'react-router-dom'
const Nav =()=>
{
    return(
        <div className="nav-wrapper1">
                <ul>
                    <li class="new-wrapper1">FooDle</li>

                    <Link to='/Help'>
                    <li class="nex-wrapper1">Help</li>
                    </Link>
                    
                    <Link to='/Login'>
                    <li class="nex-wrapper1">Login</li>
                    </Link>

                    <Link to='/Signup'>
                    <li class="nex-wrapper1">Signup</li>
                    </Link>
                </ul>
            </div>
    )
}
export default Nav;