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

export default Button1;