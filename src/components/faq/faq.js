import React, { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b border-black "
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
        {
            q: "Расскажите тест тест тест тест",
            a: "Отвечаем тест тест тест тест"
        },
    ]

    return (
        <div className="bg-gray-200 p-8">
            <section className="leading-relaxed max-w-screen-xl mx-auto p-4 md:p-8 bg-gray-300 rounded-md">
                <div className="space-y-3 text-center">
                    <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl text-center">Отвечаем на вопросы</h1>
                </div>
                <div className="mt-4 max-w-2xl mx-auto ">
                    {
                        faqsList.map((item, idx) => (
                            <FaqsCard
                                idx={idx}
                                faqsList={item}
                            />
                        ))
                    }
                </div>
            </section>
        </div>

    )
}