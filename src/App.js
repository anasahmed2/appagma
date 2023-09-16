import {
  Card,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
} from "./component/Cards";
import Person from "./asset/icons8-person-64.png";
import Modal from "./component/Modal";
import { Button1, Button2, Button3 } from "./component/Button";
import { Title1Container, Title2Container } from "./component/Title";
import fingerImg from "./asset/fingerprint.png";
import "./App.css";
import Footer from "./component/Footer";
import { useRef, useState, useEffect } from "react";
import {
  MdOutlineNotificationsActive,
  MdOutlineAvTimer,
  MdOutlineUpcoming,
  MdOutlineCalendarToday,
  MdOutlineLibraryBooks,
  MdOutlineHub,
  MdOutlinePeopleOutline,
} from "react-icons/md";

const App = () => {
  const Skills = [
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg",
      card4Value: "React",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-1.svg",
      card4Value: "Node",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-12.svg",
      card4Value: "Vue",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-2.svg",
      card4Value: "Angular  ",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-8.svg",
      card4Value: "Ruby on Rails",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-7.svg",
      card4Value: "PHP",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/wordpress-svgrepo-com.svg",
      card4Value: "Wordpress",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-6.svg",
      card4Value: ".Net",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/shopify-svgrepo-com.svg",
      card4Value: "Shopify",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-15.svg",
      card4Value: "iOS  Objective-C",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-14.svg",
      card4Value: "iOS  Swift",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg",
      card4Value: "React Native",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/flutter_logo.svg",
      card4Value: "Flutter",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/android-svgrepo-com.svg",
      card4Value: "Android - Java",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-13.svg",
      card4Value: "Android - Kotlin",
    },
    {
      card4ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-9.svg",
      card4Value: "Golang",
    },
  ];

  const Founder = [
    {
      detail: "Marie Ng Founder of Llama Life",
      imgScr:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/pride-flag-designify.png",
    },
    {
      detail: "Kathryn Cross Founder of Anja Health",
      imgScr:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/green-gradient-designify.png",
    },
    {
      detail: "Capri Wheaton Founder of Dressed",
      imgScr:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/blue-gradient-designify-1.png",
    },
  ];

  const telentedPerson = [
    {
      Name: "Clement Ong",
      Experience: "Fullstack JS dev with 7 years of experience",
      ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1599542157386.jpeg ",
    },
    {
      Name: "Thien Jason",
      Experience: "Fullstack JS dev with 8 years of experience",
      ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1517353617929.jpeg ",
    },
    {
      Name: "Rob Legaspi",
      Experience: "Fullstack JS dev with 6 years of experience",
      ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1601042335818-p-500.jpeg",
    },
    {
      Name: "Long Trang",
      Experience: "Fullstack JS dev with 9 years of experience",
      ImgSrc:
        "https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/LongTran-Spring2017.jpeg",
    },
  ];

  const HireStatus = [
    {
      icon: <MdOutlineNotificationsActive  fontSize={25}/>,
      heading: "Find Talent in 24 Hours",
      detail:
        "Within 24 hours you’ll be ready to start working with your matched talent via your dedicated Slack workspace!",
    },
    {
      icon: <MdOutlineAvTimer fontSize={25}/>,
      heading: "Pre-Screened Talent",
      detail:
        "All Unicorn.Dev talent is screened & vetted for their coding skills & English proficiency to ensure quality of service.",
    },
    {
      icon: <MdOutlineUpcoming fontSize={25}/>,
      heading: "Cancel Anytime",
      detail:
        "Pay as you go, rolling weekly contract with no minimum commitment!",
    },
    {
      icon: <MdOutlineCalendarToday fontSize={25}/>,
      heading: "Free Trial  ",
      detail:
        "If you are not happy with the talent, let us know within the 7-day free trial and we'll find an alternative or refund you right away.",
    },
    {
      icon: <MdOutlineLibraryBooks fontSize={25}/>,
      heading: "Buy-off Talent from Platform",
      detail:
        "If you've found a great Unicorn.Dev to work with, you can even buy him off our platform!",
    },
    {
      icon: <MdOutlineHub fontSize={25}/>,
      heading: "Flexible Contracts",
      detail:
        "Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution.",
    },
    {
      icon: <MdOutlinePeopleOutline fontSize={25}/>,
      heading: "Senior Talents",
      detail:
        "All Unicorn.Dev talents are seniors, with a minimum 5 years of work experience in their specialty.",
    },
    {
      icon: <MdOutlineNotificationsActive fontSize={25}/>,
      heading: "Time-Zone Overlap ",
      detail:
        "Our globally distributed talent pool is available to you with a working time overlap of 4 hours daily, for easy collaboration.",
    },
  ];

  return (
    <>
      <div className="mainContainer">
        <Modal
          modalMainConatiner="modalMainConatiner"
          modalMainBody="modalMainBody ModalBackDesign modalBackDesigncolor"
          modalContantContainer="modalContantContainer"
          modalHeadingMain="modalHeadingMain"
          btnvalue="Hire Now!"
          classBtn1="classBtn1"
          classBtn1Animation="classBtn1Animation"
          modalHeading="modalHeading"
          modalHeadingGreadent1="textgreadent4"
          modalHeadingGreadent2="textgreadent4"
          modalDetail="modalDetail"
          btnContainer="btnContainer"
          modalRelative="modalRelative"
          modalCircleImage1="modalCircleImage1"
          modalCircleImage2="modalCircleImage2"
          modalCircleImage3="modalCircleImage3"
          modalCircleImage4="modalCircleImage4"
          modalCircleImage5="modalCircleImage5"
          modalCircleImage6="modalCircleImage6"
          modalCircleImage7="modalCircleImage7"
          modalCircleImage8="modalCircleImage8"
          modalCircleImage9="modalCircleImage9"
          imageCircle1="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-03-p-500.jpeg"
          imageCircle2="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/testimonial-01-bright-webflow-uikit-p-500.jpeg"
          imageCircle3="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-03.jpg"
          imageCircle4="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-02.jpg"
          imageCircle5="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-landscape-03-p-500.jpeg"
          imageCircle6="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02_1.jpg"
          imageCircle7="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02-p-500.jpeg"
          imageCircle8="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01-p-500.jpeg"
          imageCircle9="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01_1.jpg"
          modalValue1="Hire"
          modalValueG1="Remote"
          modalValueG2="Unicorn"
          modalValue2="Devs"
          modalValueDetal="Get matched with our elite group of hand-selected & rigorously vetted Unicorn Devs, assigned to you in 24 hours."
        />
        <div className="section">
          <Title1Container
            title1HeadingLineholder="title1HeadingLineholder"
            title1ContainerMainContainer="title1ContainerMainContainer"
            lineHolderColor="lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer="title1DetailContainer"
            title1Image="title1Image"
            title1ImageSrc={fingerImg}
            title1MainHeading="title1MainHeading"
            title1HeadingH1="title1HeadingH1"
            title1HeadingH1G="textgreadent4"
            title1Detail="title1Detail"
            title1SnoValue="01"
            title1SnoHeadingValue="Get Start"
            title1MainHeadingValue="Steps to Hire"
            title1MainHeadingValueG="Talent"
            title1DetailValue="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time."
          />
          <div className="sectionA">
            <Card
              cardContainer="cardContainer"
              layoutCard="layoutCard left"
              cardImageContainer="cardImageContainer boxGreadent2"
              imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
              cardDataContainer="cardDataContainer"
              heading="cardheading"
              textgreadent1="textgreadent1"
              headingvalue="Tell Us What"
              headingvalueG="You Need"
              paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
            />
            <Card
              cardContainer="cardContainer"
              layoutCard="layoutCard right"
              cardImageContainer="cardImageContainer boxGreadent3"
              imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
              cardDataContainer="cardDataContainer"
              heading="cardheading"
              textgreadent1="textgreadent2"
              headingvalue="Tell Us What"
              headingvalueG="You Need"
              paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
            />
            <Card
              cardContainer="cardContainer"
              layoutCard="layoutCard left"
              cardImageContainer="cardImageContainer boxGreadent4"
              imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png"
              cardDataContainer="cardDataContainer"
              heading="cardheading"
              textgreadent1="textgreadent1"
              headingvalue="Tell Us What"
              headingvalueG="You Need"
              paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent."
            />
          </div>
          <Title1Container
            title1HeadingLineholder="title1HeadingLineholder"
            title1ContainerMainContainer="title1ContainerMainContainer"
            lineHolderColor="lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer="title1DetailContainer"
            title1Image="display-none"
            title1MainHeading="title1MainHeading"
            title1HeadingH1="title1HeadingH1"
            title1HeadingH1G="textgreadent5"
            title1Detail="title1Detail"
            title1SnoValue="01"
            title1SnoHeadingValue="Get Start"
            title1MainHeadingValue="Steps to Hire"
            title1MainHeadingValueG="Talent"
            title1DetailValue="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time."
          />
        </div>

        <div className="section1">
          <div className="section1A">
            <div className="section2Divider">
              <div className="divider1">
                <Card3
                  card3Container="card3Container"
                  card3greadentBox="card3greadentBox boxGreadent1"
                  card3greadentArea="card3greadentArea"
                  card3Btn="card3Btn"
                  classBtn2="classBtn2"
                  Btnvalue="Hire Here"
                  card3DetailContainer="card3DetailContainer"
                  card3Detail1="card3Detail1"
                  card3Detailtext="card3Detailtext"
                  card3haeding="Flat"
                  card3SalaryValue="$40/hour"
                  card3TimeValue="Per hour"
                  disImgScr1={Person}
                  disImgScr2={Person}
                  disImgScr3={Person}
                  disImgScr4={Person}
                  disImgScr5={Person}
                  disPoint1="Senior talent with minimum 5 years experience"
                  disPoint2="Talent pool consists of experts covering all areas of programming languages"
                  disPoint3="Fully-vetted talents to ensure quality of service"
                  disPoint4="7-day risk-free trial!"
                  disPoint5="Flexible contracts"
                  disheading="Includes"
                  card3_D_C_Area="card3_D_C_Area"
                />
              </div>
              <div className="divider2">
                <div className="divider2container">
                  <div className="divider2heading">
                    <h6>Flat, simple pricing for all</h6>
                    <h1>Simple Pricing to Suit Businesses of all Sizes.</h1>
                  </div>
                  <div className="divider2card">
                    {/* <div>
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    <Card2
                      card2Container="card2Container"
                      card2ImgArea="card2ImgArea"
                      card2ImgSrc={Person}
                      card2HeadingValue="Find Talent in 24 Hours"
                      card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   "
                    />
                    </div> */}

                    {HireStatus.map((value, index) => (
                      <Card2 key={index} {...value}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section2 ModalBackDesign bg-3">
          <Title2Container
            title1HeadingLineholder2="title1HeadingLineholder2"
            title1ContainerMainContainer2="title1ContainerMainContainer2"
            lineHolderColor2="lineHolderDesign lineHolderColor"
            lineHolderColor="rotate lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer2="title1DetailContainer2"
            title1MainHeading="title1MainHeading"
            title1HeadingH1A="title1HeadingH1A"
            title1HeadingH1G="textgreadent2  "
            title2SnoValue="03"
            title2SnoHeadingValue="TALENT"
            title2MainHeadingValue="Some of Our "
            title2MainHeadingValueG="Talents."
          />
          <div className="sectionDividerA">
            {/* <div>
            <Card1
              card1Container="card1Container"
              card1Img="card1Img"
              card1Name="card1Name"
              card1Experience="card1Experience"
              card1NameValue="Clement Ong"
              card1ExperienceValue="Fullstack JS dev with 7 years of experience"
              card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1599542157386.jpeg "
            />
            <Card1
              card1Container="card1Container"
              card1Img="card1Img"
              card1Name="card1Name"
              card1Experience="card1Experience"
              card1NameValue="Thien Jason"
              card1ExperienceValue="Fullstack JS dev with 8 years of experience"
              card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1517353617929.jpeg "
            />
            <Card1
              card1Container="card1Container"
              card1Img="card1Img"
              card1Name="card1Name"
              card1Experience="card1Experience"
              card1NameValue="Rob Legaspi"
              card1ExperienceValue="Fullstack JS dev with 6 years of experience"
              card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1601042335818-p-500.jpeg "
            />
          </div> */}
            {telentedPerson.map((value, index) => (
              <Card1 key={index} {...value} />
            ))}
          </div>
        </div>

        <div className="section2 ModalBackDesign bg-4">
          <Title2Container
            title1HeadingLineholder2="title1HeadingLineholder2"
            title1ContainerMainContainer2="title1ContainerMainContainer2"
            lineHolderColor2="lineHolderDesign lineHolderColor"
            lineHolderColor="rotate lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer2="title1DetailContainer2"
            title1MainHeading="title1MainHeading"
            title1HeadingH1A="title1HeadingH1A textreadent2"
            title1HeadingH1G1="textgreadent4"
            title2SnoValue="04"
            title2SnoHeadingValue="PODCAST"
            title2MainHeadingValue="Founder Story"
            title2MainHeadingValueG=" Podcast."
          />

          <div className="sectionDividerA">
            {/* <div>
              {" "}
              <Card5
                card5Container="card5Container"
                card5Img="card5Img"
                card5detail="card5detail"
                card5Video="card5Video"
              />
              <Card5
                card5Container="card5Container"
                card5Img="card5Img"
                card5detail="card5detail"
                card5Video="card5Video"
              />
            </div> */}

            {Founder.map((value, index) => (
              <Card5 key={index} {...value} />
            ))}
          </div>
          <div className="sectionABtn1">
            <Button3
              classBtn3="classBtn3"
              value="Visit FounderStory Podcast Site"
            />
          </div>
        </div>

        <div className="section bg-Image1 bg-1">
          <Title2Container
            title1HeadingLineholder2="title1HeadingLineholder2"
            title1ContainerMainContainer2="title1ContainerMainContainer2"
            lineHolderColor2="lineHolderDesign lineHolderColor"
            lineHolderColor="rotate lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer2="title1DetailContainer2"
            title1MainHeading="title1MainHeading"
            title1HeadingH1A="title1HeadingH1A textreadent2"
            title1HeadingH1G1="textgreadent4"
            title2SnoValue="04"
            title2SnoHeadingValue="PODCAST"
            title2MainHeadingValue="Skills"
            title2MainHeadingValueG="  We Offer."
          />

          <div className="sectionAContainer">
            <div className="sectionDividerA">
              {/* <div>
                {" "}
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
                <Card4
                  card4Container="card4Container"
                  card4ContantArea="card4ContantArea"
                  card4Img="card4Img"
                  card4detail="card4detail"
                  card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg"
                  card4Value="React"
                />
              </div> */}

              {Skills.map((value, index) => (
                <Card4 key={index} {...value} />
              ))}
            </div>
          </div>
        </div>

        <div className="section bg-5">
          <Title2Container
            title1HeadingLineholder2="title1HeadingLineholder2"
            title1ContainerMainContainer2="title1ContainerMainContainer2"
            lineHolderColor2="lineHolderDesign lineHolderColor"
            lineHolderColor="rotate lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer2="title1DetailContainer2"
            title1MainHeading="title1MainHeading"
            title1HeadingH1A="title1HeadingH1A fontSizeMax"
            title1HeadingH1G="textgreadent7 "
            title2SnoValue="06"
            title2SnoHeadingValue="VETTING"
            title2MainHeadingValue="Our"
            title2MainHeadingValueG="Vetting Process:"
          />
          <div className="CardlineSection">
            <Card6
              headingValue="coding "
              card6DetailValue="A timed live coding challenge that helps evaluate"
              card6Sno="02"
              card6SnoHeading="step"
            />

            <Card6
              headingValue="coding "
              card6DetailValue="A timed live coding challenge that helps evaluate"
              card6Sno="02"
              card6SnoHeading="step"
            />

            <Card6
              headingValue="coding "
              card6DetailValue="A timed live coding challenge that helps evaluate"
              card6Sno="02"
              card6SnoHeading="step"
            />
          </div>
        </div>

        <div className="section bg-5">
          <Title2Container
            title1HeadingLineholder2="title1HeadingLineholder2"
            title1ContainerMainContainer2="title1ContainerMainContainer2"
            lineHolderColor2="lineHolderDesign lineHolderColor"
            lineHolderColor="rotate lineHolderDesign lineHolderColor"
            title1Heading="title1Heading"
            title1HeadingContant="title1HeadingContant"
            contantValueContainer="contantValueContainer"
            contantNocontainer="contantNocontainer"
            title1DetailContainer2="title1DetailContainer2"
            title1MainHeading="title1MainHeading"
            title1HeadingH1A="title1HeadingH1A fontSizeMax"
            title1HeadingH1G="textgreadent7 "
            title2SnoValue="06"
            title2SnoHeadingValue="VETTING"
            title2MainHeadingValue="Ready to Get"
            title2MainHeadingValueG="Started?"
          />
          <div className="cardDivider">
            <Card7 lineHolderColor="lineHolderDesign lineHolderColor bg-2" />
            <Card7 lineHolderColor="lineHolderDesign lineHolderColor bg-2" />
          </div>
        </div>

        <div className="section bg-5">
          <Footer />
        </div>
      </div>
      {/* <div className='container'>
        <div className='container1'>
        </div>
      </div> */}
      {/* <div className="container1">
      </div> */}
    </>
  );
};
export default App;
