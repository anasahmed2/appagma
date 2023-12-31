import LineHolder from "../Line Holder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Title1Container = ({
  title1ContainerMainContainer,
  title1Heading,
  title1HeadingContant,
  title1HeadingLineholder,
  title1DetailContainer,
  lineHolderColor,
  title1ImageSrc,
  contantNocontainer,
  contantValueContainer,
  title1Image,
  title1MainHeading,
  title1HeadingH1,
  title1HeadingH1G,
  title1Detail,
  title1SnoValue,
  title1SnoHeadingValue,
  title1MainHeadingValue,
  title1MainHeadingValueG,
  title1DetailValue,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={title1ContainerMainContainer}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={title1Heading}
        >
          <div className={title1HeadingContant}>
            <div className={contantNocontainer}>{title1SnoValue}</div>
            <div className={contantValueContainer}>
              · {title1SnoHeadingValue}
            </div>
          </div>
          <div className={title1HeadingLineholder}>
            <LineHolder lineHolderColor={lineHolderColor} />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          className={title1DetailContainer}
        >
          <div className={title1Image}>
            <img src={title1ImageSrc} />
          </div>
          <div className={title1MainHeading}>
            <h1 className={title1HeadingH1}>
              {title1MainHeadingValue}{" "}
              <span className={title1HeadingH1G}>
                {title1MainHeadingValueG}
              </span>
              .
            </h1>
            <div className={title1Detail}>
              <p>{title1DetailValue}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Title2Container = ({
  lineHolderColor2,
  title1ContainerMainContainer2,
  title1Heading,
  title1HeadingContant,

  title1DetailContainer2,
  lineHolderColor,
  contantNocontainer,
  contantValueContainer,
  title1MainHeading,
  title1HeadingH1A,
  title1HeadingH1G,
  title2SnoValue,
  title2SnoHeadingValue,
  title2MainHeadingValue,
  title2MainHeadingValueG,
  title1HeadingH1G1,
}) => {
  return (
    <>
      <div className={title1ContainerMainContainer2}>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className={title1Heading}>
          <div className="title1HeadingLineholder2">
            <LineHolder lineHolderColor={lineHolderColor} />
          </div>
          <div className={title1HeadingContant}>
            <div className={contantNocontainer}>{title2SnoValue}</div>
            <div className={contantValueContainer}>
              · {title2SnoHeadingValue}
            </div>
          </div>
          <div className="title1HeadingLineholder2">
            <LineHolder lineHolderColor={lineHolderColor2} />
          </div>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className={title1DetailContainer2}>
          <div className={title1MainHeading}>
            <h1 className={title1HeadingH1A}>
              <span className={title1HeadingH1G1}>
                {title2MainHeadingValue}{" "}
              </span>
              <span className={title1HeadingH1G}>
                {title2MainHeadingValueG}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export { Title1Container, Title2Container };
