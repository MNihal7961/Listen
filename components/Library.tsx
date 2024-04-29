"use client"

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {

    const authModal=useAuthModal()
    const{user}=useUser()
    const onClick=()=>{

    }
    return ( <div className="flex flex-col">
        <div className="flex items-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-2">
                <TbPlaylist className="text-neutral-400" size={26}/>
                <p className="text-neutral-400 font-medium text-md">My Library</p>
            </div>
            <AiOutlinePlus onClick={onClick} className="text-neutral-400 cursor-pointer hover:text-white transition" size={20}/>
        </div>
        <div className="flex flex-col gap-y-4 mt-4 px-4">
            List of tracks!
        </div>
    </div> );
}
 
export default Library;