import React from 'react';
import './Home.css';
import logo from './asserts/logo.png'
import leftImage from './asserts/1.png'
import RightImage from './asserts/2.png'
import lastImage from './asserts/3.png'


const Home = (props) => {
  return (
    <>
    <div>
      <section>
      <header>
        <img src={logo} alt="companylogo" className="logo" />
      </header>
      <div className="hero">
        <img src={leftImage} alt="trophy" className="l-img" />
        <div className="right-image">
          <h4>
          C.R.L. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
          </h4>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            cupiditate dolore aspernatur dolorem asperiores quasi ullam ipsa id
            veritatis dolores.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quaerat quod debitis fuga maxime error consectetur iure repellendus
            provident aliquid.
          </li>
          <img src={RightImage}  alt="Right" /> <br />
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            inventore at exercitationem cupiditate amet accusantium perferendis
            fugiat repellendus! In reiciendis id necessitatibus fuga porro cum
            nulla, nam facere? A, et?</span
          >
        </div>
      </div>
    </section>

    <section className="section2">
      <div className="div-2">
        <h5 className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
          dolorum! Similique aspernatur illo eaque officiis. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Dignissimos dolores atque nihil
          modi illo adipisci.
        </h5>
      </div>
      <img src={lastImage} alt="" className="img2" /> <br />
      <div className="text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
        voluptates?
      </div>
      <div className="line"></div>
      <h3 className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum
        laboriosam hic qui, culpa ullam.
      </h3>
      <h5 className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis
        animi ullam. Tenetur cupiditate quas modi in, ipsa quaerat ex
        accusantium velit! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Illo sint dolorem ratione totam voluptas accusamus, consequatur
        aut in! Eos excepturi architecto officiis odio nemo aperiam eaque ipsum,
        ab adipisci quae.
      </h5>
    </section>

    <footer className="footer">
      <ul className="links">
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
    </footer>
    </div>
    </>
  )
}

export default Home
