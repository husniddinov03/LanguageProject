import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UseInfoContext = () => useContext(UserContext)

export const UseProvider = ({ children }) => {

    const [langId, setLangId] = useState([])
    const [questionsActive, setQuestionsActive] = useState(null)

    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem('languages')) || []);    
    const [conf, setConf] = useState("Home")
    const [unFinishedLang, setUnFinishedLang] = useState([])
    const [complatedLang, setComplatedLang] = useState([])
    const [presentContent, setPresentContent] = useState(null)

    const trueContentPresent = (item, imgName) => {
        setQuestionsActive(imgName)
        let enterCourses = item.enterPage.enterCourse
        let enterTesta = item.enterPage.enterTest
        let enterPages = [enterCourses, enterTesta]
        let trueCount = enterPages.filter(item => item === true).length
        let totalCount = enterPages.length;
        const truePercentage = (trueCount / totalCount) * 100 + "%";
        return item.contentPresent = truePercentage
    }

    const value = {
        allData, langId, setLangId, questionsActive, setQuestionsActive, conf, setConf, unFinishedLang, setUnFinishedLang,
        setComplatedLang, complatedLang, presentContent, setPresentContent, trueContentPresent, allData, setAllData,

    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
