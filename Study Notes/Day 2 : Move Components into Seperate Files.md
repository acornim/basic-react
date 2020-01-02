# Move Components into Seperate Files
RULE
React files : Start with Capital letter 
- component는 html을 리턴!! 

## index.js
- Don't forget to import your own component's path
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App />,document.getElementById('root'));
```
## Root Component 
### App.js
- Render a root component which is App.js
- Import it's child components. 
- Don't forget to export your own component's path
- ES6 Grammar 
```
import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import MyInfo from './components/MyInfo'
function App() {
  return (
    <div>
    // 👇
      <Header />
      <MyInfo />
      <Footer />
    </div>
      
  );
}

export default App;
```
## Seperate files 
### MyInfo.js
- Main Content🔥
```
import React from 'react';
import ReactDOM from 'react-dom';

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

export default MyInfo;
```

### Header.js & Footer.js 
```
import React from 'react'

function Header(){
    return (
        <header>
            <p>this is a header. my header needs a hat.</p>
        </header>
    )
}
export default Header;
```
```
import React from 'react'

function Footer(){
    return (
        <footer>this is footer. footer needs shoes.</footer>
    )
}

export default Footer;
```
