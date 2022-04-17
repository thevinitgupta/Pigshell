import React, {  useRef, useState } from 'react'
import "../Css/ImageDisplay.css"

function ImageDisplay() {
    const [imageToConvert, setImageToConvert] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const uploadRef = useRef(null);
    const canvRef = useRef(null);

    function fileChangedHandler(event){
        setImageToConvert(new Image(event.target.files[0]));
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

    const loadImageToCanvas = ()=>{
      const canvas = canvRef.current;
      const uploadedImg = uploadRef.current;
      const ctx = canvas.getContext('2d');
      const currImage = new Image();
      currImage.src = previewImage;

      canvas.height = uploadedImg.height;
      canvas.width = uploadedImg.width;
      const scale = currImage.height / currImage.width;

      const display = {
        height : uploadedImg.height,
        width : uploadedImg.width,
      }
      if (display.width > display.height) {
        display.height = display.height*scale;
      }
      else {
        display.width = display.width*scale;
      }

      
      ctx.drawImage(currImage,0,0, currImage.width, currImage.height,(canvas.width-display.width)/2,(canvas.height-display.height)/2, display.width, display.height);
    }

  return (
    <div className='ImageDisplay'>
    {/* <header>ImageDisplay</header> */}
    <div className='ImageUploader'>
    <input type="file" accept="image/*" name="uploadedImage" id="uploadedImage" onChange={fileChangedHandler}/>

    {imageToConvert!=null && <div className='ImagePreview'>
        <img src={previewImage} alt="to convert" ref={uploadRef} onLoad={()=>{ loadImageToCanvas();}} onChange={()=>{loadImageToCanvas()}}/>
    </div>}

    {imageToConvert!=null && <div className='ConvertBtn'>
        Convert <span id='conv-arrow'>&#x21EA;</span>
    </div>}

    </div>

    <div className='ImageConvertor'>
      <div className='ConvertedImage'>
        <canvas height={100} width={200} ref={canvRef} id="canvas"/>
      </div>
    </div>
    </div>
  )
}

export default ImageDisplay