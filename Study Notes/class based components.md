## Classed based components
- 지금까지는 function components 썼지만 ES6 class로도 컴포넌트를 만들 수 있다!
- props 쓸 때, this.props.whatever 처럼 this 붙이는 거 까먹지 말기!! 
- extends React.Component 붙이는 것도! 
```
import React, {Component} from "react"
import ReactDOM from "react-dom"

// #1
function App(){
    return (div>
                <Header username=""/>
                <Greeting />
            </div>)
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header username=""/>
                <Greeting />
            </div>
        )    
    }
}

// #2

function Header(props){
    return (
         <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
    )
}
class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )    
    }
}

// #3
function Greeting(){
    const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
    return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
}
class Greeting extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))

```