const Card = ({ cardContainer, layoutCard, cardImageContainer, cardDataContainer, heading, textgreadent1, headingvalue, headingvalueG, paragvalue, imageSource }) => {
    return (
        <>
            <div className={cardContainer}>
                <div className={layoutCard}>
                    <div className={cardImageContainer}>
                        <div className="cardImage"><img src={imageSource} alt="Card image" /></div>
                    </div>
                    <div className={cardDataContainer}>
                        <div className={heading}><h1>{headingvalue} <span className={textgreadent1}>{headingvalueG}</span>.</h1></div>
                        <div className={heading}><p>{paragvalue} </p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Card1 = ({ card1Container, card1Img ,card1Name, card1Experience ,card1NameValue,card1ExperienceValue ,card1ImgSource}) => {
    return (
        <>
            <div className={card1Container}>
                <div className={card1Img}>
                    <img src={card1ImgSource} />
                </div>
                <div className={card1Name}><p>{card1NameValue}</p></div>
                <div className={card1Experience}><p>{card1ExperienceValue} </p></div>
            </div>
        </>
    )
}

export { Card, Card1 };