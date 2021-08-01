import { AiOutlinePlayCircle } from "react-icons/ai";

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
          <div className="workspace-section__title">Hello every one</div>

          <div className="workspace-section__sigleRowOfNote">
            <div className="sigleRowOfNote__content">
              <div className="content__number">#1</div>
              <div
                className="content__img"
                style={{ backgroundImage: `url(${data.image_link})` }}
              ></div>

              <div className="content__play-controller">
                <AiOutlinePlayCircle className="play-controller__playBtn" />
                <div className="play-controller__playBar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
