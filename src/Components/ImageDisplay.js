import React, { useEffect, useRef, useState } from 'react'
import "../Css/ImageDisplay.css"

function ImageDisplay() {
    const [imageToConvert, setImageToConvert] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);

    const uploadRef = useRef(null);
    const canvRef = useRef(null);

    function fileChangedHandler(event){
        setImageToConvert(new Image(event.target.files[0]));
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

    const draw = (ctx, image) => {
      
    }
    const loadImageToCanvas = ()=>{
      const canvas = canvRef.current;
      const uploadedImg = uploadRef.current;
      const ctx = canvas.getContext('2d');
      const currImage = new Image();
      currImage.src = previewImage;

      canvas.height = uploadedImg.height + 1;
      canvas.width = uploadedImg.width + 1;
      
      ctx.drawImage(currImage,0,0, currImage.width, currImage.height,0,0, canvas.width*0.95, canvas.height*0.95);
    }

  return (
    <div className='ImageDisplay'>
    {/* <header>ImageDisplay</header> */}
    <div className='ImageUploader'>
    <input type="file" accept="image/*" name="uploadedImage" id="uploadedImage" onChange={fileChangedHandler}/>

    {imageToConvert!=null && <div className='ImagePreview'>
        <img src={previewImage} alt="to convert" ref={uploadRef} onLoad={()=>{setImageLoaded(true); loadImageToCanvas();}} onChange={()=>{loadImageToCanvas()}}/>
    </div>}

    {imageToConvert!=null && <div className='ConvertBtn'>
        Convert <span id='conv-arrow'>&#x21EA;</span>
    </div>}

    </div>

    <div className='ImageConvertor'>
      <div className='ConvertedImage'>
        <canvas ref={canvRef} id="canvas"/>
      </div>
    </div>
    </div>
  )
}

export default ImageDisplay