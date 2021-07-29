export default function ItemList({ list }) {
  return (
    <div className="item-list">
      {console.log(list[0])}
      {list.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item-name">{item.name}</div>
            <img src={item.image_link} className="item-img" />
            <div className="item-description">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
}
