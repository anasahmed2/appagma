const Card = ({carContainer,layoutCard,cardImageContainer ,cardDataContainer}) => {
    return (
        <>
            <div className={carContainer}>
                <div className={layoutCard}>
                    <div className={cardImageContainer}></div>
                    <div className={cardDataContainer}></div>
                </div>
            </div>
        </>
    )
}

export default Card;