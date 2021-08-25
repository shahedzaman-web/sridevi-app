import * as SecureStore from 'expo-secure-store';

const storeAuthToken= async (authToken)=>{
    try {
        await SecureStore.setItemAsync('authToken',authToken);
    } catch (error) {
        console.log(`Error storing the auth token`,error);
    }
}

const getAuthToken = async ()=>{
    try{
        return await SecureStore.getItemAsync('authToken');
    } catch (error){
        console.log("Error geting the auth token",error);
    }
}

const removeAuthToken = async ()=>{
    try{
        await SecureStore.deleteItemAsync('authToken');
    } catch (error){
        console.log("Error removing the auth token",error);
    } 
}

export default {storeAuthToken,getAuthToken,removeAuthToken}