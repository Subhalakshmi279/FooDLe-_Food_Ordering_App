import React from 'react'
import '../Assets/CSS/Help.css'
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

function Help()
{
    return(
    <>
    <div class="container-new">
  <div class="row">
  <div class="col-md-6">
    <h1 className='help1'>Let's get you<br/> some help!</h1>
    <h6 className='help2'>Have any issue? Send us an <span class="email-us">email.</span></h6>
    <div class="IMG-wrapper">
    <img src="https://i.ibb.co/bWfN3Qy/undraw-onboarding-o8mv-1.png" alt="undraw-onboarding-o8mv-1" border="0"/>
      </div>
  </div>
  
  <div class="col-md-6">
    <form className='new-cont'>
  <div class="form-group">
    <label for="list">What help are you looking for ?</label>
    <input type="text" class="form-control" id="list" aria-describedby="emailHelp"/>
  </div>
  <div class="form-group">
    <label for="tags">Please Few Primary Requirements to help you ?</label>
    <input type="text" class="form-control" id="tags"/>
  </div>
      
    <div class="form-group">
    <label for="describe">Please describe your Issue on delivery ?</label>
    <textarea type="text" class="form-control" id="describe" rows="5"></textarea>
  </div>
      
      <div class="form-group">
    <label for="exampleFormControlSelect1">Select your Refund-Reason here</label>
    <select class="form-control" id="exampleFormControlSelect1" >
      <option>Bad On-Time delivery</option>
      <option>Food is not in good Quality</option>
      <option>Bad Customer Service</option>
      <option>Price Issue</option>
      <option>Misdelivered Order</option>
    </select>
  </div>

   <Link to='/'>         
<button type="button" className='fill'><span>Submit <LogOut /></span></button>
</Link>
    </form>
  </div>
  </div>
</div>
    </>
    )
}
export default Help;