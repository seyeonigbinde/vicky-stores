import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section className='footer_container'>
        <div className='footer_items'>
          <h1>
            <b> Vicky Stores </b>
          </h1>
          <div className='footer_socials'>
            <i class='fab fa-facebook-f'></i>
            <i class='fab fa-twitter'></i>
            <i class='fab fa-instagram'></i>
            <i class='fab fa-youtube'></i>
          </div>
        </div>
        <div className='footer_items'>
          <h4>Company</h4>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
          <Link>Careers</Link>
        </div>
        <div className='footer_items'>
          <h4>Resources</h4>

          <Link>API Reference</Link>
          <Link>Terms & Conditions</Link>
          <Link>FAQs</Link>
          <Link>Privacy & Security</Link>
        </div>
        <div className='footer_items'>
          <h3>About Vicky Stores</h3>
          <p>
            Vicky Stores your number one online fashion store in Nigeria.
            Finding quality clothes, footwears and jewelries has never been made
            so easy online, with Vicky Stores you don’t need to worry about
            getting value for your money, with our money back guarantee you can
            trust we would deliver what you order in good time.
          </p>
        </div>
      </section>
      <hr />
      <section className='footer_copyright'>
        <p>
          Copyright &copy; 2021 || Designed by{' '}
          <a href='https://seyeonigbinde.vercel.app/'>Stevens Design Tech.</a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
