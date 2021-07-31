import Link from "next/link";
// import gsap from "gsap";
// import { Power3 } from "gsap/gsap-core";

export default function ItemList({ list }) {
  // gsap.registerPlugin(Flip);
  // const state = Flip.getState(".item");
  // const element = document.querySelector(".item");
  // element.classList.toggle("full-screen");

  // Flip.from(state, {
  //   duration: 1,
  //   ease: "power1.inOut",
  //   absolute: true,
  //   onComplete: myFunc,
  // });

  return (
    <div className="item-list-background">
      <div className="item-list">
        {list.map((item, index) => {
          return (
            <>
              <Link href={`/detail/${item.id}`}>
                <div className="item" key={index}>
                  <div className="item-name">{item.name}</div>
                  <div
                    className="item-img"
                    style={{ backgroundImage: `url(${item.image_link})` }}
                  />
                  <div className="item-price">{item.price} $</div>
                  <div className="item-description">{item.description}</div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
