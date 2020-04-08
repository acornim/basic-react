//https://scrimba.com/p/p7P5Hd/cgDqBHP
import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    //큰 실수 !! prevState 변경하고 있었음 
                    //todo.completed = !todo.completed
                    return {
                        ...todo, //todo 있는 property 다 줘!!
                        completed : !todo.completed
                    }
                }
                return todo
            })
            //요길루 확인 가능
            console.log(prevState.todos)
            console.log(updatedTodos)
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App