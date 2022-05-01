import { Appwrite } from "appwrite";

const config = {
    projectId : process.env.REACT_APP_APPWRITE_PROJECT,
    endpoint :  process.env.REACT_APP_APPWRITE_ENDPOINT
};


const appwrite = new Appwrite();

class AppwriteService {
    constructor() {
        appwrite.setEndpoint(config.endpoint).setProject(config.projectId);
    }
}

export default AppwriteService;