import React, {  useRef, useState } from 'react'
import AsciiEffect from "../Functions/AsciiEffect"
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
    let effect;
    const loadImageToCanvas = ()=>{
      const canvas = canvRef.current;
      const ctx = canvas.getContext('2d');
      const currImage = new Image();
      currImage.src = previewImage;

      canvas.height = currImage.height;
      canvas.width = currImage.width;

      effect = new AsciiEffect(ctx,canvas.width, canvas.height, currImage);
      ctx.font = '7px Fira Code'
      effect.draw(7,"#ffffff");
      const imgUrl = canvas.toDataURL("image/png");
      const imgName = "pigshell";
      const download = document.createElement("a");
      download.href = imgUrl;
      download.download = imgName;
      download.click();
    }

  return (
    <div className='ImageDisplay'>
    {/* <header>ImageDisplay</header> */}
    <div className='ImageUploader'>
    <input type="file" accept="image/*" name="uploadImage" id="uploadImage" onChange={fileChangedHandler}/>

    {imageToConvert!=null && <div className='ImagePreview'>
        <img src={previewImage} alt="to convert" ref={uploadRef} />
    </div>}

    {imageToConvert!=null && <div className='ConvertBtn' onClick={()=>{ loadImageToCanvas();}}>
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