import { Button1, Button2, Button3 } from "../Button";
import LineHolder from "../Line Holder";
import { Title1Container, Title2Container } from "../Title";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useRef, useState, useEffect } from "react";

const Card = ({
  cardContainer,
  layoutCard,
  cardImageContainer,
  cardDataContainer,
  heading,
  textgreadent1,
  headingvalue,
  headingvalueG,
  paragvalue,
  imageSource,
}) => {
  return (
    <>
      <div className={cardContainer}>
        <div className={layoutCard}>
          <div className={cardImageContainer}>
            <div className="cardImage">
              <img src={imageSource} alt="Card image" />
            </div>
          </div>
          <div className={cardDataContainer}>
            <div className={heading}>
              <h1>
                {headingvalue}{" "}
                <span className={textgreadent1}>{headingvalueG}</span>.
              </h1>
            </div>
            <div className={heading}>
              <p>{paragvalue} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card1 = ({ Name, Experience, ImgSrc }) => {
  return (
    <>
      <div className="card1Container">
        <div className="card1Img">
          <img src={ImgSrc} />
        </div>
        <div className="card1Name">
          <p>{Name}</p>
        </div>
        <div className="card1Experience">
          <p>{Experience} </p>
        </div>
      </div>
    </>
  );
};

const Card2 = ({
  icon,
  heading,
  detail,
}) => {
  return (
    <>
      <div className="card2Container">
        <div className="card2ImgArea">
         {icon}
        </div>
        <div className="card2ImgArea">
          <h3>{heading}</h3>
        </div>
        <div className="card2ImgArea">
          <h6>{detail}</h6>
        </div>
      </div>
    </>
  );
};

const Card3 = ({
  card3Container,
  card3greadentBox,
  card3greadentArea,
  card3Btn,
  classBtn2,
  Btnvalue,
  card3DetailContainer,
  card3Detail1,
  card3Detailtext,
  card3_D_C_Area,
  card3haeding,
  card3SalaryValue,
  card3TimeValue,
  disheading,
  disImgScr1,
  disImgScr2,
  disImgScr3,
  disImgScr4,
  disImgScr5,
  disPoint1,
  disPoint2,
  disPoint3,
  disPoint4,
  disPoint5,
}) => {
  return (
    <>
      <div className={card3Container}>
        <div className={card3greadentBox}>
          <div className={card3greadentArea}>
            <h5>{card3haeding}</h5>
            <h1>{card3SalaryValue}</h1>
            <h5>{card3TimeValue}</h5>
            <div className={card3Btn}>
              <Button2 classBtn2={classBtn2} value={Btnvalue} />
            </div>
          </div>
        </div>
        <div className={card3DetailContainer}>
          <div className={card3_D_C_Area}>
            <div className={card3Detail1}>
              <img src={disImgScr1} />
              <div className={card3Detailtext}>
                <p>{disPoint1}</p>
              </div>
            </div>
            <div className={card3Detail1}>
              <img src={disImgScr2} />
              <div className={card3Detailtext}>
                <p>{disPoint2}</p>
              </div>
            </div>
            <div className={card3Detail1}>
              <img src={disImgScr3} />
              <div className={card3Detailtext}>
                <p>{disPoint3}</p>
              </div>
            </div>
          </div>
          <div className={card3_D_C_Area}>
            <h2>{disheading}</h2>
            <div className={card3Detail1}>
              <img src={disImgScr4} />
              <div className={card3Detailtext}>
                <p>{disPoint4}</p>
              </div>
            </div>
            <div className={card3Detail1}>
              <img src={disImgScr5} />
              <div className={card3Detailtext}>
                <p>{disPoint5}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card4 = ({ card4ImgSrc, card4Value }) => {
  return (
    <>
      <div className="card4Container">
        <div className="card4ContantArea">
          <div className="card4Img">
            <img src={card4ImgSrc} />
          </div>
          <div className="card4detail">
            <h6>{card4Value}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

const Card5 = ({ imgScr, detail }) => {
  return (
    <>
      <div className="card5Container">
        <div className="card5Img">
          <div className="card5Video"></div>
          <img src={imgScr} />
        </div>
        <div className="card5detail">
          <h6>{detail}</h6>
        </div>
      </div>
    </>
  );
};

const Card6 = ({
  headingValue,
  card6DetailValue,
  card6Sno,
  card6SnoHeading,
}) => {
  return (
    <>
      <div className="card6Main" id="card6">
        <div className="card6FontArea">
          <AiOutlineCheck fontSize={30} />
        </div>
        <div className="card6Container">
          <div className="card6Haeding">
            <div className="title1Heading">
              <div className="title1HeadingContant min-w-7">
                <div className="contantValueContainer leter-s-none">
                  {card6SnoHeading}{" "}
                </div>
                <div className="contantNocontainer ml-5">{card6Sno}</div>
              </div>
              <div className="title1HeadingLineholder">
                <LineHolder lineHolderColor="lineHolderDesign lineHolderColor" />
              </div>
            </div>
          </div>

          <div className="card6MainJHaeding">
            <h1>{headingValue}</h1>
          </div>
          <div className="card6MainJHaeding">
            <p>{card6DetailValue}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Card7 = ({ lineHolderColor }) => {
  return (
    <>
      <div className="Card7Main">
        <div className="card7Status">
          <div className="card7Heading">
            <div className="card7HeadingContant">
              <div className="card7Nocontainer">02</div>
              <div className="card7ValueContainer">Hire Talent </div>
            </div>
            <div className="card7HeadingStatus">
              <div className="card7Nocontainer">
                <span className="card7span">Join</span>
              </div>
            </div>
            <div className="title1HeadingLineholder">
              <LineHolder lineHolderColor={lineHolderColor} />
            </div>
          </div>
        </div>

        <div className="card7detail">
          <div className="card7Divider">
            <p>
              We will help you hire exceptional people for advanced engineering
              and design roles.
            </p>
            <div className="card7Btn">
              <Button3 classBtn3="classBtn3" value="Hire now" />
            </div>
          </div>

          <div className="card7Divider">
            <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div>
            <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div>
            <div className="card7Points">
              <AiOutlineCheck color="#3aecba" />
              <div className="card7PointD">
                <p>5 years of development experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { Card, Card1, Card2, Card3, Card4, Card5, Card6, Card7 };
