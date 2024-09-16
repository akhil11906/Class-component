import React, { Component } from 'react'
import './footer.css';


export default class Footer extends Component {
        constructor(){
            super();
            this.state = {
                about: 'We are a leading e-learning platform offering a variety of courses to help you grow and achieve your career goals.',
                quickLinks: [
                  { id: 1, title: 'Home', link: '/' },
                  { id: 2, title: 'Courses', link: '/courses' },
                  { id: 3, title: 'About Us', link: '/about' },
                  { id: 4, title: 'Contact', link: '/contact' }
                ],
                socialLinks: [
                  { id: 1, name: 'Facebook', link: 'https://www.facebook.com' },
                  { id: 2, name: 'Twitter', link: 'https://www.twitter.com' },
                  { id: 3, name: 'LinkedIn', link: 'https://www.linkedin.com' }
                ],
                contactInfo: {
                  email: 'info@example.com',
                  phone: '+123 456 7890'
                }
              };
            }


  render() {
    return (
      <footer>
        <div>
            <h2>About us</h2>
            <p>{this.state.about}</p>
        </div>
        <div>
          <h2>QuickLinks</h2>
        <ul>
            {this.state.quickLinks.map((link) => (
              <li key={link.id}><a href={link.link}>{link.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>SocialLinks</h2>
          <ul>
            {this.state.socialLinks.map((social) =>(
              <li key={social.id}><a href={social.link}>{social.name}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact info</h2>
          <ul>
             <li key='phone'><a href={this.state.contactInfo.phone}>{this.state.contactInfo.phone}</a></li>
             <li key='mail'><a href={this.state.contactInfo.email}>{this.state.contactInfo.email}</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
