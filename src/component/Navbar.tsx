import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GiMusicalScore } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavbarData } from "./NavbarData";
import { Button } from "./Button";

interface navbarData {
  title: string;
  path: string;
  icon: string | null | object;
  cName: string;
}

interface button {
  buttonStyle: string;
  buttonSize: string;
  buttonColor: string;
  children: string;
}

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrollStatus, setScrollStatus] = useState(false);
  const router = useRouter();

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => {
    setClick(!click);
    console.log("clicked");
  };
  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    // const element = document.querySelector(".item");
    // if (click === true) {
    //   console.log(element);
    //   element.classList.remove("item");
    //   console.log(element);
    // } ////////////////////////////////hover 떼는 방법?!!?
    // else {
    //   element.classList.add("itme");
    // }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [click]);

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
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--medium"
                    buttonColor={null}
                    type={null}
                    onClick={null}
                  >
                    SIGN UP1
                  </Button>
                </div>
              ) : (
                <div className="btn-link" onClick={closeMobileMenu}>
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    buttonColor={null}
                    type={null}
                    onClick={null}
                  >
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
