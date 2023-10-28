import { useState } from 'react';
import './inputText.css'


export const InputText = ({ inputName, hint}) => {
    const [data, setData] = useState({})

    const handleTextChange = ({ target: { name, value } }) => {
      setData({name, value})
      };

   const handleKeyDown = (event) => {
      event.keyCode===13 && setData({}) 
      event.keyCode===13 && alert('Фильтрация не реализована, не хватило времени')
   }

    return (
      <>
         <input
         className="input-text"
         type="text"
         name={inputName}
         value={data.value || ''}
         onChange={handleTextChange}
         placeholder={hint}
         autoComplete="on"
         onKeyDown={handleKeyDown}
         />
      </>
    )
}
