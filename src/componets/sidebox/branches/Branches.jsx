import './branches.css'
import { useEffect, useState } from 'react'
import { atom, useAtom } from 'jotai'
import Helper from '../../../utils/helpers'


export const branchMenuListAtom = atom({})
export const branchIdAtom = atom(0)

export const Branches = ({branches}) => {
   const [, setMenuList] = useAtom(branchMenuListAtom)
   const [, setBranchId] = useAtom(branchIdAtom)
   const [branch, setBranch ] = useState({})
   const [open, setOpen ] = useState(false)
   const [fechedMenu, setFechedMenu ] = useState({})
   const handleOpen = () => setOpen(!open)

   const handleBranchSelect = (event) => {
     branches.map(item => {
      item.id === +event.target.id && setBranch(item)
      setOpen(false)
     })
   }

   useEffect(()=>{
      branch?.id && Helper.getMenuWithParams(branch.id,3,1).then(data =>{
        setBranchId(branch.id)
        setFechedMenu(data)
      });
   },[branches, branch?.id])
   setMenuList(fechedMenu)

   useEffect(()=>{
    branches?.length>0 && setBranch(branches[0])
   },[branches?.length>0])

  
   

  return (
       <div className='branches'>
        <p>Филиалы</p>
        <div className='branches-choice'>
          <label>{branch?.name}</label>
          <div className="branches-choice-icon" onClick={handleOpen}>
            v
          </div>
        </div>
        {open && 
          <div className='branches-choice-dropdown'>
            {branches?.map(item =>{
              return <label key={item.id} id={item.id} onClick={handleBranchSelect}>{item?.name}
              </label>
            })}
          </div>
        }
    </div>
    )
}