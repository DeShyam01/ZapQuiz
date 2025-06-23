import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import igIco from "../assets/icons/instagram.png";
import linkedinIco from "../assets/icons/linkedin.png";
import twitterIco from '../assets/icons/twitter.png';

const Footer = () => {
  return (
    <section id="footer" class="section">
      <div class="footer">
        <h2><Link to="/">ZapQuiz</Link></h2>
        <footer>
          <div class="socials">
            <a href="https://www.instagram.com/" target="_blank"><img src={igIco} alt="" /></a>
            <a href="https://x.com/?lang=en-in" target="_blank"><img src={twitterIco} alt="" /></a>
            <a href="https://www.linkedin.com/feed/" target="_blank"><img src={linkedinIco} alt="" /></a>
          </div>
          <div class="links">
            <a href="https://www.wonder.legal/in/modele/website-terms-conditions?msclkid=f469e627ce03191355fa8e1a0ff30e1b"  target="_blank">Terms & Conditions</a>
            <a href="https://www.wix.com/blog/how-to-write-website-privacy-policy?utm_source=bing&utm_medium=cpc&utm_campaign=506190447^1276534656014703^search%20-%20dsa&experiment_id=https%3A%2F%2Fwww.wix.com%2Fblog%2Fhow-to-write-website-privacy-policy^b^^&msclkid=06a52ff76f931ca5b75d47caada270e4" target="_blank">Privacy & policy</a>
          </div>
          <div class="copyright">
            <p>© 2025 copyright reserved - ZapQuiz</p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
