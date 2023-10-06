import "./style.css";

function F1()
{
    const myStyle = {
        color: "blue",
        backgroundColor:"orange"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline CSS</h1>
            <h1 style={myStyle}>Internal CSS</h1>
            <h1 class="c1">External CSS</h1>
            <h1 class="text-danger bg-warning">Bootstrap Style</h1>
        </div>
    )
}

export default F1;