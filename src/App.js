import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    image_url:
      "https://bizweb.dktcdn.net/100/438/408/files/meme-meo-cute-yody-vn-56.jpg?v=1690276162678",
    caption: "Ơ mây ring. Gút chóp meo!",
  },
  {
    image_url:
      "https://mekoong.com/wp-content/uploads/2022/10/Hinh-anh-con-meo-chien-binh.jpg",
    caption: "Chiến meo",
  },
  {
    image_url:
      "https://antimatter.vn/wp-content/uploads/2022/11/hinh-nen-meo-cute-nhin-cung-qua-di.jpg",
    caption: "Meo tiểu thư",
  },
  {
    image_url:
      "https://i.pinimg.com/236x/88/0a/28/880a28778977a18396e15644e4674a2f.jpg",
    caption: "Meo ngông",
  },
  {
    image_url:
      "https://img5.thuthuatphanmem.vn/uploads/2021/12/08/mlem-mlem_093629125.jpg",
    caption: "Meo thèm thuồng",
  },
  {
    image_url:
      "https://images.kienthuc.net.vn/zoom/800/uploaded/hongngan/2018_06_01/b/1_gcxe.jpg",
    caption: "Hầu meo",
  },
  {
    image_url:
      "https://seotrends.com.vn/wp-content/uploads/2023/05/avatar-anh-meo-bua-buon-cuoi.jpg",
    caption: "Sad thủ meo",
  },
  {
    image_url:
      "https://seotrends.com.vn/wp-content/uploads/2023/05/anh-meo-ff-deo-kinh.jpg",
    caption: "Rich Meo",
  },
  {
    image_url:
      "https://tophinhanh.net/wp-content/uploads/2023/12/meme-meo-hai-11.jpg",
    caption: "Sư Meo",
  },
];

function App() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    if (isOpen) {
      setZoom(0.9);
      setTimeout(() => {
        setZoom(1);
        if (key === null) setKey(Date.now());
      }, 100);
    }
  }, [photoIndex, isOpen]);

  return (
    <div>
      {images.map((img, index) => (
        <img
          key={img.caption}
          src={img.image_url}
          alt={img.caption}
          onClick={() => {
            setPhotoIndex(index);
            setIsOpen(true);
          }}
          style={{
            width: 'auto',
            height: '100px',
            objectFit: 'cover', 
            objectPosition: 'center'
          }}
        />
      ))}

      {isOpen && (
        <Lightbox
          key={key}
          mainSrc={images[photoIndex].image_url}
          nextSrc={images[(photoIndex + 1) % images.length].image_url}
          prevSrc={
            images[(photoIndex + images.length - 1) % images.length].image_url
          }
          imageCaption={images[photoIndex].caption}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default App;
