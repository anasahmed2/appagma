const Button1 = ({ value, classBtn1, classBtn1Value, classBtn1Animation }) => {
    return (
        <>
            <button className={classBtn1}>
                <div className={classBtn1Value}>
                    {value}
                </div>
                <div className={classBtn1Animation}></div>

            </button>
    

       
        </>
    )
}
const Button2 = ({ value, classBtn2 }) => {
    return (
        <>
            <button className={classBtn2}>
                    {value}
            </button>
        </>
    )
}

export {Button1, Button2};