import React from "react";
import Title from "../components/Title";
import AddLi from "../components/AddLi";
import TodoLi from "../components/TodoLi";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            todos: []
        };
        this.handleAddedDataFn = this.handleAddedData.bind(this);
        this.handleRemoveDataFn = this.handleRemoveData.bind(this);
    } 

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() { 
        console.log('componentDidMount');

        const returnedtext = "To do list";
        const returnedtodos = [
            "이것도 해야 되고1",
            "저것도 해야 되고2",
            "그것도 해야 되고3",
            "언제 다 하나4"
        ];
//debugger;
        this.setState((prevState) => {
            return {
                text: returnedtext,
                todos: returnedtodos
            };
        });
    }

    componentWillReceiveProps() {
        console.log('compoentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleAddedData(todo) {
        this.setState((prevState) => {
            const todos = prevState.todos;
            todos.push(todo);

            return {
                todos: todos
            }
        });
    }

    handleRemoveData(todo) {
        this.setState((prevState) => {
            const todos = prevState.todos;
            const index = todos.indexOf(todo);
            todos.splice(index, 1);

            return {
                todos: todos
            }
        });
    }
    
    render() {
        console.log('render');
        const todoLi = this.state.todos.map((todo, idx) => {
            return (
               <TodoLi todo={todo} key={"todo" + idx} handleRemoveData={this.handleRemoveDataFn} />
            );
        });

        return(
            <div className="container">
                <Title text={this.state.text} />
                <AddLi handleAddedData={this.handleAddedDataFn} />
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Todo;