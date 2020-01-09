import React from 'react'
import ToDoList from './ToDoList'
import ContactCard from './ContactCard'
function MainContent(){
   
    return (
    // <div className="todo-list">
    // <ToDoList/>
    // <ToDoList/>
    // <ToDoList/>
    // </div>

    <div className="contacts">
        <ContactCard 
        contacts ={{name : "soyun", imgUrl:"http://placekitten.com/400/200",contact:"111-1111-1111",email:"dd@gmail.com" }}
        
        />
        {/* <ContactCard 
        name = "kim"
        contact = "111-1111-1234"
        email = "123@gmail.com"
        imgUrl = "http://placekitten.com/400/200"
        />
         
         <ContactCard 
        name = "lee"
        contact = "111-2222-3333"
        email = "asdfg@gmail.com"
        imgUrl = "https://ichef.bbci.co.uk/news/660/cpsprodpb/BEEB/production/_108557884_gettyimages-486237421.jpg"
        />
         <ContactCard 
        name = "park"
        contact = "111-2234-5667"
        email = "qwer@gmail.com"
        imgUrl = "https://ichef.bbci.co.uk/news/660/cpsprodpb/BEEB/production/_108557884_gettyimages-486237421.jpg"
        /> */}
    </div>
    
   )
}
export default MainContent;