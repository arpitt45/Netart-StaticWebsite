import React from "react";
import "./Home.css";
import logo from "./asserts/logo.png";
import leftImage from "./asserts/1.png";
import RightImage from "./asserts/2.png";
import lastImage from "./asserts/3.png";

import 'primeicons/primeicons.css';
        

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
                C.R.L. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h4>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
              <img src={RightImage} alt="Right" /> <br />
              <span>
                Government of India has awarded the "National Energy
                Conservation Award 2018". Mr. G. Selvaraj, Joint Managing
                Director of C.R.I. Group received the award from Smt. Sumitra
                Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable
                Minister of State.
              </span>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="div-2">
            <h4 className="text-center">
              INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
              RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS
              OF POWER FOR THE NATION
            </h4>
          </div>
          <img src={lastImage} alt="" className="img2" /> <br />
          <div className="text-center">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </div>
          <div className="line"></div>
          <h3 className="text-center">
          C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h3>
          <h5 className="text-center">
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL
          </h5>
        </section>

        <footer className="footer">
          <ul className="links">
            <li><i className="pi pi-phone" style={{ fontSize: '1.5rem' }}> </i> <b>Toll free 1800 200 1234</b> </li>
            <li><i className="pi pi-facebook" style={{ fontSize: '1.5rem' }}> </i> <a href="www.facebook.com/cripumps" className="ancher">www.facebook.com/cripumps</a></li>
            <li><i className="pi pi-globe" style={{ fontSize: '1.5rem' }}> <a href="www.crigroups.com" className="ancher">www.crigroups.com</a></i></li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Home;
