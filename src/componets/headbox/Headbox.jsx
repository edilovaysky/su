import './headbox.css'
import { InputText } from '../ui/inputText/InputText'
import { useState } from 'react'

export const Headbox = () => {

    const [open, setOpen ] = useState(false)
    const [name, setName ] = useState('Активно')
    const [margin, setMargin] = useState('25px')

    const handleOpen = () => setOpen(!open)

    const handleClick = (event) => {
      setName(event.target?.lastChild?.data)
      setOpen(false)
      event.target.lastChild.data === 'Активно' && setMargin('25px')
      event.target.lastChild.data === 'Не активно' && setMargin('10px')
    }

    const names = [{titleId: 'active', title:'Активно'},{ titleId: 'no_active',title: 'Не активно'}]
    
    return (
    <div  className="box-head">
        <InputText inputName={'branchMenu'} hint={'Название меню'}/>
        <InputText inputName={'branchName'} hint={'Филиал'}/>
        <InputText inputName={'tt'} hint={'Торговая точка'}/>
        <div className='box-head-choice'>
          <label style={{'marginLeft': margin}}>{name}</label>
          <div className="box-head-choice-icon" onClick={handleOpen}>
            v
          </div>
        </div>
        {open && 
          <div className='box-head-choice-dropdown'>
            {names.map(item =>{
              return <label key={item.titleId} id={item.titleId} onClick={handleClick}>{item?.title}
              </label>
            })}
          </div>
        }
        <p id='p-export'>Экспорт</p>
    </div>
    )
}