import React from 'react';
import './footer.css';
import logo3 from"../assets/ecell logo.png";

const Footer = () => (
  <div>
    <footer class="footer">
        <div class="container">
         <div class="row">
           <div class="footer-col" id='footer-col1'>
             <a href="https://www.ecellvnit.org/" target="_blank"><img id='logo3' src={logo3} /></a>
           </div>
           <div class="footer-col">
             <h4>Address</h4>
             <ul>
               <li>E-Cell office, 1st Floor VNIT Canteen, Visvesvaraya National Institute Of Technology, South Ambazari Road, Abhyankar Nagar, Nagpur-440010</li>
             </ul>
           </div>
           <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>For Public Affairs and Communication:
                <a href="mailto:startupconclave@ecellvnit.co.in">&#128231; startupconclave@ecellvnit.co.in</a></li>
              <li>For Association and Sponsorship:
                <a href="mailto:corporateaffairs@ecellvnit.co.in">&#128231; corporateaffairs@ecellvnit.co.in</a></li>
            </ul>
          </div>
           <div class="footer-col" id='footer-col1'>
             <h4>Quick Links</h4>
             <ul className='footer'>
               <li><a href="https://flagship.ecellvnit.org/">Flagship</a></li>
               <li><a href="https://neo.ecellvnit.org/">NEO</a></li>
               <li><a href="https://jugaad.ecellvnit.org/">Jugaad</a></li>
               <li><a href="https://csuites.ecellvnit.org/">C-suites</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>follow us</h4>
             <div class="social-links">
               <a href="https://m.facebook.com/vnitecell/" target="_blank"><i class="fab fa-facebook-f"></i></a>
               <a href="https://twitter.com/ecell_vnit" target="_blank"><i class="fab fa-twitter"></i></a>
               <a href="https://www.instagram.com/ecellvnit/" target="_blank"><i class="fab fa-instagram"></i></a>
               <a href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
               <a href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ" target="_blank"><i class="fab fa-youtube"></i></a>
             </div>
           </div>
         </div>
        </div>
        <div class="row">
            E-Cell VNIT Copyright © 2023 || E-Cell VNIT - All rights reserved !!
            </div>
            <div class="go_top">
                <a href="#navbar"><i class="fas fa-arrow-up"></i></a>
              </div>
     </footer>
  </div>
);

export default Footer;