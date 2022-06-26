import React from "react"
import {useEffect} from "react"

function DoctorLogin(){


    function handleCallbackResponse(response){
        console.log("jwt"+response.credential);
    }
  
    /*   useEffect(() => {
   const google = window.google;
           
            google.accounts.id.initialize({
            client_id: "668440536390-lui3mcronjd069sofk9ut8fh4i5kr3m9.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        );
           
    },[]) */
 


    return (
        <div className="google-signin">
            <div id="signInDiv"> </div>
        </div>   
    )
}
export default DoctorLogin