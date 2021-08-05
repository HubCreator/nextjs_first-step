import Link from "next/link";

export default function ItemList({ list }) {
  const onMouseEnter = (event) => {
    console.log(event);
  };

  const onMouseOut = (event) => {
    console.log(event);
  };
  return (
    <div className="item-list-background">
      <div className="item-list">
        {list.map((item, index) => {
          return (
            <>
              <Link href={`/detail/${item.id}`}>
                {/* 단일 아이템 */}
                <div
                  className="item"
                  key={index}
                  onMouseEnter={onMouseEnter}
                  onMouseOut={onMouseOut}
                >
                  <span></span>
                  <img src={item.image_link} alt="img" className="item__img" />

                  <div className="item__content">
                    <div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">{item.price} $</div>
                      <div className="item-description">{item.description}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
