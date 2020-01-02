## Day 2 : Styling React with CSS classes
- JSX에서는 className 사용!!! class 쓰면 안돼! 

### Navbar.js
```
import React from 'react'

function Navbar(){
    return (
        //👇className
        <header className='navbar'>hi i'm a navbar</header>
    )
}
export default Navbar;
```

### style.css
```
body {
    margin: 0;
}

.navbar {
    height: 100px;
    background-color: #333;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

```

### index.html
- style.css 넣는거 잊지말기!
```
<html>
    <head>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>
```