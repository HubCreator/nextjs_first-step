const Item = ({ data }) => {
  return (
    <div className="single-item-page">
      <div className="sections">
        <div className="info-section">
          <div
            className="info-section__main-img"
            style={{ backgroundImage: `url(${data.image_link})` }}
          />

          <div className="info-section__auth">
            <div className="info-section__auth__content">
              <div className="info-section__auth__content__name">Leo</div>
              <div className="info-section__auth__content__createdAt">
                2020.7.22
              </div>
            </div>
          </div>

          <div className="info-section__description">
            안녕하세요. This area is made for description
          </div>
        </div>

        <div className="workspace-section">
          <div className="workspace-section__title"></div>
          <div className="workspace-section__content">
            <div className="workspace-section__number"></div>
            <div className="workspace-section__img"></div>
            <div className="workspace-section__play-controller">
              <div className="play-controller__playBtn"></div>
              <div className="play-controller__playBar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
