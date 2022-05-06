import React, {useState, useRef,useContext} from 'react'
import AsciiEffect from '../Functions/AsciiEffect';
import "../Css/ImageFilter.css"
import Obj1 from "../Assets/FilterPage/1.png"
import Obj2 from "../Assets/FilterPage/2.png"
import Obj3 from "../Assets/FilterPage/3.png"
import Obj4 from "../Assets/FilterPage/4.png"
import Convert from "../Assets/FilterPage/Convert.png"
import AuthUserContext from '../context/sessions';
import { AppwriteContext } from './Appwrite';
import { useNavigate } from 'react-router-dom';

function ImageFilter() {
    const [imageToConvert, setImageToConvert] = useState(null);
    const [displayImage, setDisplayImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [binaryUrl, setBinaryUrl] = useState("");
    const [imageName, setImageName] = useState("pigshell");
    
    const {authUser} = useContext(AuthUserContext);
    const appwrite = useContext(AppwriteContext);

    const uploadRef = useRef(null);
    const canvRef = useRef(null);
    const uploaderRef = useRef(null);

    const navigator = useNavigate();

    function handleCustomUpload(){
        uploaderRef.current.click();
    }

    function fileChangedHandler(event){
        const currImage = new Image();
        const currName = event.target.files[0].name;
        const lastDot = currName.lastIndexOf(".");
        setImageName(currName.substring(0,lastDot)+"-pigshell"+currName.substring(lastDot))
        currImage.src = URL.createObjectURL(event.target.files[0]);
        setDisplayImage(URL.createObjectURL(event.target.files[0]))
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
    //   console.log(imgUrl)
      setPreviewImage(imgUrl)
      setBinaryUrl(imgUrl);
    }

    const downloadImage = ()=>{
        const download = document.createElement("a");
        download.href = previewImage;
        download.download = imageName;
        download.click();
        setPreviewImage(null);
    }

    const uploadImage = async() =>{
        if(authUser==null) return navigator("/login");
        
        const blob = await (await fetch(binaryUrl)).blob(); 
        console.log(blob)
        const file = new File([blob], `pigshell${new Date().getTime()}.png`, {type:"image/png", lastModified:new Date()});

        appwrite.uploadImage(file).then((res)=>{
            console.log("image uploaded successfully", res)
        }).catch((error) =>{
            console.log("Error Uploading Image", error);
        })
    }
  return (
    <div className='ImageFilter'>
        <div className='ImageUploader'>
        {imageToConvert==null && <div className='ImageUploader-head'>
            Ready to see the <span className="highlight-text">{`<magic?/>`}</span>
        </div>}
        <div className='ImageUpload-btn' onClick={()=>{
            handleCustomUpload();
        }}>
            Upload Image
        </div>
        <input type="file" ref={uploaderRef} accept="image/*" name="uploadImage" id="uploadImage" onChange={fileChangedHandler}/>

        {imageToConvert!=null && <div className='ImagePreview'>
            <img src={displayImage} alt="to convert" ref={uploadRef} />
        </div>}

        {imageToConvert!=null && <div className='Convert-btn' onClick={()=>{ loadImageToCanvas();}}>
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
                {previewImage==null ?<img src={Convert} className="ConvertPreview" alt="conversion example"/> : <img src={previewImage} className="ConvertPreview FilteredPreview" alt="conversion example"/>}
                {previewImage!=null && 
                <div className='PreviewBtns'>
                    <div className='downloadImg-btn' onClick={downloadImage}>
                        Download
                    </div>
                    <div className='uploadImg-btn' onClick={uploadImage}>
                        Upload
                    </div>
                </div>}
            </div>
        </div>
        <div className='ConvertedImage'>
        <canvas height={100} width={200} ref={canvRef} id="canvas"/>
      </div>
    </div>
  )
}

export default ImageFilter