import Todo from "./Todo";

export default function TodoList(){

    const data = [
        {
            id : 0,
            text : "Learn HTML",
            isCompleted : "true"
        },
        {
            id : 1,
            text : "Learn CSS",
            isCompleted : "true"
        },
        {
            id : 2,
            text : "Learn JavaScript",
            isCompleted : "true"
        },
        {
            id : 3,
            text : "Learn ReactJS",
            isCompleted : "false"
        },
        {
            id : 4,
            text : "Learn ReactJStoken",
            isCompleted : "false"
        }
    ]
    

    return(
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}
        </ul>
    )
}