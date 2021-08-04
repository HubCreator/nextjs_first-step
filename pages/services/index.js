import { useEffect } from "react";

const servicePage = () => {
  const parallaxText = (event) => {
    console.log(event.pageYOffset);
    const layerList = document.querySelectorAll(".layer");

    layerList.forEach((layer) => {
      //   let x = window.innerWidth - event.pageX;
      let x = window.scrollY;
      layer.style.transform = `translateX(${x}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxText);

    return () => {
      window.removeEventListener("scroll", parallaxText);
    };
  }, []);

  return (
    <div className="service-container">
      <section className="service-page">
        <div className="service-page__skew1">
          <h2 className="layer">Corner Text</h2>
        </div>
        <div className="service-page__textBox">
          <div className="service-page__skew2">
            <h2 className="layer">Corner Text</h2>
          </div>
        </div>

        <div className="service-page__floor">
          <h2>Hello everyone</h2>
          <img src="./images/piano.png" className="piano" alt="piano" />
          <img src="./images/guitar.png" className="guitar" alt="guitar" />
        </div>
      </section>
    </div>
  );
};

export default servicePage;
