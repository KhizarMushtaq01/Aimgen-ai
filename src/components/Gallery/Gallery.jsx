import React from "react";
import "./Gallery.css";
const Gallery = () => {
  return (
    <>
    <div className="gallery">
      <div className="combine2">
      <div className="efficient">
      <div>Fast and <span className="gradient-gallery">Efficient</span></div>
      <div>Images Generation</div>
      </div>

      <div className="input3">
        
        <input placeholder="Example Prompt" type="text" className="input4" />
        <button className="generate-gallery">Generate </button>
      </div>
      </div>
      
      <div className="galleryimgs">
        <div>
        <div className="img1"><img src="" alt="" /></div>
        <div className="img2"><img src="" alt="" /></div>
        </div>
        
        <div>
        <div className="img3"><img src="" alt="" /></div>
        <div className="img4"><img src="" alt="" /></div>
        </div>

        <div>
        <div className="img5"><img src="" alt="" /></div>
        <div className="img6"><img src="" alt="" /></div>
        </div>

      </div>
      </div>
    </>
  );
};

export default Gallery;
