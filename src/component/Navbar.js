import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdFingerprint } from "react-icons/md";
import { GiMusicalScore } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";
import { Button } from "./Button";
import { Image } from "next/image";
import logoImage from "../../public/images/img2.jpeg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrollStatus, setScrollStatus] = useState(false);
  const router = useRouter();

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={scrollStatus ? "navbar glass" : "navbar"}>
          <div className="navbar-container container">
            <div className="navbar-logo" onClick={closeMobileMenu}>
              <GiMusicalScore className="navbar-icon" />
              Music Player
            </div>
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
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
