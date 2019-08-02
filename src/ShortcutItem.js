import React from 'react';

function ShortcutItem (props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "lightblue",
        textDecoration: "line-through"
    }
    return (
        <div className="shortcut-item">
        <input type="checkbox" checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}/>
        <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default ShortcutItem;