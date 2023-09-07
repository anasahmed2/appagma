import { Button2 } from "../Button"
import LineHolder from "../Line Holder"
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

const Card1 = ({ card1Container, card1Img, card1Name, card1Experience, card1NameValue, card1ExperienceValue, card1ImgSource }) => {
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

const Card2 = ({ card2Container, card2ImgArea ,card2ImgSrc ,card2HeadingValue ,card2DetailValue}) => {
    return (
        <>
            <div className={card2Container}>
                <div className={card2ImgArea}><img src={card2ImgSrc} /></div>
                <div className={card2ImgArea}><h3>{card2HeadingValue}</h3></div>
                <div className={card2ImgArea}><h6>{card2DetailValue}</h6></div>
            </div>
        </>
    )
}


const Card3 = ({ card3Container, card3greadentBox, card3greadentArea, card3Btn, classBtn2, Btnvalue, card3DetailContainer, card3Detail1, card3Detailtext,card3_D_C_Area,card3haeding ,card3SalaryValue,card3TimeValue, disheading ,disImgScr1,disImgScr2,disImgScr3,disImgScr4,disImgScr5 ,disPoint1,disPoint2,disPoint3,disPoint4,disPoint5}) => {
    return (
        <>
        
            <div className={card3Container}>
                <div className={card3greadentBox}>
                    <div className={card3greadentArea}>
                        <h5>{card3haeding}</h5>
                        <h1>{card3SalaryValue}</h1>
                        <h5>{card3TimeValue}</h5>
                        <div className={card3Btn}><Button2 classBtn2={classBtn2} value={Btnvalue} /></div>
                    </div>
                </div>
                <div className={card3DetailContainer}>
                    <div className={card3_D_C_Area}>
                        <div className={card3Detail1}>
                            <img src={disImgScr1} />
                            <div className={card3Detailtext}><p>{disPoint1}</p></div>
                        </div>
                        <div className={card3Detail1}>
                            <img src={disImgScr2} />
                            <div className={card3Detailtext}><p>{disPoint2}</p></div>
                        </div>
                        <div className={card3Detail1}>
                            <img src={disImgScr3} />
                            <div className={card3Detailtext}><p>{disPoint3}</p></div>
                        </div>
                    </div>
                    <div className={card3_D_C_Area}>
                        <h2>{disheading}</h2>
                        <div className={card3Detail1}>
                            <img src={disImgScr4} />
                            <div className={card3Detailtext}><p>{disPoint4}</p></div>
                        </div>
                        <div className={card3Detail1}>
                            <img src={disImgScr5} />
                            <div className={card3Detailtext}><p>{disPoint5}</p></div>
                        </div>
                    </div>



                </div>


            </div>
        </>
    )
}

const Card4 = ({ card4Container, card4ContantArea, card4Img, card4detail ,card4ImgSrc ,card4Value}) => {
    return (
        <>
            <div className={card4Container}>
                <div className={card4ContantArea}>
                    <div className={card4Img}>
                        <img src={card4ImgSrc} />
                    </div>
                    <div className={card4detail}><h6>{card4Value}</h6></div>
                </div>
            </div>
        </>
    )
}

const Card5 = ({ card5Container, card5Img, card5detail, card5Video }) => {
    return (
        <>
            <div className={card5Container}>
                <div className={card5Img}>
                    <div className={card5Video}></div>
                    <img src="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/blue-gradient-designify-1.png" />
                </div>
                <div className={card5detail}><h6>Capri Wheaton Founder of Dressed</h6></div>
            </div>
        </>
    )
}

const Card6 = ({ headingValue, card6DetailValue,card6Sno ,card6SnoHeading}) => {
    return (
        <>
            <div className="card6Container">
                <div className="card6Haeding">
                    <div className="title1Heading">
                        <div className="title1HeadingContant min-w-7">
                            <div className="contantValueContainer leter-s-none">{card6SnoHeading} </div>
                            <div className="contantNocontainer ml-5">{card6Sno}</div>
                        </div>
                        <div className="title1HeadingLineholder">
                            <LineHolder lineHolderColor="lineHolderDesign lineHolderColor" />
                        </div>
                    </div>

                </div>

                <div className="card6MainJHaeding"><h1>{headingValue}</h1></div>
                <div className="card6MainJHaeding">
                    <p>
                        {card6DetailValue}
                    </p>
                </div>
            </div>
        </>
    )
}

const Card7 = ({ headingValue, card6DetailValue ,point1,point2}) => {
    return (
        <>
            <div className="card6Container">
                <div className="card6Haeding">
                    <div className="title1Heading">
                        <div className="title1HeadingContant min-w-7">
                            <div className="contantValueContainer leter-s-none">step </div>
                            <div className="contantNocontainer ml-5">02</div>
                        </div>
                        <div className="title1HeadingLineholder">
                            <LineHolder lineHolderColor="lineHolderDesign lineHolderColor" />
                        </div>
                    </div>

                </div>

                <div className="card6MainJHaeding"><h1>{headingValue}</h1></div>
                <div className="card6MainJHaeding">
                    <p>
                        {card6DetailValue}
                        <br />
                        {point1}
                        <br />
                        {point2}
                    </p>
                </div>
            </div>
        </>
    )
}
export { Card, Card1, Card2, Card3, Card4, Card5, Card6, Card7 };