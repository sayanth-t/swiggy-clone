import { useEffect, useState } from "react";

const useGetOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true) ;

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false) ;
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true) ;
        })
    }, [] ) ;

    return onlineStatus ;
} 

export default useGetOnlineStatus ;