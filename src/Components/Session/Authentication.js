import React, {useCallback, useContext, useEffect, useState} from "react";
import AuthUserContext from "../../context/sessions"
import {AppwriteContext} from "../../Components/Appwrite";

const Authentication = (Component) => 
    function WithAuthentication(props) {
        const [authUser, setAuthUser] = useState(null);

        const appwrite = useContext(AppwriteContext);

        const getCurrentUser = useCallback(() => {
            appwrite.getCurrentUser().then((user) => {
                setAuthUser(user);
            }).catch(() =>{
                setAuthUser(null);
            });
        }, [appwrite]);

        useEffect(() =>{
            getCurrentUser();
        },[getCurrentUser]);

        return (
            <AuthUserContext.Provider value={{authUser, getCurrentUser}}>
                <Component {...props} />
            </AuthUserContext.Provider>
        );
    };

export default Authentication;