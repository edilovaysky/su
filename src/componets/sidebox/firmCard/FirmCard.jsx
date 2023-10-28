import './firmCard.css'
import firm from '../../../assets/firm.png'
import store from '../../../assets/store.png'

export const FirmCard = () => {
    const title = 'название фирмы'
    const titleName = 'Лоскутникова В.П.'
    const actionName = 'складской учет'
  
    return (
    <div className='firm-card'>
         
        <div className="firm-section-wrapper">
            <img src={firm} alt="firm" />
            <div className="firm-card-title-wrapper">
                <p>{title.toUpperCase()}</p>
                <span>{titleName}</span>
            </div>
        </div>
        
        <hr/>
        <div className="action-name-wrapper">
        <img src={store} alt="firm" />
        <p>{actionName.toUpperCase()}</p>
        </div>
    </div>
    )
}