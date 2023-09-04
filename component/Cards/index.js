const Card = ({ cardContainer, layoutCard, cardImageContainer, cardDataContainer, heading, textgreadent1,headingvalue ,headingvalueG,paragvalue}) => {
    return (
        <>
            <div className="container">
                <div className={cardContainer}>
                    <div className={layoutCard}>
                        <div className={cardImageContainer}></div>
                        <div className={cardDataContainer}>
                            <div className={heading}><h1>{headingvalue} <span className={textgreadent1}>{headingvalueG}</span>.</h1></div>
                            <div className={heading}><p>{paragvalue} </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;