import { Card, Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from './component/Cards';
import Person from "./asset/icons8-person-64.png"
import Modal from './component/Modal';
import { Button1, Button2, Button3 } from './component/Button';
import { Title1Container, Title2Container } from './component/Title';
import fingerImg from "./asset/fingerprint.png"
import './App.css';
const App = () => {

  return (
    <>
      <div className='mainContainer'>
        <Modal modalMainConatiner="modalMainConatiner" modalMainBody="modalMainBody ModalBackDesign modalBackDesigncolor" modalContantContainer="modalContantContainer" modalHeadingMain="modalHeadingMain" btnvalue="Hire Now!" classBtn1="classBtn1" classBtn1Animation="classBtn1Animation" modalHeading="modalHeading" modalHeadingGreadent1="modalHeadingGreadent1" modalHeadingGreadent2="modalHeadingGreadent2" modalDetail="modalDetail" btnContainer="btnContainer" modalRelative="modalRelative" modalCircleImage1="modalCircleImage1" modalCircleImage2="modalCircleImage2" modalCircleImage3="modalCircleImage3" modalCircleImage4="modalCircleImage4" modalCircleImage5="modalCircleImage5" modalCircleImage6="modalCircleImage6" modalCircleImage7="modalCircleImage7" modalCircleImage8="modalCircleImage8" modalCircleImage9="modalCircleImage9" imageCircle1="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-03-p-500.jpeg" imageCircle2="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/testimonial-01-bright-webflow-uikit-p-500.jpeg" imageCircle3="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-03.jpg" imageCircle4="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-closeup-woman-02.jpg" imageCircle5="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-landscape-03-p-500.jpeg" imageCircle6="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02_1.jpg" imageCircle7="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-02-p-500.jpeg" imageCircle8="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01-p-500.jpeg" imageCircle9="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/avatar-01_1.jpg" modalValue1="Hire" modalValueG1="Remote" modalValueG2="Unicorn" modalValue2="Devs" modalValueDetal="Get matched with our elite group of hand-selected & rigorously vetted Unicorn Devs, assigned to you in 24 hours." />
        <div className='section'>
          <Title1Container title1HeadingLineholder="title1HeadingLineholder" title1ContainerMainContainer="title1ContainerMainContainer" lineHolderColor="lineHolderDesign lineHolderColor" title1Heading="title1Heading" title1HeadingContant="title1HeadingContant" contantValueContainer="contantValueContainer" contantNocontainer="contantNocontainer" title1DetailContainer="title1DetailContainer" title1Image="title1Image" title1ImageSrc={fingerImg} title1MainHeading="title1MainHeading" title1HeadingH1="title1HeadingH1" title1HeadingH1G="textgreadent4" title1Detail="title1Detail" title1SnoValue="01" title1SnoHeadingValue="Get Start" title1MainHeadingValue="Steps to Hire" title1MainHeadingValueG="Talent" title1DetailValue="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time." />
          <div className='sectionA'>
            <Card cardContainer="cardContainer" layoutCard="layoutCard left" cardImageContainer="cardImageContainer boxGreadent2" imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png" cardDataContainer="cardDataContainer" heading="cardheading" textgreadent1="textgreadent1" headingvalue="Tell Us What" headingvalueG="You Need" paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent." />
            <Card cardContainer="cardContainer" layoutCard="layoutCard right" cardImageContainer="cardImageContainer boxGreadent3" imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png" cardDataContainer="cardDataContainer" heading="cardheading" textgreadent1="textgreadent2" headingvalue="Tell Us What" headingvalueG="You Need" paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent." />
            <Card cardContainer="cardContainer" layoutCard="layoutCard left" cardImageContainer="cardImageContainer boxGreadent4" imageSource="https://www.florin-pop.com/static/580a39549812457188f2acf1b8459d3f/47cd0/profile-card-design.png" cardDataContainer="cardDataContainer" heading="cardheading" textgreadent1="textgreadent1" headingvalue="Tell Us What" headingvalueG="You Need" paragvalue="Let us know your development needs, whether it's an individual developer or an entire tech team, we're here to help! A consultant will reach out to you to understand your requirements better prior to sourcing your talent." />
          </div>
          <Title1Container title1HeadingLineholder="title1HeadingLineholder" title1ContainerMainContainer="title1ContainerMainContainer" lineHolderColor="lineHolderDesign lineHolderColor" title1Heading="title1Heading" title1HeadingContant="title1HeadingContant" contantValueContainer="contantValueContainer" contantNocontainer="contantNocontainer" title1DetailContainer="title1DetailContainer" title1Image="display-none" title1MainHeading="title1MainHeading" title1HeadingH1="title1HeadingH1" title1HeadingH1G="textgreadent5" title1Detail="title1Detail" title1SnoValue="01" title1SnoHeadingValue="Get Start" title1MainHeadingValue="Steps to Hire" title1MainHeadingValueG="Talent" title1DetailValue="We provide a simple & straightforward hiring process to help you find highly-skilled remote tech talent in record time." />
        </div>
        <div className='section1'>
          <div className='section1A'>
            <div className='section2Divider'>
              <div className='divider1'>
                <Card3 card3Container="card3Container" card3greadentBox="card3greadentBox boxGreadent1" card3greadentArea="card3greadentArea" card3Btn="card3Btn" classBtn2="classBtn2" Btnvalue="Hire Here" card3DetailContainer="card3DetailContainer" card3Detail1="card3Detail1" card3Detailtext="card3Detailtext" card3haeding="Flat" card3SalaryValue="$40/hour" card3TimeValue="Per hour" disImgScr1={Person} disImgScr2={Person} disImgScr3={Person} disImgScr4={Person} disImgScr5={Person} disPoint1="Senior talent with minimum 5 years experience" disPoint2="Talent pool consists of experts covering all areas of programming languages" disPoint3="Fully-vetted talents to ensure quality of service" disPoint4="7-day risk-free trial!" disPoint5="Flexible contracts" disheading="Includes" card3_D_C_Area="card3_D_C_Area" />
              </div>
              <div className='divider2'>
                <div className='divider2container'>
                  <div className='divider2heading'>
                    <h6>Flat, simple pricing for all</h6>
                    <h1>Simple Pricing to Suit Businesses of all Sizes.</h1>
                  </div>
                  <div className='divider2card'>
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                    <Card2 card2Container="card2Container" card2ImgArea="card2ImgArea" card2ImgSrc={Person} card2HeadingValue="Find Talent in 24 Hours" card2DetailValue="Whether your requirement is part-time, full-time or you need to outsource an entire project, we can offer you a customized solution   " />
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className='section'>
          <Title2Container title1HeadingLineholder2="title1HeadingLineholder2" title1ContainerMainContainer2="title1ContainerMainContainer2" lineHolderColor2="lineHolderDesign lineHolderColor" lineHolderColor="rotate lineHolderDesign lineHolderColor" title1Heading="title1Heading" title1HeadingContant="title1HeadingContant" contantValueContainer="contantValueContainer" contantNocontainer="contantNocontainer" title1DetailContainer2="title1DetailContainer2" title1MainHeading="title1MainHeading" title1HeadingH1A="title1HeadingH1A" title1HeadingH1G="textgreadent2  " title2SnoValue="03" title2SnoHeadingValue="TALENT" title2MainHeadingValue="Some of Our " title2MainHeadingValueG="Talents" />
          <div className='sectionDividerA'>
            <Card1 card1Container="card1Container" card1Img="card1Img" card1Name="card1Name" card1Experience="card1Experience" card1NameValue="Clement Ong" card1ExperienceValue="Fullstack JS dev with 7 years of experience" card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1599542157386.jpeg " />
            <Card1 card1Container="card1Container" card1Img="card1Img" card1Name="card1Name" card1Experience="card1Experience" card1NameValue="Thien Jason" card1ExperienceValue="Fullstack JS dev with 8 years of experience" card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1517353617929.jpeg " />
            <Card1 card1Container="card1Container" card1Img="card1Img" card1Name="card1Name" card1Experience="card1Experience" card1NameValue="Rob Legaspi" card1ExperienceValue="Fullstack JS dev with 6 years of experience" card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/1601042335818-p-500.jpeg " />
            <Card1 card1Container="card1Container" card1Img="card1Img" card1Name="card1Name" card1Experience="card1Experience" card1NameValue="Long Trang" card1ExperienceValue="Fullstack JS dev with 9 years of experience " card1ImgSource="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/LongTran-Spring2017.jpeg" />
          </div>
        </div>

        <div className='section'>
          <Title2Container title1HeadingLineholder2="title1HeadingLineholder2" title1ContainerMainContainer2="title1ContainerMainContainer2" lineHolderColor2="lineHolderDesign lineHolderColor" lineHolderColor="rotate lineHolderDesign lineHolderColor" title1Heading="title1Heading" title1HeadingContant="title1HeadingContant" contantValueContainer="contantValueContainer" contantNocontainer="contantNocontainer" title1DetailContainer2="title1DetailContainer2" title1MainHeading="title1MainHeading" title1HeadingH1A="title1HeadingH1A textreadent2" title1HeadingH1G1="textgreadent4" title2SnoValue="04" title2SnoHeadingValue="PODCAST" title2MainHeadingValue="Founder Story" title2MainHeadingValueG=" Podcast" />
          <div className='sectionDividerA'>
            <Card5 card5Container="card5Container" card5Img="card5Img" card5detail="card5detail" card5Video="card5Video" />
            <Card5 card5Container="card5Container" card5Img="card5Img" card5detail="card5detail" card5Video="card5Video" />
            <Card5 card5Container="card5Container" card5Img="card5Img" card5detail="card5detail" card5Video="card5Video" />
          </div>
          <div className='sectionABtn1'>
            <Button3 classBtn3="classBtn3" value="Visit FounderStory Podcast Site" />
          </div>
        </div>

        <div className='section bg-1'>
          <Title2Container title1HeadingLineholder2="title1HeadingLineholder2" title1ContainerMainContainer2="title1ContainerMainContainer2" lineHolderColor2="lineHolderDesign lineHolderColor" lineHolderColor="rotate lineHolderDesign lineHolderColor" title1Heading="title1Heading" title1HeadingContant="title1HeadingContant" contantValueContainer="contantValueContainer" contantNocontainer="contantNocontainer" title1DetailContainer2="title1DetailContainer2" title1MainHeading="title1MainHeading" title1HeadingH1A="title1HeadingH1A textreadent2" title1HeadingH1G1="textgreadent4" title2SnoValue="04" title2SnoHeadingValue="PODCAST" title2MainHeadingValue="Skills" title2MainHeadingValueG="  We Offer" />

          <div className='sectionAContainer'>
            <div className='sectionDividerA'>
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
              <Card4 card4Container="card4Container" card4ContantArea="card4ContantArea" card4Img="card4Img" card4detail="card4detail" card4ImgSrc="https://d5gp1bgprhhde.cloudfront.net/wp-content/themes/unicorn-code/images/download-4.svg" card4Value="React" />
            </div>
          </div>
        </div>








      </div>
      {/* <div className='container'>
        <div className='container1'>
        <Card3 card3Container="card3Container" card3greadentBox="card3greadentBox boxGreadent1" card3greadentArea="card3greadentArea" card3Btn="card3Btn" classBtn2="classBtn2" Btnvalue="Hire Here" card3DetailContainer="card3DetailContainer" card3Detail1="card3Detail1"card3Detailtext="card3Detailtext"/>
        <Card6 headingValue="coding " card6DetailValue="A timed live coding challenge that helps evaluate" card6Sno="02" card6SnoHeading="step"/>
        </div>
      </div> */}
      {/* <div className='container1'>
      </div> */}

    </>
  )
}
export default App;