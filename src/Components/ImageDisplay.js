import React, { useState } from 'react'
import "../Css/ImageDisplay.css"

function ImageDisplay() {
    const [imageToConvert, setImageToConvert] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    function fileChangedHandler(event){
        setImageToConvert(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

  return (
    <div className='ImageDisplay'>
    {/* <header>ImageDisplay</header> */}
    <div className='ImageUploader'>
    <input type="file" accept="image/*" name="uploadedImage" id="uploadedImage" onChange={fileChangedHandler}/>

    {imageToConvert!=null && <div className='ImagePreview'>
        <img src={previewImage} alt="to convert"/>
    </div>}

    {imageToConvert!=null && <div className='ConvertBtn'>
        Convert <span id='conv-arrow'>&#x21EA;</span>
    </div>}

    </div>

    <div className='ImageConvertor'>
        
    </div>

    </div>
  )
}

export default ImageDisplay