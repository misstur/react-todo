import React from "react";

const TodoLi = (props) => {
    const onClickRemoveButton = () => {
        //console.log(this.props.todo);
        props.handleRemoveData(props.todo);
    };

    return (
        <li>
            <span>{props.todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemoveButton}>삭제</a>
            </span>
        </li>
    );
};

export default TodoLi;