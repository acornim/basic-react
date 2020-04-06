## State 
- props는 수정이 되지 않지만, state는 가능하다. <- class based component로 사용 가능!
- state는 옷을 갈아입는 것이랑 똑같다. 상태를 변경하려면 옷을 찢거나 뭘하거나 하는 게 아니라 옷 자체를 바꿔입어야한다. 
- state 상태를 바꾸기 위해서 setState 를 사용한다. (this.setState)
- class method에서  setState 사용하려면 bind 해야함!
```
this.handleClick = this.handleClick.bind(this)
```
- this 쓰는 거 잊지말자!
```
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state ={
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
       this.setState(prevState => {
           return {count : prevState.count+1}
       })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default App
```