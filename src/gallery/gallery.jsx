import './gallery.css';
import Hero from '../components/hero/Hero';
import GalleryPhotos from './galleryPhotos/GalleryPhotos';
import Button from '../components/boutton/Boutton';

function Gallery() {
  return (
    <>
      <Hero text1="Gallery" text2="Home" spanText="Gallery" />

      <div className="galleryBody">
        <div className="gallery__btn">
          <Button text="Open Instagram" color="#c7923e" />
        </div>
        <GalleryPhotos />
      </div>
    </>
  );
}

export default Gallery;