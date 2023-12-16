import React, { useEffect, useState } from 'react'
import "./Style/Test.scss"
// import questions from './questions'
import { UseInfoContext } from '../../Context/UseInfoContext';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";


const Test = () => {

    const [showFinalResult, setShowFinalResult] = useState(false)
    const [score, setScore] = useState(0)
    const [currentQuestions, setCurrentQuestions] = useState(0)

    const { questionsActive } = UseInfoContext()

    const questions =

        questionsActive == "UzbekFlag" ?
            [{
                questionText: 'Qaysi so‘zlar «so‘z»ni aniqlash uchun ishlatiladi?',
                answerOptions: [
                    { id: 1, answerText: 'o‘z', isCorrect: false },
                    { id: 2, answerText: 'so‘zlik', isCorrect: false },
                    { id: 3, answerText: 'darslik', isCorrect: false },
                    { id: 4, answerText: 'barchasi to‘g‘ri', isCorrect: true },
                ],
                active: true
            },

            {
                questionText: 'Imperativ shaklda so‘rov so‘z tushuntiriladi?',
                answerOptions: [
                    { id: 1, answerText: '–mi', isCorrect: false },
                    { id: 2, answerText: '–mi?', isCorrect: true },
                    { id: 3, answerText: '–moq', isCorrect: false },
                    { id: 4, answerText: '–moqmi?', isCorrect: false },
                ],
                active: true
            },

            {
                questionText: 'O‘zbek tilida nechta fonema mavjud?',
                answerOptions: [
                    { id: 1, answerText: '28', isCorrect: true },
                    { id: 2, answerText: '24', isCorrect: false },
                    { id: 3, answerText: '30', isCorrect: false },
                    { id: 4, answerText: '32', isCorrect: false },
                ],
                active: true
            },

            {
                questionText: 'Qaysi so‘z birinchi harfi yozilgan harflar majmuasiga kiradi?',
                answerOptions: [
                    { id: 1, answerText: 'xodim', isCorrect: true },
                    { id: 2, answerText: 'dostim', isCorrect: false },
                    { id: 3, answerText: 'kitob', isCorrect: false },
                    { id: 4, answerText: 'ko‘prik', isCorrect: false },
                ],
                active: true
            },

            {
                questionText: 'Past simple shaklda fe‘l tushuntiriladi?',
                answerOptions: [
                    { id: 1, answerText: 'kelmoq', isCorrect: false },
                    { id: 2, answerText: 'kelgan', isCorrect: false },
                    { id: 3, answerText: 'kelar', isCorrect: true },
                    { id: 4, answerText: 'kelmoqda', isCorrect: false },
                ],
                active: true
            },
            ] :

            questionsActive == "RussianFlag" ?
                [{
                    questionText: 'Как называется часть речи, обозначающая действие?',
                    answerOptions: [
                        { id: 1, answerText: 'Существительное', isCorrect: false },
                        { id: 2, answerText: 'Прилагательное', isCorrect: false },
                        { id: 3, answerText: 'Глагол', isCorrect: true },
                        { id: 4, answerText: 'Местоимение', isCorrect: false },
                    ],
                    active: false
                },
                {
                    questionText: 'Какой предлог используется для выражения места?',
                    answerOptions: [
                        { id: 1, answerText: 'От', isCorrect: false },
                        { id: 2, answerText: 'До', isCorrect: false },
                        { id: 3, answerText: 'На', isCorrect: true },
                        { id: 4, answerText: 'Под', isCorrect: false },
                    ],
                    active: false
                },
                {
                    questionText: 'Как образуется множественное число существительных в русском языке?',
                    answerOptions: [
                        { id: 1, answerText: 'Прибавляется окончание -ов', isCorrect: false },
                        { id: 2, answerText: 'Прибавляется окончание -ам', isCorrect: false },
                        { id: 3, answerText: 'Прибавляется окончание -ы', isCorrect: true },
                        { id: 4, answerText: 'Прибавляется окончание -ий', isCorrect: false },
                    ],
                    active: false
                },
                {
                    questionText: 'Какой из перечисленных падежей в русском языке является вторым падежом?',
                    answerOptions: [
                        { id: 1, answerText: 'Именительны', isCorrect: false },
                        { id: 2, answerText: 'Родительный', isCorrect: true },
                        { id: 3, answerText: 'Винительный', isCorrect: false },
                        { id: 4, answerText: 'Творительный', isCorrect: false },
                    ],
                    active: false
                },
                {
                    questionText: 'Какой временной показатель используется в прошедшем времени в русском языке?',
                    answerOptions: [
                        { id: 1, answerText: 'Будущее время', isCorrect: false },
                        { id: 2, answerText: 'Настоящее время', isCorrect: false },
                        { id: 3, answerText: 'Прошедшее время', isCorrect: true },
                        { id: 4, answerText: 'Настоящее и будущее время', isCorrect: false },
                    ],
                    active: false
                },
                ] :


                questionsActive == "EnglandFlag" ?
                    [{
                        questionText: "What is the correct plural form of 'child'?",
                        answerOptions: [
                            { id: 1, answerText: 'Childs', isCorrect: false },
                            { id: 2, answerText: 'Children', isCorrect: true },
                            { id: 3, answerText: 'Childes', isCorrect: false },
                            { id: 4, answerText: 'Childies', isCorrect: false },
                        ],
                        active: false
                    },

                    {
                        questionText: "Which of the following sentences is in the present continuous tense?",
                        answerOptions: [
                            { id: 1, answerText: 'She will go to the market', isCorrect: false },
                            { id: 2, answerText: 'He plays football every weekend', isCorrect: false },
                            { id: 3, answerText: 'I am reading a book', isCorrect: true },
                            { id: 4, answerText: 'They visited London last summer', isCorrect: false },
                        ],
                        active: false
                    },

                    {
                        questionText: 'What is the comparative form of the adjective "good"?',
                        answerOptions: [
                            { id: 1, answerText: 'Better', isCorrect: true },
                            { id: 2, answerText: 'Best', isCorrect: false },
                            { id: 3, answerText: 'Gooder', isCorrect: false },
                            { id: 4, answerText: 'Goodest', isCorrect: false },
                        ],
                        active: false
                    },
                    {
                        questionText: 'Which word is a pronoun in the following sentence: "She is going to the store."?',
                        answerOptions: [
                            { id: 1, answerText: 'She', isCorrect: true },
                            { id: 2, answerText: 'Store', isCorrect: false },
                            { id: 3, answerText: 'Going', isCorrect: false },
                            { id: 4, answerText: 'The', isCorrect: false },
                        ],
                        active: false
                    },
                    {
                        questionText: "?",
                        answerOptions: [
                            { id: 1, answerText: 'Ate', isCorrect: true },
                            { id: 2, answerText: 'Eaten', isCorrect: false },
                            { id: 3, answerText: 'Eating', isCorrect: false },
                            { id: 4, answerText: 'Eat', isCorrect: false },
                        ],
                        active: false
                    },
                    ] :


                    questionsActive == "ArabianFlag" ?
                        [
                            {
                                questionText: "ما معنى كلمة 'سلام'؟",
                                answerOptions: [
                                    { id: 1, answerText: 'حب', isCorrect: false },
                                    { id: 2, answerText: 'سلام', isCorrect: true },
                                    { id: 3, answerText: 'عداوة', isCorrect: false },
                                    { id: 4, answerText: 'حزن', isCorrect: false },
                                ],
                            },
                            {
                                questionText: "ما هو الضاد في الكلمة 'ضوء'؟",
                                answerOptions: [
                                    { id: 1, answerText: 'د', isCorrect: true },
                                    { id: 2, answerText: 'ض', isCorrect: false },
                                    { id: 3, answerText: 'ذ', isCorrect: false },
                                    { id: 4, answerText: 'ظ', isCorrect: false },
                                ],
                            },
                            {
                                questionText: "ما الفرق بين 'مرفق' و 'مرفق'؟",
                                answerOptions: [
                                    { id: 1, answerText: 'التصريف', isCorrect: false },
                                    { id: 2, answerText: 'التشديد', isCorrect: true },
                                    { id: 3, answerText: 'الضمير', isCorrect: false },
                                    { id: 4, answerText: 'الحرف', isCorrect: false },
                                ],
                            },
                            {
                                questionText: "ما هي الكلمة الصحيحة: 'كتاب' أو 'كتب'؟",
                                answerOptions: [
                                    { id: 1, answerText: 'كتاب', isCorrect: true },
                                    { id: 2, answerText: 'كتب', isCorrect: false },
                                    { id: 3, answerText: 'كتوب', isCorrect: false },
                                    { id: 4, answerText: 'كتبة', isCorrect: false },
                                ],
                            },
                            {
                                questionText: "ماذا تعني كلمة 'جميل' بالعربية؟",
                                answerOptions: [
                                    { id: 1, answerText: 'حزين', isCorrect: false },
                                    { id: 2, answerText: 'جميل', isCorrect: true },
                                    { id: 3, answerText: 'عصبي', isCorrect: false },
                                    { id: 4, answerText: 'مرح', isCorrect: false },
                                ],
                            },
                        ] :

                        questionsActive == "TurkianFlag" ?
                            [
                                {
                                    questionText: "'Ev' kelimesinin zıt anlamlısı nedir?",
                                    answerOptions: [
                                        { id: 'A', answerText: 'Apartman', isCorrect: false },
                                        { id: 'B', answerText: 'Otel', isCorrect: false },
                                        { id: 'C', answerText: 'İş yeri', isCorrect: false },
                                        { id: 'D', answerText: 'Daire', isCorrect: true },
                                    ],
                                },
                                {
                                    questionText: "'Güzel' kelimesinin eş anlamlısı nedir?",
                                    answerOptions: [
                                        { id: 'A', answerText: 'Çirkin', isCorrect: false },
                                        { id: 'B', answerText: 'Güçlü', isCorrect: false },
                                        { id: 'C', answerText: 'Hoş', isCorrect: true },
                                        { id: 'D', answerText: 'Zayıf', isCorrect: false },
                                    ],
                                },
                                {
                                    questionText: "Hangi cümlede 'yapılmış' sıfat olarak kullanılmıştır?",
                                    answerOptions: [
                                        { id: 'A', answerText: 'Evini kendisi yapmış.', isCorrect: false },
                                        { id: 'B', answerText: 'Yemek önceden yapılmıştı.', isCorrect: true },
                                        { id: 'C', answerText: 'Çocuklar oyuncağı yapmışlar.', isCorrect: false },
                                        { id: 'D', answerText: 'Görev hızla yapılmıştı.', isCorrect: false },
                                    ],
                                },
                                {
                                    questionText: "'Yarın' kelimesinin zıt anlamlısı nedir?",
                                    answerOptions: [
                                        { id: 'A', answerText: 'Hemen', isCorrect: true },
                                        { id: 'B', answerText: 'Sonra', isCorrect: false },
                                        { id: 'C', answerText: 'Önce', isCorrect: false },
                                        { id: 'D', answerText: 'Şimdi', isCorrect: false },
                                    ],
                                },
                                {
                                    questionText: "Aşağıdaki cümlelerden hangisi olumlu bir ifade içerir?",
                                    answerOptions: [
                                        { id: 'A', answerText: 'Hiçbir sorunumuz yok.', isCorrect: true },
                                        { id: 'B', answerText: 'Hiç sevmediğim bir film izledim.', isCorrect: false },
                                        { id: 'C', answerText: 'Kimse gelmedi.', isCorrect: false },
                                        { id: 'D', answerText: 'Hiçbir zaman unutamayacağım bir anı yaşadım.', isCorrect: false },
                                    ],
                                },
                            ] :

                            questionsActive == "KoreanFlag" ?
                                [{
                                    questionText: "안녕하세요'라는 표현은 무슨 의미인가요?",
                                    answerOptions: [
                                        { id: 1, answerText: '안녕', isCorrect: false },
                                        { id: 2, answerText: '안녕히 가세요', isCorrect: false },
                                        { id: 3, answerText: '안녕하세요', isCorrect: true },
                                        { id: 4, answerText: '안녕히 계세요', isCorrect: false },
                                    ],
                                    active: false
                                },

                                {
                                    questionText: "다음 중 '책'의 한국어 의미는 무엇인가요?",
                                    answerOptions: [
                                        { id: 1, answerText: '책 (Chaek)', isCorrect: true },
                                        { id: 2, answerText: '음악 (Eumak)', isCorrect: false },
                                        { id: 3, answerText: '학교 (Hakgyo)', isCorrect: false },
                                        { id: 4, answerText: '영화 (Yeonghwa)', isCorrect: false },
                                    ],
                                    active: false
                                },

                                {
                                    questionText: "'먹다'라는 단어의 뜻은 무엇인가요?",
                                    answerOptions: [
                                        { id: 1, answerText: '자다', isCorrect: false },
                                        { id: 2, answerText: '읽다', isCorrect: false },
                                        { id: 3, answerText: '물다', isCorrect: false },
                                        { id: 4, answerText: '먹다', isCorrect: true },
                                    ],
                                    active: false
                                },

                                {
                                    questionText: "'화장실'이라는 단어의 의미는 무엇인가요?",
                                    answerOptions: [
                                        { id: 1, answerText: '부엌', isCorrect: false },
                                        { id: 2, answerText: '거실', isCorrect: false },
                                        { id: 3, answerText: '욕실', isCorrect: true },
                                        { id: 4, answerText: '방', isCorrect: false },
                                    ],
                                },
                                ] : []


    const optionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        if (currentQuestions + 1 < questions.length) {
            setCurrentQuestions(currentQuestions + 1)

        } else {
            setShowFinalResult(true);
        }
    }

    const restartQuiz = () => {
        setScore(0)
        setCurrentQuestions(0)
        setShowFinalResult(false)
    }

    console.log(score);

    return (


        <div className='quiz container mt-5'>

            {
                showFinalResult ?
                    <div className="back-btn pb-3 d-flex">
                        <Link to='/'>
                            <button className='fw-bold border-0 flex gap-2 text-light'><AiOutlineHome style={{ fontSize: "20px" }} /> Back to Home</button>
                        </Link>
                    </div>
                    : <></>
            }

            <h1 className='text-center'>Quiz app</h1>
            {showFinalResult ?
                <div className="final-result flex gap-2" >
                    <h1 className='bg-light p-1 text-danger'>Final Result</h1>
                    <h2> <span className='text-info'>{score}</span>  out of <span className='text-info'>{questions.length}</span> correct - (<span className='text-info'>{(score / questions.length) * 100}%</span> )</h2>

                    <button onClick={() => restartQuiz()} className='bg-danger border-0 text-light text-center d-inline-block'>Restart Quiz</button>
                </div > :

                <div className="question-card text-center text-light">
                    <h2>Question {currentQuestions + 1} out of {questions.length}</h2>
                    <h3 className='fs-2 text-dark mt-4 mb-4 fw-bold'>{questions[currentQuestions].questionText}</h3>

                    <ul>
                        {
                            questions[currentQuestions].answerOptions.map(option => {
                                return (<li onClick={() => optionClick(option.isCorrect)} key={option.id}>{option.answerText}</li>)
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Test