import React from 'react'
function MainContent(){
   const date = new Date()
   const hours = date.getHours()
   let timeOfDay 
   const styles = {
    backgroundColor : "#32376b",
    fontSize : 24
}
   if(hours<12){
       timeOfDay = "morning"
       styles.color = "#1abc9c"
   } else if(hours>=12 && hours<17){
       timeOfDay = "afternoon"
       styles.color = "#e74c3c"
   } else {
       timeOfDay = "night"
       styles.color = "#2c3e50"
   }
   
    return (
    <h1 style={styles}>it's {hours % 12} o'clock. good {timeOfDay}</h1>
   )
}
export default MainContent;