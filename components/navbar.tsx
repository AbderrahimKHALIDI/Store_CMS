import Link from "next/link";

import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";




const Navbar = async ()  => {
 
  const categories = await getCategories();

  return (
    <>
      <div className=" navbar bg-gradient-dark py-1">
        <div className="container">
          <div className="d-flex w-lg-50 w-100 text-lg-start text-center justify-content-lg-start justify-content-center mb-lg-0 mb-2">
            <a href="javascript:;">
              <i
                className="fa fa-facebook-square text-sm text-white"
                aria-hidden="true"
              ></i>
            </a>
            <a href="javascript:;">
              <i
                className="fa fa-twitter text-sm text-white ms-3"
                aria-hidden="true"
              ></i>
            </a>
            <a href="javascript:;">
              <i
                className="fa fa-instagram text-sm text-white ms-3"
                aria-hidden="true"
              ></i>
            </a>
          </div>
          <div className="d-flex align-items-center ms-lg-auto w-lg-50 w-100">
            <i
              className="fa fa-phone text-sm text-white ms-auto"
              aria-hidden="true"
            ></i>
            <span className="text-sm text-white ms-2">+1 3232 4343</span>

            <i
              className="fa fa-envelope text-sm text-white ms-4"
              aria-hidden="true"
            ></i>
            <span className="text-sm text-white ms-2 me-lg-0 me-auto">
              loopple@loopple.com
            </span>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">
          <Link className="navbar-brand w-8" href="/" data-config-id="brand">
            <img
              src="https://www.loopple.com/img/loopple-logo.png"
              width="80"
              alt=""
            />
          </Link>

        
          <div
            className=" navbar-collapse w-100 pt-3 pb-2 py-lg-0 "  
          >
          <MainNav data={categories}/>
          <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-2">
                        <a href="javascript:void(0);" className="nav-link ps-2 cursor-pointer">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li className="nav-item mx-2">
                        <a href="javascript:void(0);" className="nav-link ps-2 cursor-pointer">
                            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li className="nav-item ms-2">
                        <a href="javascript:void(0);" className="btn bg-gradient-dark mb-0">
                            My Account
                        </a>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
