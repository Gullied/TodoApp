import React from "react"
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Todo = ({text, updateIcon, deleteIcon}) => {
    return (
        <div className="todo">

            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateIcon}/>
                <AiFillDelete className="icon" onClick={deleteIcon}/>
                 </div>
        </div>
    )}

    export default Todo