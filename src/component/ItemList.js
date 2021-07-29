export default function ItemList({ list }) {
  return (
    <div className="item-list">
      {console.log(list[0])}
      {list.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-name">{item.name}</div>
            <img className="item-img" src={item.image_link} />
            <div className="item-price">{item.price} $</div>
            <div className="item-description">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
}
