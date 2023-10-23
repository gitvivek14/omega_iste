import { toast } from "react-hot-toast";
import {apiconnector} from "../apiConnector"

import {setLoading,setUser} from "../../slices/userSlice"

export function registeruser(fullname,rollno,email){
    return async(dispatch)=>{
        const toastID = toast.loading("Registering...")
        dispatch(setLoading(true))
        try{
            const response = await apiconnector("POST",
            "http://localhost:4000/api/v1/register",
            {
                fullname,rollno,email
            }
            )
            console.log("login api",response.data);
            
        }catch(e){
            console.log("loginerror",e)
            toast.error("Couldn't Register")
        }
        dispatch(setLoading(false))
            toast.dismiss(toastID)
    }

}
