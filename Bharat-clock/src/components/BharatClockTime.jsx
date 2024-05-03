// function BharatClockTime() {
//   let date = new Date();
//     <div className="BharatClock-time">
//     <p>This is the clock that shows time in Bharat at all times</p>
//     <p className="BharatClock-date">This is the current time: {date}</p>
// </div>
// }

// let's use the arrow function

let BharatClockTime = () => {
    let date = new Date();
    return (
        <div className="BharatClock-time">
            <p>This is the clock that shows time in Bharat at all times</p>
            {/* <p className="BharatClock-date">This is the current time: {date}</p> */}
            {/* 
                ERROR
                Objects are not valid react child

                yahan jo date hai vo ek object return hokar aa rahi hai Date() function se

                so we need to convert it into the string
            */}
            <p className="BharatClock-date">This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()} </p>
        </div>
    )
}

export default BharatClockTime;