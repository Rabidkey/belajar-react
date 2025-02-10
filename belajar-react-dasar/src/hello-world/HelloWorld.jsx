export default function HelloWorld(){
    return(
        <div>
          <HeaderParagraph text="Hello World"/>
          <Paragraph/>
        </div>
    )
}

function HeaderParagraph({text= "Lorem Ipsum sir dolor amet"}){
    return(
        <h1 style= {{
            color: "#4F4A41",
            backgroundColor: "#88BDBC"
        }}>{text.toUpperCase()}</h1>
    )
}

function Paragraph(){
    const text = "Belajar reactjs dari Programmer Zaman Now"
    const style = {
        color: "white",
        backgroundColor: "#254E58"
    }
    return(
        <p style= {style}>{text.toLowerCase()}</p>
    )
}