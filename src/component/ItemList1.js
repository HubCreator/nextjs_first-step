import Link from "next/link";

export default function ItemList({ list }) {
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
