const Numbers = ({number}) => {
    return(
    <div className="numbers">
        {number.map((item)=>(
            <button>{item}</button>
        ))}
    </div>
    )
}
export default Numbers;