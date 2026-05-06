import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer style={{backgroundColor: '#cfcdc6'}}>
      <div className={styles.footer}>
        <div className={styles.contactBlock}>
          <img src="/temp/logo.svg" alt="Eastside" />
          <p>1418 River Drive, Suite 35 Cottonhall, CA 9622</p>
          <p>United States</p>
          <p>sale@uomo.com</p>
          <p>+1 246-345-0695</p>
          
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

        <div className={styles.companyBlock}>
          <p><b>COMPANY</b></p>
          <p>About Us</p>
          <p>Career</p>
          <p>Affiliates</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div className={styles.shopBlock}>
          <p><b>SHOP</b></p>
          <p>New Arrivals</p>
          <p>Accessories</p>
          <p>Men</p>
          <p>Women</p>
          <p>Shop All</p>
        </div>

        <div className={styles.helpBlock}>
          <p><b>HELP</b></p>
          <p>Customer Service</p>
          <p>My Account</p>
          <p>Find a Store</p>
          <p>Legal & Privacy</p>
          <p>Contact</p>
          <p>Gift Card</p>
        </div>

        <div className={styles.subscribeBlock}>
          <p><b>SUBSCRIBE</b></p>
          <p>Be the first to get latest news about trends,</p>
          <p>promotions and more!</p>
          <form className="flex items-center justify-around gap-2 bg-white h-14 w-80">
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 rounded-md text-black focus:outline-none"
            />
            <button className="h-10 px-4 text-black ">
              Join
            </button>
          </form>

          
          
          <p>Secure Payments</p>
          <div className={`flex align-center gap-10 ${styles.paymentRow}`}>
            <span className={styles.discover}>DISCOVER</span>
            <img src="/footer/mastercard.png" alt="Mastercard" className="w-10 h-6" />
            <img src="/footer/paypal.png" alt="PayPal" className="w-10 h-10" />
            <span className={styles.skrill}>Skrill</span>
            <img src="/footer/visa.png" alt="Visa" className="w-10 h-6" />
          </div>
        </div>
      </div>
      <hr/>


      <div className={styles.bottomRow}>
              <p className={styles.copy}>@2020 Uomo</p>
              <div className={styles.localeRow}>
                <span className={styles.label}>Language</span>
                <button type="button" className={styles.inlineSelect}>
                  United Kingdom | English
                </button>
                <span className={styles.label}>Currency</span>
                <button type="button" className={styles.inlineSelect}>
                  $ USD
                </button>
              </div>
            </div>
    </footer>
  );
}

export default Footer;
