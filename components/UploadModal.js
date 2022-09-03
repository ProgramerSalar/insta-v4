
// import React from "react";
// import { modalState } from "../atom/modalAtom";
// import {useRecoilState} from "recoil";
// import Model from "react-modal"



// export default function UploadModal(){
//     const [open , setOpen] = useRecoilState(modalState);

//     return(
//         <div className="">
            
//             {open &&
//             (
//                 <Model
//                 className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-sm "
//                 isOpen={open}
//                 onRequestClose={()=>setOpen(false)}
                
//                 >
//                     <div className="flex flex-col justify-center items-center h-[100%]">
//                     <h1>Model</h1>
//                     </div>
                    
//                 </Model>
//             )
            
//             }
            
//         </div>
//     )
// }


import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && <h1>The Modal is open</h1>}
      {open && (
        <Modal
          className="max-w-lg w-[90%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          isOpen={open}
          onRequestClose={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
}