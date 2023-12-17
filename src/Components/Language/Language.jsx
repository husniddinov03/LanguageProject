import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Style/Style.scss"
import { UseInfoContext } from '../../Context/UseInfoContext'
// import { ArrowLeftOutlined } from "ant-design/icons";
import { LeftOutlined } from '@ant-design/icons'
import UzbekFlag from "./LangImages/UzbekistanFlagHD.jpg"
import RussianFlag from "./LangImages/RussiaFlagHD.jpg"
import EnglandFlag from "./LangImages/EnglandflagHD.avif"
import KoreanFlag from "./LangImages/KoreanFlagHD.jpg"
import ArabianFlag from "./LangImages/ArabianFlagHD.jpg"
import TurkianFlag from "./LangImages/TurkianFlagHD.jpg"

const Language = () => {

    const { langId, allData, setUnFinishedLang, setComplatedLang, presentContent, trueContentPresent } = UseInfoContext()

    useEffect(() => {

        const filteredUnFinished = allData.filter(datas => datas.enterPage.enterCourse === true);
        setUnFinishedLang(filteredUnFinished);

        const filteredComplated = allData.filter(datas => datas.enterPage.enterTest === true);
        setComplatedLang(filteredComplated)

        
    }, [allData]);

    const filteredPageTest = (filData) => {
        return filData.enterPage.enterTest = true
    }

    console.log(presentContent);

    return (
        <div className='lang'>
            <div className="back-btn pb-3 d-flex">
                <Link to='/'>
                    <button className='fw-bold border-0 flex gap-2 text-light'><LeftOutlined /> Back to Home</button>
                </Link>
            </div>

            {langId?.length > 0 ? langId?.map(lang => (
                <div className="lang-box container-xl pt-5  " key={lang.id}>
                    <div className="lang-media d-flex justify-content-center gap-5 flex-wrap align-items-center">
                        <img src={lang.imgName === "TurkianFlag" ? TurkianFlag : "" || lang.imgName === "UzbekFlag" ? UzbekFlag : "" || lang.imgName === "ArabianFlag" ? ArabianFlag : "" || lang.imgName === "TurkianFlag" ? TurkianFlag : "" || lang.imgName === "RussianFlag" ? RussianFlag : "" || lang.imgName === "EnglandFlag" ? EnglandFlag : "" || lang.imgName === "KoreanFlag" ? KoreanFlag : ""} alt="No image" />
                        <iframe width="700" height="415" src={lang.vidLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className='lang-text'>
                        <h1 className='text-center'>{lang.name}</h1>
                        <p>{lang.describtion}</p>
                    </div>
                    <button onClick={() => trueContentPresent(lang, lang.imgName)} className="lang-link-box border-0">
                        <Link onClick={() => filteredPageTest(lang)} to='/quizes' className='lang-link'>Start Quiz</Link>
                    </button>
                </div>
            )) : <h1 className='text-danger text-center pt-5'>No Course</h1>}
        </div>
    )
}

export default Language