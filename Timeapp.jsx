import React,{useState, useEffect} from 'react'

function Timeapp() {


    const [time, setTime] = useState(new Date())


    useEffect(()=>{

        const interval = setInterval(()=>{ 
            setTime(new Date()) //setINterval() is the inbuilt function  and the function passed to this function is triggered according the time interval passed as the argument.            setTime(new Date())
 
        },1000)      //the arrow function will be triggered and executes for every sec as we mentioned the time to 1000 then new Date() will be in update state for every second

        return () => {

            clearInterval(interval)  // this is clean up code which is used to clean when unmounting is happens or when component is removed from dom.
        }

    },[])
    function handletime() {
        let hours = time.getHours() // getting the hours and   with getHours() and time == new Date() constructor
        const minutes = time.getMinutes() // getting minutes 
        const seconds = time.getSeconds() // getting seconds 
        const meridian = hours>=12 ? "PM":"AM" //getting  meridian PM or AM

        hours = hours % 12 || 12  // converting hours into understandble time format.
        
        return `${convert(hours)}:${convert(minutes)}:${convert(seconds)}:${meridian}`  //here evry thing returned so when the function is called then this can be visble into the dom


    }

    function convert(input) {

        return (input<10 ? "0"  :"" ) + input


    }

    return(// this is the Dom and UI 
        <div className='container'> 
            <div className='clock-container'>

                <span>{handletime()}</span>

            </div>
        </div>
    )
}

export default Timeapp
