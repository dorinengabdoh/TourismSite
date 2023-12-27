import './galleryPhotos.css';

import galleryImg from '../galleryImages/galleryImages.json';

const renderGalleryPhotos = () => {

  return (
    <div className="galleryBody__photos">
      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[0].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[1].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[2].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[3].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[4].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[5].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[6].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[7].src})` }}
            />
          </div>
        </div>
      </div>

      {/* Second row */}

      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[8].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[9].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[10].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[11].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[12].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[13].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[14].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[15].src})` }}
            />
          </div>
        </div>
      </div>

      {/* Third row */}

      <div className="galleryPhotos__rowCard">
        <div className="rowCard__mainCol1">
          <div className="mainCol1__subCol1">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[16].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[17].src})` }}
            />
          </div>

          <div
            className="mainCol1__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[18].src})` }}
          />
        </div>

        <div className="rowCard__mainCol2">
          <div
            className="mainCol2__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[19].src})` }}
          />
          <div
            className="mainCol2__subCol2"
            style={{ backgroundImage: `URL(${galleryImg[20].src})` }}
          />
        </div>

        <div className="rowCard__mainCol3">
          <div
            className="mainCol3__subCol1"
            style={{ backgroundImage: `URL(${galleryImg[21].src})` }}
          />
          <div className="mainCol3__subCol2">
            <div
              className="subOfSub1"
              style={{ backgroundImage: `URL(${galleryImg[22].src})` }}
            />
            <div
              className="subOfSub2"
              style={{ backgroundImage: `URL(${galleryImg[23].src})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function GalleryPhotos() {
  return <div className="galleryPhotos">{renderGalleryPhotos()}</div>;
}

export default GalleryPhotos;