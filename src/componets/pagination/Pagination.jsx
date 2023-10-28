import './pagination.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useAtom  } from 'jotai'
import { branchMenuListAtom, branchIdAtom } from '../sidebox/branches/Branches'
import { useEffect, useState } from 'react'
import Helper from '../../utils/helpers'


export const Pagination = ({getData}) => {
    const [curPage, setCurpage] = useState(1)
    const [num, setNum] = useState([1,2,3])
    const [activePage, setActivePage] = useState(1)

    const [menuList]= useAtom(branchMenuListAtom)
    const [branchId] = useAtom(branchIdAtom)

    const handelLeft = () => {
       curPage>1 && setCurpage(curPage-1)
       activePage>1 && setActivePage(activePage-1)
       if(num[0]>1) {
        const newNum = num.map(i => i = i - 1)
        setNum(newNum)
       }
       
    }

    const handelRight = () => {
        if(curPage<menuList?.max_pages ) {
            setCurpage(curPage+1)
            setActivePage(activePage+1)
            if(curPage >=3 && num[2]<menuList?.max_pages) {
                const newNum = num.map(i => i = i + 1)
                setNum(newNum)
            }
        }
        
     }
    useEffect(()=>{
        Helper.getMenuWithParams(branchId,3,activePage).then(data => {
            getData(data)
        })
    },[activePage])

     const handleFirstItem = () => {
        setActivePage(num[0])
        !!menuList &&  Helper.getMenuWithParams(branchId,3,num[0]).then(data => {
            getData(data)
        })
     }
     const handleSecondItem = () => {
        setActivePage(num[1])
        !!menuList &&  Helper.getMenuWithParams(branchId,3,num[1]).then(data => {
            getData(data)
        })
     }
     const handleThirdItem = () => {
        setActivePage(num[2])
        !!menuList &&  Helper.getMenuWithParams(branchId,3,num[2]).then(data => {
            getData(data)
        })
     }
     const handleLastItem = () => {
        setActivePage(menuList?.max_pages)
        !!menuList &&  Helper.getMenuWithParams(branchId,3,num[2]).then(data => {
            getData(data)
        })
     }
    

    return (
        <div className="pagination-wrapper">
           <img src={leftArrow} alt="leftArrow" onClick={handelLeft}/>
           {activePage==num[0] ? <span className='active'>{num[0]}</span> 
           : <span onClick={handleFirstItem}>{num[0]}</span>}

           {menuList?.max_pages >1 && (activePage==num[1]  ? <span className='active'>{num[1]}</span> 
           :<span onClick={handleSecondItem}>{num[1]}</span>)}

           {menuList?.max_pages>2 && (activePage==num[2]  ? <span className='active'>{num[2]}</span>
           :<span onClick={handleThirdItem}>{num[2]}</span>)}

           {menuList?.max_pages>0 && curPage+1!=menuList?.max_pages 
            && curPage != menuList?.max_pages && menuList?.max_pages>3&&<span>...</span>}


           {menuList?.max_pages!=curPage && menuList?.max_pages>3
           && (menuList?.max_pages == activePage ? 
           <span className='active'>{menuList?.max_pages}</span> 
           :<span onClick={handleLastItem}>{menuList?.max_pages}</span> )}
           
           <img src={rightArrow} alt="rightArrow" onClick={handelRight}/>
        </div>
    )
}