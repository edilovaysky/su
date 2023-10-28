

export const MenuItem = ({items}) => {
   
    const handleClick = (event) => {
      alert(`Переход в раздел ${event.target.lastChild.data}`)
    }
    return(
        <div className="side-box-menu-item" >
            {items.map((item, index)=> {
                return<p key={item} onClick={handleClick}>- {item}</p>
            })}
        </div>
    )
}