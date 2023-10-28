import { MenuItem } from './MenuItem'
import './menu.css'

export const Menu = () => {
    const menuItems = ['Компонетты','Полуфабрикаты','Товары','Меню','Перемещения',
    'Инвентаризация','Выпуск товара','Списание','Накладные']

    return (
    <div className='side-menu'>
        <MenuItem items = {menuItems}/>
    </div>
    )
}