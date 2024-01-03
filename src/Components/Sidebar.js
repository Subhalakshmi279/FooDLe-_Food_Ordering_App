import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../Assets/CSS/Sidebar.css';
import { Soup } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Award } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Store } from 'lucide-react';


function Sidebar()
{
  return(
    <div className='container-fluid'>

          <div id="mySidebar" class="sidebar">
      <Link to='#'><CircleUserRound /><span class="icon-text">Account</span></Link>
      <br />
      <Link to='#'> <Soup /><span class="icon-text">Order</span></Link>
      <br />
      <Link to='#'><Award /><span class="icon-text">services</span></Link>
      <br />
      <Link to='#'><ShoppingCart /><span class="icon-text">Cart</span></Link>
      <br />
      <Link to="#"><Store /><span class="icon-text">About</span></Link>

      


        <div class="move">
        <Link to='/'><input type='button' class="close" value='LOGOUT'/></Link>
        </div>
   


    </div>


    <div class="continue">

<div class="burger-menu">
  {/* dropdown */}

  <div class="dropdown">
  <button class="dropbtn">Cuisine</button>
  <div class="dropbtn-content">
    <a href="facebook.com">Fastfood</a>
    <a href="twitter.com">Chinese</a>
    <a href="twitter.com">Indian</a>
    <a href="twitter.com">Italian</a>
    {/* <a href="twitter.com">Continental</a> */}
  </div>
</div>


  <br/>
  <br/>
  <br/>
  <div class="f-items">
    <div class="f-item">
        <img src="https://images.pexels.com/photos/2345975/pexels-photo-2345975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fresh Burger" class="burger-bg"/>
        <div class="fitem-details">
            <h4 class="item-name">Fresh Burger</h4>
            <h5 class="item-price">$2.85</h5>
            <a href="" class="buy-now-btn">Order Now</a>
        </div>
    </div>
    <div class="f-item">
        <img src="https://img.freepik.com/free-photo/freshly-baked-pizza-rustic-wooden-table-generated-by-ai_24640-80814.jpg?t=st=1703096178~exp=1703099778~hmac=ef28b9d381aa84034b1af1030187853f7af846523c92678ddf0bf8b40f1f6dfb&w=1380" alt="Fresh Burger" class="burger-bg"/>
        <div class="fitem-details">
            <h4 class="item-name">Pizza</h4>
            <h5 class="item-price">$4.25</h5>
            <a href="" class="buy-now-btn">Order Now</a>
        </div>
    </div>
    <div class="f-item">
        <img src="https://img.freepik.com/free-photo/baked-lasagna-with-gourmet-italian-bolognese-sauce-generated-by-ai_188544-9608.jpg?w=1380&t=st=1703096083~exp=1703096683~hmac=9b01407e66fc9e7b22d96b48b0236d111be5c2a756ba853e7f3aba089ec27772" alt="Fresh Burger" class="burger-bg"/>
        <div class="fitem-details">
            <h4 class="item-name">Lasagna</h4>
            <h5 class="item-price">$3.25</h5>
            <a href="" class="buy-now-btn">Order Now</a>
        </div>
    </div>
    <div class="f-item">
        <img src="https://img.freepik.com/free-photo/view-delicious-onion-rings-dish_23-2150777727.jpg?t=st=1703096478~exp=1703100078~hmac=7ab8b16043c68a031b8834907c910d382dde4fc8773073a1d21ab8ee9a24ca7b&w=1380" alt="Fresh Burger" class="burger-bg"/>
        <div class="fitem-details">
            <h4 class="item-name">Onion-Rings</h4>
            <h5 class="item-price">$3.15</h5>
            <a href="" class="buy-now-btn">Order Now</a>
        </div>
    </div>
  </div>
</div>
</div>

    </div>
  )
}
export default Sidebar;