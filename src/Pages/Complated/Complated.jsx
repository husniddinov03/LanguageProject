import React, { useEffect } from 'react'
import { UseInfoContext } from '../../Context/UseInfoContext'
import { Link } from 'react-router-dom'

const Complated = () => {

  const { complatedLang, setComplatedLang, allData } = UseInfoContext()
  
  useEffect(() => {
    const filteredComplated = allData.filter(datas => datas.enterPage.enterTest === true);
    setComplatedLang(filteredComplated)
    localStorage.setItem('languages', JSON.stringify(allData))
  }, [])


  return (
    <div className='complated flex flex-wrap gap-5'>

      <div className="home-boxes d-flex flex-wrap justify-content-center gap-4">
        {
          complatedLang?.length !== 0 ? complatedLang.map(datas => {
            return (
              <div className="home-box" key={datas.id} >
                <div className="home-item">
                  <button style={{ background: "transparent", border: "none" }}>
                    <Link to={`lang${datas.path}`} className="home-link text-dark d-flex flex-column align-items-center gap-2">
                      <img src={datas.img} alt="No image" />
                      <h2>{datas.name}</h2>
                      <p>{datas.describtion}</p>
                    </Link>
                  </button>
                </div>
                <p style={{ '--indicatorCount': `${datas.contentPresent}` }} className="lang-item-stat text-center p-2">
                  <strong style={{ color: "lightcoral", fontSize: "25px" }}>{datas.contentPresent !== `${100}%` ? datas.contentPresent : "Complated"}</strong>
                </p>
              </div>
            )
          }) : <h1 className='mt-5 text-center text-danger'>Not Courses</h1>
        }
      </div>
    </div>
  )
}

export default Complated