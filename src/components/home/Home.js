import React, {Component} from 'react';
import Particles from 'react-particles-js';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <header id="topnav" className="defaultscroll fixed-top sticky">
          <div className="container">
            <div>
              <a href="index.html" className="logo text-uppercase">
                <div className="logo-light" style={{paddingTop: 5}}>Lattice AI</div>
                <div className="logo-dark" style={{ color: '#ff5f80', paddingTop: 5}}>Lattice AI</div>
              </a>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <a className="navbar-toggle">
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
            <div id="navigation">
              <ul className="navigation-menu">
                <li className="active">
                  <a href="#home">Home</a>
                </li>
                <li className="">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <Particles
          params={{
            particles: {
              "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
              "color": {"value": "#ffffff"},
              "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
              },
              "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
              }
            }
          }}
          style={{
            width: '100%',
            backgroundColor: '#fe4493',
            backgroundImage: 'radial-gradient(circle at 50% top, rgba(255,97,123,0.6) 0%, rgba(255,97,123,0) 75%),radial-gradient(circle at right top, #ff7866 0%, rgba(255,120,102,0) 57%)'
          }}
        />

        <section className="bg-home" id="home" style={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
          <div className="home-center">
            <div className="home-desc-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <h3 className="home-title text-white">LATTICE AI</h3>
                    <p className="pt-4 home-sub-title text-white mx-auto">Using AI to predict customer behavior, recommend products, and infer missing information.</p>
                    <a href="#contact" className="request-demo-btn">Request a Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section " id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="title text-center">
                  <h2>Get In <b>Touch</b></h2>
                  <span className="title-border"><i className="mdi mdi-set-none"></i></span>
                </div>
              </div>
            </div>
            <div className="custom-form mt-4 pt-4">
              <div id="message"></div>
              <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input name="name" id="name" type="text" className="form-control" placeholder="Your name..."/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="email">Email address</label>
                      <input name="email" id="email" type="email" className="form-control" placeholder="Your email..."/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="subject">Subject</label>
                      <input type="text" className="form-control" id="subject" placeholder="Your Subject.."/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label for="comments">Message</label>
                      <textarea name="comments" id="comments" rows="4" className="form-control"
                                placeholder="Your message..."></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-right">
                    <input type="button" className="submitBnt btn btn-custom" value="Send Message"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p className="text-uppercase footer-title">About Us</p>
                <ul className="list-unstyled company-sub-menu">
                  <li><a href="#">About Us </a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Job Opportunites</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <p className="text-uppercase footer-title">Resources</p>
                <ul className="list-unstyled company-sub-menu">
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Help Center</a></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <p className="text-uppercase footer-title">Contact Us</p>
                <div className="contact-us">
                  <p>support@latticeai.com</p>
                </div>
                <ul className="footer-icons list-inline mt-4">
                  <li className="list-inline-item"><a href="#" className=""><i className="mdi mdi-facebook"></i></a>
                  </li>
                  <li className="list-inline-item"><a href="#" className=""><i className="mdi mdi-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className=""><i className="mdi mdi-google-plus"></i></a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </section>

        <div className="footer-alt bg-dark">
          <p className="copy-rights" style={{ fontSize: '13px' }}>2018 © Lattice Thinking, Inc.</p>
        </div>
      </div>
    );
  }
}

export default Home;