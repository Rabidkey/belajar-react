import "./HelloWorld.css"

export default function HelloWorld(){
    const props = {
        text : "Hello World from spread sintax"
    }
    return(
        <div>
          <HeaderParagraph {...props}/>
          <Paragraph/>
        </div>
    )
}

function HeaderParagraph({text= "Lorem Ipsum sir dolor amet"}){
    return(
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

function Paragraph(){
    const text = "Belajar reactjs dari Programmer Zaman Now"
    return(
        <p className="content">{text.toLowerCase()}</p>
    )
}