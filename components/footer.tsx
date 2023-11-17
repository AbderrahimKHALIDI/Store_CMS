import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <>
      <section className="mt-6 py-5 bg-gradient-dark position-relative" style={{backgroundImage:`url(https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80); background-size: cover; background-position: center center;`}}>
        <span className="mask bg-gradient-dark opacity-8"></span>
        <div className="container position-relative z-index-2">
            <div className="row">
                <div className="col-md-7 mx-auto text-center">
                    <h3 className="text-white mb-3" >
                        About Our Shop</h3>
                    <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                </div>
            </div>
        </div>
    </section>
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-5 mb-lg-0">
              <h6 className="text-uppercase mb-2">Soft</h6>
              <p className="mb-4 pb-2">
                The next generation of design systems.
              </p>
              <a href="javascript:;" className="text-secondary me-xl-4 me-3">
                <span
                  className="text-lg fab fa-facebook"
                  aria-hidden="true"
                ></span>
              </a>
              <a href="javascript:;" className="text-secondary me-xl-4 me-3">
                <span
                  className="text-lg fab fa-twitter"
                  aria-hidden="true"
                ></span>
              </a>
              <a href="javascript:;" className="text-secondary me-xl-4 me-3">
                <span
                  className="text-lg fab fa-instagram"
                  aria-hidden="true"
                ></span>
              </a>
              <a href="javascript:;" className="text-secondary me-xl-4 me-3">
                <span
                  className="text-lg fab fa-pinterest"
                  aria-hidden="true"
                ></span>
              </a>
              <a href="javascript:;" className="text-secondary me-xl-4 me-3">
                <span
                  className="text-lg fab fa-github"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
            <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
              <h6 className="text-sm">Company</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    href="javascript:void(0);"
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Careers
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Press
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm">Pages</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Register
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Add list
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm">Legal</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Terms
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Team
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-6 mb-md-0 mb-4">
              <h6 className="text-sm">Resources</h6>
              <ul className="flex-column ms-n3 nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Blog
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Service
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Product
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-secondary" href="javascript:;">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
          <div className="row">
            <div className="col-8 mx-lg-auto text-lg-center">
              <p className="text-sm text-secondary">
                Copyright © 2023 Abderrahim Soft &amp; Loopple by Creative Tim.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
