import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ImagePreview = ({ image }) => {
  console.log("this is image", image);
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
      <a href={process.env.REACT_APP_API_URL + image}>Image preview</a>
    </LightGallery>
  );
};

export default ImagePreview;
