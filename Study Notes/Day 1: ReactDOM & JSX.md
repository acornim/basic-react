# DAY 1
# What is React?
- Component
- JSX
- Virtual DOM
Ref : https://medium.com/@RianCommunity/react의-탄생배경과-특징-4190d47a28f



# ReactDOM and JSX
Ref : https://www.youtube.com/watch?v=BYbgopx44vo 
- react-dom library : render(what do I want to render, where do I want to render it)
- only single JSX is able to use!! you have to wrapp it up! 
- react library : able to use JSX 

## How does React works?
1. empty html is loaded. 
2. react pushes components which you wrote to html
3. react dom adds or remove it with virtualdom

### Practice 1


```
//Objective: Fill in the boilerplate React code required to render an
//unordered list (<ul>) to the page. The list should contain 3 list items
//(<li>) with anything in them you want.

//HINTS:
//import the libraries you need first
//use one of the libraries to render some JSX to the page

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<ul>
                    <li>eat</li>
                    <li>pray</li>
                    <li>love</li></ul>,
                    document.getElementById('root'));

```
## Reusable web components
- if first argument of render() is large, readability goes down (보기 안이쁨ㅎ.ㅎ)
- Let's use functional components! 
    * Don't forget to use a capital letter for function name.(MyApp)
    * JSX must contain one parent element. Wrap up the whole components.
```
import React from 'react'
import ReactDOM from 'react-dom'
function MyApp(){
    return (<ul>
                <li>eat</li>
                <li>pray</li>
                <li>love</li>
            </ul>)
}
ReactDOM.render(<MyApp />,document.getElementById('root'));
```

### Practice 2
```
// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
    // a. An h1 with your name
    // b. A paragraph with a little blurb about yourself
    // c. An ordered or unordered list of the top 3 vacation spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(){
    return (
        <div>
        <h1>yoon</h1>
        <p>fall in love with traveling</p>
        <ul>
            <li>Jeju</li>
            <li>my sweet home</li>
            <li>Korea</li>
        </ul>
        </div>
    )
}
ReactDOM.render(<MyInfo/>,document.getElementById('root'));
```
