import React, {useState, useRef} from 'react'
import AsciiEffect from '../Functions/AsciiEffect';
import "../Css/ImageFilter.css"
import Obj1 from "../Assets/FilterPage/1.png"
import Obj2 from "../Assets/FilterPage/2.png"
import Obj3 from "../Assets/FilterPage/3.png"
import Obj4 from "../Assets/FilterPage/4.png"
import Convert from "../Assets/FilterPage/Convert.png"

function ImageFilter() {
    const [imageToConvert, setImageToConvert] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const uploadRef = useRef(null);
    const canvRef = useRef(null);
    const uploaderRef = useRef(null);

    function handleCustomUpload(){
        uploaderRef.current.click();
    }

    function fileChangedHandler(event){
        const currImage = new Image();
        currImage.src = URL.createObjectURL(event.target.files[0]);
        setImageToConvert(currImage);
    }
    let effect;
    const loadImageToCanvas = ()=>{
      const canvas = canvRef.current;
      const ctx = canvas.getContext('2d');

      canvas.height = imageToConvert.height;
      canvas.width = imageToConvert.width;

      effect = new AsciiEffect(ctx,canvas.width, canvas.height, imageToConvert);
      ctx.font = '7px Fira Code'
      effect.draw(7,"#ffffff");
      const imgUrl = canvas.toDataURL("image/png");
      setPreviewImage(imgUrl)
      const imgName = "pigshell";
      const download = document.createElement("a");
      download.href = imgUrl;
      download.download = imgName;
      download.click();
    }
  return (
    <div className='ImageFilter'>
        <div className='ImageUploader'>
        <div className='ImageUploader-head'>
            Ready to see the <span className="highlight-text">{`<magic?/>`}</span>
        </div>
        <div className='ImageUpload-btn' onClick={()=>{
            handleCustomUpload();
        }}>
            Upload Image
        </div>
        <input type="file" ref={uploaderRef} accept="image/*" name="uploadImage" id="uploadImage" onChange={fileChangedHandler}/>

        {imageToConvert!=null && <div className='ImagePreview'>
            <img src={previewImage} alt="to convert" ref={uploadRef} />
        </div>}

        {imageToConvert!=null && <div className='ConvertBtn' onClick={()=>{ loadImageToCanvas();}}>
            Convert <span id='conv-arrow'>&#x21EA;</span>
        </div>}
        </div>
        <div className='PreviewImage'>
            <div className='PreviewBackground'>
                <img className='Preview-BgImg Bg-Img-1' src={Obj1} alt="object"/>
                <img className='Preview-BgImg Bg-Img-2' src={Obj2} alt="object"/>
                <img className='Preview-BgImg Bg-Img-3' src={Obj3} alt="object"/>
                <img className='Preview-BgImg Bg-Img-4' src={Obj4} alt="object"/>
            </div>
            <div className='PreviewGlass'>
                {previewImage==null ?<img src={Convert} className="ConvertPreview" alt="conversion example"/> : <img src={previewImage} className="ConvertPreview" alt="conversion example"/>}
            </div>
        </div>
        <div className='ConvertedImage'>
        <canvas height={100} width={200} ref={canvRef} id="canvas"/>
      </div>
    </div>
  )
}

export default ImageFilter