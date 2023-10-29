import { toast } from "react-hot-toast";
import {apiconnector} from "../apiConnector"

import {setLoading} from "../../slices/userSlice"

export function registeruser(fullname,rollno,email,phone,cemail){
    return async(dispatch)=>{
        const toastID = toast.loading("Registering...")
        dispatch(setLoading(true))
        try{
            const response = await apiconnector("POST",
            "https://omega-iste-backend.vercel.app/api/v1/register",
            {
                fullname,rollno,email,phone,cemail
            }
            )
            console.log("printing status",response.status)
            toast.success("Registered Successfully")
            
        }catch(e){
            console.log("loginerror",e)
            if(e.response.status==405){
                toast.error("User Already Registered");
                toast.dismiss(toastID)
                return;
            }
            if(e.response.status==403){
                toast.error("Fill in all the Details");
                toast.dismiss(toastID)
                return;
            }
            toast.dismiss(toastID)

            // toast.error("Couldn't Register")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastID)
    }

}
