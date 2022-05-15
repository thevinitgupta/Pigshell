import { Appwrite } from "appwrite";

const config = {
    projectId : process.env.REACT_APP_APPWRITE_PROJECT,
    endpoint :  process.env.REACT_APP_APPWRITE_ENDPOINT,
    bucketId : process.env.REACT_APP_APPWRITE_BUCKET
};


const appwrite = new Appwrite();

class AppwriteService {
    constructor() {
        appwrite.setEndpoint(config.endpoint).setProject(config.projectId);

        this.account = appwrite.account;
    }

    createAccount = (email, name, password) =>{
        return this.account.create("unique()",email, password,name)
    }

    loginUser = (email, password) =>{
        return this.account.createSession(email,password);
    }

    logoutUser = () =>{
        return this.account.deleteSession('current');
    }

    getCurrentUser = () =>{
        return this.account.get();
    }

    uploadImage = (image) =>{
        console.log(typeof image)
        const dateString = new Date().getTime() + "";
        const fileId = "pighshell-"+dateString;
        return appwrite.storage.createFile(`6280a33e94bee3e36043`,fileId,image);
    }

    getImages = () =>{
        return appwrite.storage.listFiles('6280a33e94bee3e36043');
    }

    loadImage = ( imageId) =>{
        return appwrite.storage.getFileView('6280a33e94bee3e36043',imageId);
    }

    downloadImage = (imageId) =>{
        return appwrite.storage.getFileDownload('6280a33e94bee3e36043', imageId)
    }

    getFile = (imageId) =>{
        return appwrite.storage.getFile('6280a33e94bee3e36043',imageId)
    }
    
    deleteImage = (imageId) =>{
        return appwrite.storage.deleteFile('6280a33e94bee3e36043', imageId);
    }
}

export default AppwriteService;