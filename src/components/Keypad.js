// Code Keypad Component Here

function Keypad (){
    const handlechange = () =>{
        console.log("EnteringPassword...")
    }
    return (
        <div>
            <input type="password" onChange={handlechange}/>
        </div>
    )
}

export default Keypad;