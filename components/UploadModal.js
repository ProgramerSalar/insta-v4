
import React from "react";
import { modalState } from "../atom/modalAtom";
import {useRecoilState} from "recoil";


export default function UploadModal(){
    const [open , setOpen] = useRecoilState(modalState);

    return(
        <div className="">
            <h1>uploadModel </h1>
            {open && <h1>The Model is open</h1>}
            
        </div>
    )
}