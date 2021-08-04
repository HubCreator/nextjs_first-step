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
        <div className="service-page__leftBox">
          <div className="service-page__skew1">
            <h2 className="layer">Music Player</h2>
          </div>
        </div>

        <div className="service-page__rightBox">
          <div className="service-page__skew2">
            <h2 className="layer">Music Player</h2>
          </div>
        </div>

        <div className="service-page__floor">
          <div className="service-page__floor__instruments">
            <img src="./images/piano.png" className="piano" alt="piano" />
            <img src="./images/guitar.png" className="guitar" alt="guitar" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default servicePage;
