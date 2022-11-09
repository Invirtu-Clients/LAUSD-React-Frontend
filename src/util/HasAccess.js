import Storage from "./Storage";

const HasAccess = {
    
    isLoggedIn :() => {

        if(Storage.getAuthToken()){
            return true;
        }

        return false;
    }
}

export default HasAccess;