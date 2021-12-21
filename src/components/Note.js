import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Note({ title, content, onDelete, id }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>
                <DeleteOutlineIcon />
            </button>
        </div>
    )
}
export default Note