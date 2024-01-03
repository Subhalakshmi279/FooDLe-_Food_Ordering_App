import { Link } from 'react-router-dom'

import image2 from '../Assets/images/c1.jpg'
import image from '../Assets/images/d2.jpg'
import image1 from '../Assets/images/d1.jpg'
import image3 from '../Assets/images/d3.jpg'
import image4 from '../Assets/images/d4.jpg'
import image5 from '../Assets/images/4.png'
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Twitter } from 'lucide-react';
// import { CupSoda,Utensils,Citrus,FishIcon,LucideDrumstick,Beef,Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';


const Home = () => {

  return (
    <>
    {/* <Footer/> */}
    <div className="class-wrapper">
      

      <div className='d-flex-home'>

        <div className="ima-wrapper">
          <h1 className='hi'>It's  Not just an Food,</h1>
          {/* <br /> */}
          <h1 className='hi'>It's an Experience !</h1>
        </div>

        <div className="nic-wrapper">
          <img src={image2} alt="hi" class="img-wrapper" />
        </div>
      </div>

      {/* chnaging text */}
      <div class="rotating-text-wrapper">

  <h2>Late-Night Office ?</h2>
  <h2>Burnt Your Food !</h2>
  <h2>Craving for your favourite food ?</h2>
  <h2>Wanna eat your favourite Food ?</h2>
  <h2>Night Dinner !</h2>
  <h2>Sudden Guests your Home ?</h2>

</div>


  {/* sidebar */}

      {/* card */}


      <main class="page-content1">
        <div class="card1">
          <div class="content1">
            <h2 class="title1">King's Burger</h2>
            <p class="copy1">Indulge in gourmet perfection with our signature burger — a succulent beef patty, expertly seasoned, nestled in a freshly baked brioche bun, adorned with premium cheeses, crisp veggies, and classic condiments.
            </p>
            <button class="btn1">View menu</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Stake</h2>
            <p class="copy1">Savor the unparalleled richness of our prime steak, meticulously aged and perfectly grilled to your preference,
              delivering a culinary symphony of flavor and tenderness.</p>
            <button class="btn1">View menu</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Biryani</h2>
            <p class="copy1">Immerse your senses in the aromatic perfection of our Biryani, a fragrant blend of Basmati rice, succulent marinated meat,
              and an exquisite melange of spices, delivering an authentic taste of culinary craftsmanship.</p>
            <button class="btn1">View menu</button>
          </div>
        </div>
        <div class="card1">
          <div class="content1">
            <h2 class="title1">Tandori</h2>
            <p class="copy1">Experience the tantalizing flavors of our Tandoori selection — marinated meats expertly
              grilled in traditional clay ovens, delivering a succulent and smoky symphony of Indian spices.</p>
            <button class="btn1">View menu</button>
          </div>
        </div>
      </main>

      {/* card2 */}
      <main class="page-content2">
        <div class="card2">
          <div class="content2">
            <h2 class="title">Milkshake</h2>
            <p class="copy2">Indulge in a creamy delight with our signature milkshakes —
              a velvety blend of premium ice cream, fresh milk, and delectable flavors, creating a luscious and satisfying beverage experience.</p>
            <button class="btn2">View menu</button>
          </div>
        </div>
        <div class="card2">
          <div class="content2">
            <h2 class="title">Brownie</h2>
            <p class="copy">Satisfy your sweet cravings with our decadent brownie — a heavenly treat of rich, fudgy chocolate goodness, served warm and
              topped with a drizzle of indulgent sauce for the perfect dessert indulgence.</p>
            <button class="btn">View menu</button>
          </div>
        </div>
        <div class="card2">
          <div class="content2">
            <h2 class="title">Fresh Juice</h2>
            <p class="copy2">Refresh your palate with our vibrant selection of juices — a medley of freshly squeezed fruits bursting with natural flavors,
              crafted to perfection for a revitalizing and thirst-quenching experience.</p>
            <button class="btn2">View menu</button>
          </div>
        </div>
        <div class="card2">
          <div class="content2">
            <h2 class="title">Fruit Salad</h2>
            <p class="copy2">Elevate your palate with our refreshing fruit salad — a colorful ensemble of seasonal fruits, meticulously sliced and delicately tossed to create a
              crisp and invigorating medley, delivering a burst of natural sweetness in every bite.</p>
            <button class="btn2">View menu</button>
          </div>
        </div>
      </main>

      <div className='word'>

        <h1 className='text1'>RESTAURANTS IN YOUR POCKET</h1>
        <h2 className='text2'>Order from your favorite restaurants & track on the go, with the all-new Foodle app.
        <i className='icon' ></i></h2>
      </div>

      <div class="fade_rule"></div> 

      <div class="work">
        <h1 class="text">
          How it Works ?
        </h1>
      </div>

      {/* delivery */}

      <div class="cards-list">

        <div class="card 1">
          <div class="card_image"> <img src={image} alt="card1"/> </div>
          <div class="card_title title-white">
            <p>Order</p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src={image1} alt="card1"/>
          </div>
          <div class="card_title title-white">
            <p>Delivery</p>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src={image3} alt="card1"/>
          </div>
          <div class="card_title">
            <p>Payment</p>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image">
            <img src={image4} alt="card1"/>
          </div>
          <div class="card_title title-black">
            <p>Enjoy</p>
          </div>
        </div>

      </div>

      {/* review */}
      <div className='review'>

        <div class="recipe-card2">
          <img class="recipe-preview" src="http://pngimg.com/uploads/noodle/noodle_PNG15.png" alt="noodle" />
          <strong class="recipe-title">Noodle chicken soup</strong>
          <span class="recipe-level">Intermediate</span>
          <div class="recipe-infos">
            <span>25<p>Min</p></span>
            <span>90<p>Kcal</p></span>
            <span><i class="icon-food"></i><p>Meat</p></span>
          </div>
          <div class="rating">
            <span class="star full"></span>
            <span class="star full"></span>
            <span class="star half"></span>
            <span class="star"></span>
            <span class="star"></span>
          </div>
          <button class="recipe-start">
            Order Now
          </button>
        </div>


        <div class="recipe-card2">
          <img class="recipe-preview2" src={image5} alt="noodle"/>
          <strong class="recipe-title2">Ham Burger</strong>
          <span class="recipe-level2">Starters</span>
          <div class="recipe-infos2">
            <span>37<p>Min</p></span>
            <span>120<p>Kcal</p></span>
            <span><i class="icon-food"></i><p>Meat</p></span>
          </div>
          <div class="rating2">
            <span class="star full2"></span>
            <span class="star full2"></span>
            <span class="star full2"></span>
            <span class="star full2"></span>
            <span class="star2"></span>
          </div>
          <button class="recipe-start2">
          Order Now
          </button>
        </div>
      </div>
      <div className='hop'>
      <div class="social-links">
                  <Link to="/">
                    <Facebook size={24} />
                  </Link>
                  <Link to="/">
                    <Twitter size={24} />
                  </Link>
                  <Link to="/">
                    <Instagram size={24} />
                  </Link>
                  <Link to="/">
                    <Linkedin size={24} />
                  </Link>
                </div>
                <div className='sup'>
                  <h2 className='hiit'>@Foodle</h2>
                </div>
                <div className='city'>
                  <li className='oor'>Coimbatore</li>
                  <li className='oor'>Chennai</li>
                  <li className='oor'>Trichy</li>
                </div>
        </div>
    </div>
    </>
  )

}
export default Home;