import {Button1} from "../Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Modal = ({ modalMainConatiner, modalMainBody, modalContantContainer, modalHeading,modalValue1,modalValue2,modalValueG1,modalValueG2, modalHeadingGreadent1, modalHeadingGreadent2, modalHeadingMain, modalDetail, btnContainer, classBtn1, btnvalue, classBtn1Animation, modalRelative, modalCircleImage1, modalCircleImage2, modalCircleImage3, modalCircleImage4, modalCircleImage5, modalCircleImage6, modalCircleImage7, modalCircleImage8, modalCircleImage9, imageCircle1, imageCircle2, imageCircle3, imageCircle4, imageCircle5, imageCircle6, imageCircle7, imageCircle8, imageCircle9,modalValueDetal }) => {
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <>
            <div className={modalMainConatiner}>
                <div className={modalRelative}>
                    <img src={imageCircle1} alt="ModalCircleImage" className={modalCircleImage1} />
                    <img src={imageCircle2} alt="ModalCircleImage" className={modalCircleImage2} />
                    <img src={imageCircle3} alt="ModalCircleImage" className={modalCircleImage3} />
                    <img src={imageCircle4} alt="ModalCircleImage" className={modalCircleImage4} />
                    <img src={imageCircle5} alt="ModalCircleImage" className={modalCircleImage5} />
                    <img src={imageCircle6} alt="ModalCircleImage" className={modalCircleImage6} />
                    <img src={imageCircle7} alt="ModalCircleImage" className={modalCircleImage7} />
                    <img src={imageCircle8} alt="ModalCircleImage" className={modalCircleImage8} />
                    <img src={imageCircle9} alt="ModalCircleImage" className={modalCircleImage9} />

                    <div className={modalMainBody}>
                        <div className={modalContantContainer}>
                            <div className={modalHeadingMain}>
                                <div className={modalHeading}>
                                    <h1>{modalValue1} <span className={modalHeadingGreadent1}>{modalValueG1} </span><span className={modalHeadingGreadent2}>{modalValueG2}</span>{modalValue2}.</h1>
                                </div>
                            </div>
                            <div className={modalDetail}>
                                <p>{modalValueDetal}</p>
                            </div>
                            <div className={btnContainer}><Button1 classBtn1={classBtn1} value={btnvalue} classBtn1Animation={classBtn1Animation} /></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Modal;