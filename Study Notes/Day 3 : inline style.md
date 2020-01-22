### inline style
- curly braces 써야함. 다 wrap up 해주기 -> 안쪽 {}는 object로 만들어주었다 바깥 {}로 감싸지면 JS라는 의미
- JS에서는 -(dash)쓰지 못함. 그래서 -대신 대문자로 쓰기
- 예: background-color 는 backgroundColor로 바꿔줘야함
- JSX 안에서 style 길어지면 너무 가독성 떨어짐
- 그래서 const로 따로 변수 만들어주자! 

```
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
```

- 조건문으로 스타일링도 가능하다. question prop이 없다면 첫번째 줄 h3은 출력되지 않고 두번째줄 색상도 바뀐다.
```
<h3 style={{display:!props.question && "none"}}>Question: {props.question}</h3>
<h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchline}</h3>
```
이 코드는 아래와 같다. 
```
display:props.question ? "blocked" : "none"
```