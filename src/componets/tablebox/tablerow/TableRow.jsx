import './tablerow.css'
import  grow  from '../../../assets/grow.png'
import  pen  from '../../../assets/pen.png'
import  trash  from '../../../assets/trash.png'

const Gag = (id) => {
  return <p style={{'color':'#FFFFFF'}} id={id}>'gag gag gag gag'</p>
}

export const TableRow = ({row}) => {
  const handleIconClick = (event) => {
    event.target.alt === 'grow' && alert('Переход к диаграмме')
    event.target.alt === 'pen' && alert('Переход к редактированию')
    event.target.alt === 'trash' && alert('Переход к удалению')
  }  
  //live it as an example 
   row.name = row?.name.replace(/<(.|\n)*?>/g, '')  

  return(
    <div className="box-table-row">
        { row?.name ? <p>{row?.name }</p> : <Gag/>}
        {row?.filial?.name ? <p >{row?.filial?.name }</p> : <Gag/>}
        {row?.tt?.name ? <p>{row?.tt?.name }</p> :  <Gag/>} 
        {row?.active ? <p>Активно</p> : <p>Не активно</p>}
        {row?.export?.length>0 ? 
        <p>{row?.export?.map(i => {return <span key={i}> {i}<br/></span>})}</p> 
        : <Gag/>}
        <div className="box-table-row-icons-wrapper">
          <img src={grow} alt="grow" onClick={handleIconClick}/>
          <img src={pen} alt="pen" onClick={handleIconClick}/>
          <img src={trash} alt="trash" onClick={handleIconClick}/>
        </div>
    </div>
  )
}