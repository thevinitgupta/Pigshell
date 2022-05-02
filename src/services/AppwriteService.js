import { Appwrite } from "appwrite";

const config = {
    projectId : process.env.REACT_APP_APPWRITE_PROJECT,
    endpoint :  process.env.REACT_APP_APPWRITE_ENDPOINT
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
}

export default AppwriteService;