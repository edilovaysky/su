import './tablebox.css'
import { useAtom } from 'jotai'
import { branchMenuListAtom } from '../sidebox/branches/Branches'
import { TableRow } from './tablerow/TableRow'
import { Loading } from '../../loading/Loading'
import { useEffect, useState } from 'react'


export const Tablebox = ({data}) => {
    const [menuList] = useAtom(branchMenuListAtom)
    const [isLoading, setIsLoading] = useState(true)
    const [menu, setMenu] = useState({})

    useEffect(()=>{
        menuList?.data?.length>0 && setMenu(menuList)
        setIsLoading(false)
    },[menuList?.data])

    useEffect(()=>{
      setMenu(data)
    },[data])

    return (
    <div  className="box-table">
        <div className="box-table-row-wrapper">
            {!isLoading ? menu?.data?.map(row => { return <TableRow key={row.id} row={row}/> })
             : <Loading/> }
        </div>
        
    </div>
    )
}