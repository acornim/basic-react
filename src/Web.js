import React from 'react'
import todoDatas from './components/todosData'
import TodoItem from './cmpmine/TodoItem'

class  Web extends React.Component{
    constructor(){
        super()
        this.state = {
            todos : todoDatas
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(id){
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

    render(){
        const todoItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} clickHandler ={this.clickHandler} />)
        return (
                
            <div className='todo-list'>
                {todoItem}
            </div>
                //<TodoItem />
            )
    }
    
}
export default Web