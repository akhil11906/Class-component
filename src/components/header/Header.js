import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
            constructor(){
                super();
                this.state = {
                    logo: 'https://www.achieversit.com/assets/images/logo-white.png',
                    headerData: [
                      { id: 1, title: 'Home', link: '/' },
                      { id: 2, title: 'Courses', link: '/courses' },
                      { id: 3, title: 'About Us', link: '/about' },
                      { id: 4, title: 'Blog', link: '/blog' },
                      { id: 5, title: 'Contact', link: '/contact' },
                      { id: 6, title: 'Login', link: '/login' },
                      { id: 7, title: 'Sign Up', link: '/signup' }
                    ]
                  };
                }


  render() {
    return (
     <header>
      <div>
         <img src={this.state.logo} alt='logo'  />
      </div>
   
      <div>
        <nav>
            <ul>{this.state.headerData.map((links)  =>(
                <li key={links.id}><a href='#'>{links.title}</a></li>
            ))}</ul>
        </nav>
        
      </div>
      </header>
    );
  }
}
