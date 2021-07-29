import { useEffect, useState } from "react";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    });
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> */}
            <div className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              LAVISH
            </div>

            {/* </Link> */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {NavbarData.map((item, index) => {
                return (
                  <li key={index}>
                    {/* <Link to={item.path} className={item.cName}> */}
                    <div className={item.cName}>{item.title}</div>
                    {/* </Link> */}
                  </li>
                );
              })}

              <li className="nav-btn">
                {button ? (
                  //   <Link to="/sign-up" className="btn-link">
                  <div className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                      SIGN UP1
                    </Button>
                  </div>
                ) : (
                  //   </Link>
                  //   <Link
                  //     to="/sign-up"
                  //     className="btn-link"
                  //     onClick={closeMobileMenu}
                  //   >

                  <div className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP2
                    </Button>
                  </div>

                  //   </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
