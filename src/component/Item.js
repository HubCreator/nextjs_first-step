const Item = ({ data }) => {
  return (
    <div className="single-item-page">
      {/* <div className="single-item">
        <div className="single-item-name">{data.name}</div>
        <div
          className="single-item-img"
          style={{ backgroundImage: `url(${data.image_link})` }}
        />
        <div className="single-item-price">{data.price} $</div>
        <div className="single-item-description">{data.description}</div>
      </div> */}
      <div className="sections">
        <div className="info-section">
          <div
            className="info-section__main-note"
            style={{ backgroundImage: `url(${data.image_link})` }}
          />
          <div className="info-section__auth">
            <div className="info-section__auth__name">Leo</div>
            <div className="info-section__auth__createdAt">2020.7.22</div>
          </div>
          <div className="info-section__description-container">
            <div className="info-section__description">
              {" "}
              안녕하세요. This area is made for description
            </div>
          </div>
        </div>

        <div className="workspace-section"></div>
      </div>
    </div>
  );
};

export default Item;
