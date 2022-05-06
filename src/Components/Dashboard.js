import React, {useContext, useState,useEffect} from 'react'
import "../Css/Dashboard.css"
import AuthUserContext from '../context/sessions'
import { useNavigate } from 'react-router-dom';
import Loader from "../Assets/Loader.svg"
import Photu from "../Assets/camera.png"
import Download from "../Assets/Icons/download.svg"
import Delete from "../Assets/Icons/trash.svg"
import { AppwriteContext } from './Appwrite';

function Dashboard() {
    const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userImages, setUserImages] = useState([]);

    const appwrite = useContext(AppwriteContext);
    const {authUser} = useContext(AuthUserContext);
    const navigate = useNavigate();

    let images = [];

    const getImageToDisplay =  (currImages) =>{
        console.log(currImages)
        return new Promise((resolve,rejet)=>{
            if(currImages.length>=1){
                currImages.forEach((imageData, index) => {
                    images.push(appwrite.loadImage(imageData.$id));
                })
                console.log(images);
                setUserImages(images);
                resolve();
            }
            else rejet();
        })
    }

    const downloadImage = (index) =>{
        const imageId = userImages[index].pathname.split("/")[6];
        console.log(userImages[index].pathname.split("/")[6])
        const downloadLink = appwrite.downloadImage(imageId);
        console.log(downloadLink)
        // const dlink = document.createElement("a");
        // dlink.href = downloadLink.href;
        // dlink.download = `${authUser.name}-${imageId}.png`
        // dlink.click();
    }

    useEffect(() => {   
      appwrite.getImages().then((data)=>{
        setLoading(true);
        setTimeout( ()=>{
            setLoading(false);
            console.log(data.files);
            setUserImages(data.files);
            console.log(loaded);
            getImageToDisplay(data.files).then(()=>{
                setLoaded(true);
                console.log(loaded)
            }).catch(()=>{
                console.log("Images Not loaded")
            });
          },4000)
      }).catch((error) =>{
          console.log(error);
      })
    }, [])
    

  return (
    <div className='Dashboard'>
        {!authUser && 
            <div className='UnAuth' onClick={()=>{
                navigate("/login")
            }}>
                <p><span className='highlight-text'>Login</span> to access your photos from anywhere!</p>
            </div>
        }
        {authUser && 
            <div className='AuthUser'>
                <div className='AuthUser-head'>
                    All Uploads
                </div>
                <div className='UserImages'>
                    {<div className='loader' style={!loaded && loading ? {opacity : 1} : {opacity : 0}}>
                        <img src={Loader} alt='Loading...'/>
                    </div>}
                    {userImages.length>0 && userImages.map((image,index)=>{
                        return <div key={index+Math.random()*10} className='UserImage'>
                            <img src={image.href} alt="Gallery"/>
                            <div className='Image-btns'>
                                <div className='Image-btn download' onClick={()=>{
                                    downloadImage(index)
                                }}><img src={Download} alt="download"/></div>
                                <div className='Image-btn delete'><img src={Delete} alt="delete"/></div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        }
    </div>
  )
}

export default Dashboard