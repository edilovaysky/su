import './App.css'
import { Sidebox } from './componets/sidebox/Sidebox.jsx'
import { Headbox } from './componets/headbox/Headbox'
import { Tablebox } from './componets/tablebox/Tablebox'
import { Pagination } from './componets/pagination/Pagination'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({})
  const getPaginationData = (data) =>{
    !!data && setData(data)
  }

  return (
    <>
      <div className="main-container">
        <div className="side-box-wrapper">
          <div className="side-box-line"></div>
          <Sidebox/>
        </div>
        <div className="table-box-wrapper">
          <Headbox/>
          <Tablebox data={data}/>
          <div className="box-table-pagination-wrapper">
            <Pagination getData={getPaginationData}/>
        </div>
      </div>
        
      </div>
      
    </>
  )
}

export default App
