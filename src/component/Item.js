const Item = ({ data }) => {
  return (
    <div className="single-item-page">
      <div className="single-item">
        <div className="single-item-name">{data.name}</div>
        <div
          className="single-item-img"
          style={{ backgroundImage: `url(${data.image_link})` }}
        />
        <div className="single-item-price">{data.price} $</div>
        <div className="single-item-description">{data.description}</div>
      </div>
    </div>
  );
};

export default Item;
