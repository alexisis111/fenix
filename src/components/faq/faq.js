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
            className="space-y-3 mt-5 overflow-hidden border-b border-black"
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
            q: "Могу ли я заказать индивидуальный дизайн для моих дверей?",
            a: "Конечно! Мы предлагаем широкий выбор материалов, цветов и фурнитуры, которые помогут вам создать уникальный дизайн для ваших дверей, который будет отвечать вашим потребностям и вкусу."
        },
        {
            q: "Предоставляете ли вы гарантию на выполненные работы?",
            a: "Да, мы предоставляем гарантию на все наши работы. Если у вас возникнут какие-либо проблемы с выполненными работами, свяжитесь с нами, и мы постараемся исправить ситуацию как можно быстрее и бесплатно."
        },
        {
            q: "Какие материалы вы используете при восстановлении дверей и окон?",
            a: "Мы используем только высококачественные материалы при восстановлении дверей и окон. Например, мы используем натуральное дерево, которое мы тщательно подбираем, чтобы двери и окна были не только красивыми, но и прочными."
        },
        {
            q: "Могу ли я заказать у вас ремонт моих старых лестниц?",
            a: "Конечно, мы также предлагаем ремонт и реставрацию старых лестниц. Наши мастера заменят все поврежденные детали и восстановят их в исходное состояние."
        },
        {
            q: "Какие сроки выполнения работ?",
            a: "Сроки выполнения работ зависят от объема и сложности работы. Мы всегда стараемся выполнить работы в кратчайшие сроки без ущерба для качества. Как правило, сроки выполнения работ обсуждаются индивидуально с каждым клиентом."
        },
        {
            q: "Могу ли я заказать у вас нестандартные двери или окна?",
            a: "Да, мы можем изготовить нестандартные двери и окна под любые размеры и особые требования клиента. Наши мастера подберут наилучшие материалы и помогут реализовать все ваши идеи."
        },
        {
            q: "Какие условия оплаты за ваши услуги?",
            a: "Мы предлагаем гибкие условия оплаты за наши услуги. Обычно мы принимаем оплату после выполнения работы, но можем рассмотреть и другие варианты оплаты по желанию клиента. Условия оплаты всегда обсуждаются индивидуально с каждым клиентом."
        },
    ]

    return (
        <div className="bg-gray-200 p-8">
            <section className="leading-relaxed max-w-screen-xl mx-auto p-4 md:p-8 bg-gray-300 rounded-md">
                <div className="space-y-3 text-center">
                    <h1 className="text-gray-800 font-extrabold text-center mb-8 text-xl md:text-5xl">У вас вопрос? Отвечаем.</h1>
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