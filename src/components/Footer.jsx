import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer style={{backgroundColor: '#cfcdc6', margin: '0'}}>
      <div className={styles.footer}>
      <div>
        <img src="logo.svg" alt="Eastside" />
        <br></br>
        <br></br>
        <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
        <p>United States</p>
        <br></br>
        <p>sale@uomo.com</p>
        <p>+1 246-345-0695</p>
        <br></br>
        <div className={styles.span}>
          <a href="https://www.facebook.com">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube"></i>
        </a>
        </div>
      </div>

      <div>
        <p><b>COMPANY</b></p><br></br>
        <p>About Us</p><br></br>
        <p>Career</p><br></br>
        <p>Affiliates</p><br></br>
        <p>Blog</p><br></br>
        <p>Contact Us</p>
      </div>

      <div>
        <p><b>SHOP</b></p><br></br>
        <p>New Arrivals</p><br></br>
        <p>Accessories</p><br></br>
        <p>Men</p><br></br>
        <p>Women</p><br></br>
        <p>Shop All</p>
      </div>

      <div>
        <p><b>HELP</b></p><br></br>
        <p>Customer Service</p><br></br>
        <p>My Account</p><br></br>
        <p>Find a Store</p><br></br>
        <p>Legal & Privacy</p><br></br>
        <p>Contact</p><br></br>
      </div>

      <div>
        <p><b>SUBSCRIBE</b></p>
        <br></br>
        <p>Be the first to get latest news about trends,</p>
        <p>promotions and more!</p>
        <br></br>
        <form className="flex items-center justify-around gap-2 bg-white h-14 w-80">
  <input
    type="text"
    placeholder="Enter your email"
    className="h-10 rounded-md text-black"
  />
  <button className="h-10 px-4 text-black ">
    Join
  </button>
</form>

        <br></br>
        <br></br>
        <p>Secure Payments</p><br></br>
        <div className="flex align-center gap-10">
          <p><img src="/mastercard.png" alt="Mastercard" className="w-10 h-6" /></p>
          <p><img src="/visa.png" alt="Visa" className="w-10 h-6" /></p>
          <p><img src="/paypal.png" alt="PayPal" className="w-10 h-10" /></p>
          <p><img src="/mastercard.png" alt="Mastercard" className="w-10 h-6" /></p>
          <p><img src="/paypal.png" alt="PayPal" className="w-10 h-10" /></p>
        </div>
      </div>
      </div>
      <hr></hr>
      {/* <div className={styles.copyright}>
        <p>2020 Uomo</p>
        <div className={styles.line}>
          <p className="text-gray-400">Language</p>
          <p>United Kingdom | English</p> 
          <p className="text-gray-400">Currency</p>
          <p>$ USD</p>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
