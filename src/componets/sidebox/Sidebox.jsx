import "./sidebox.css"
import { useEffect, useState} from "react"
import  Helper  from '../../utils/helpers'
import { FirmCard } from "./firmCard/FirmCard"
import { Branches } from "./branches/Branches"
import { Menu } from "./menu/Menu"

export const Sidebox = () => {
    const [branches, setBranches] = useState([])

    useEffect(()=>{
        Helper.getBranches().then(data =>{
          setBranches(data)
       });
     },[])

    return (
    <div  className="box-side-bar">
        <FirmCard/>
        <div className="box-side-bar-vertical-line"></div>
        <Branches branches={branches}/>
        <Menu/>
    </div>
    )
}
