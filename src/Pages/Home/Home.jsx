import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UseInfoContext } from '../../Context/UseInfoContext';
import "./Style/Style.css"
import data from "../data"

const Home = () => {
    const { setLangId, setAllData, allData, trueContentPresent } = UseInfoContext()

    useEffect(() => {
        if (allData.length == 0) {
            localStorage.setItem('languages', JSON.stringify(data));
            setAllData(data);
        }
    }, [allData]);

    const findLang = (id, item, itemName) => {
        const findedLang = allData?.find(lang => lang.id === id);
        setLangId([findedLang])
        trueContentPresent(item, itemName)
    }

    return (
        <div className='home  flex flex-wrap gap-5'>

            <h1 className='mt-5 text-danger'>Courses</h1>
            <div className="home-boxes d-flex flex-wrap justify-content-center gap-4">

                {allData && allData?.length !== 0 ? allData.map(datas => {
                    return (
                        <div className="home-box" key={datas.id} >
                            <div className="home-item">
                                <button onClick={() => findLang(datas.id, datas, datas.imgName)} style={{ background: "transparent", border: "none" }}>
                                    <Link onClick={() => datas.enterPage.enterCourse = true} to={`lang${datas.path}`} className="home-link text-dark d-flex flex-column align-items-center gap-2">
                                        <img src={datas.img} alt="No image" />
                                        <h2>{datas.name}</h2>
                                        <p>{datas.describtion}</p>
                                    </Link>
                                </button>
                            </div>
                            <p style={{ '--indicatorCount': `${datas.contentPresent}` }} className="lang-item-stat text-center p-2">
                                <strong style={{ color: "lightcoral", fontSize: "25px" }}> {datas.contentPresent !== `${100}%` ? datas.contentPresent : "Complated"}{datas.contentPresent == 0 ? "%" : ""}</strong>
                            </p>
                        </div>
                    )
                }) : <h1 className='mt-5 text-center text-danger'>Not Courses</h1>
                }
            </div>
        </div>

    )
}

export default Home