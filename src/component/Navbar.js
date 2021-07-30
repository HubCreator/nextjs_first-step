import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const router = useRouter();

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
            <div className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              LAVISH
            </div>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {NavbarData.map((item, index) => {
                return (
                  <li key={index} onClick={() => router.push(`${item.path}`)}>
                    <div className={item.cName}>{item.title}</div>
                  </li>
                );
              })}

              <li className="nav-btn">
                {button ? (
                  <div className="btn-link">
                    <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                      SIGN UP1
                    </Button>
                  </div>
                ) : (
                  <div className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP2
                    </Button>
                  </div>
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
