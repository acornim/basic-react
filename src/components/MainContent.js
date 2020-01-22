import React from 'react'
import ToDoList from './ToDoList'
import Joke from './Joke'
function MainContent(){
   
    return (
        <div>
            <Joke
            
            punchline="I am also a geek"
            />
            <Joke
            question="I am not just a nerd" 
            punchline="I am also a geek"
            />
            <Joke
            question="A baby seal walks into a club...:"
            punchline="Ouch."
            />
            <Joke
            question="Why did the mermaid wear sea shells?"
            punchline="She grew out of her B-Shells."
            />
            <Joke
            question="What do you call a nosy pepper?"
            punchline="Jalapeno business!"
            />
            <Joke
            question="Did you hear about the red ship and the blue ship that collided?"
            punchline="All of the sailors were marooned."
            />
        </div>
   )
}
export default MainContent;