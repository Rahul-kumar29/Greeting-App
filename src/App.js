import React from 'react';

let greeting = "";
const cssStyle = {};
let curDate = new Date();
curDate = curDate.getHours();

if (curDate >= 24 && curDate <= 12) {
  greeting = 'Good Morning'
  cssStyle.color = 'green'
} else if (curDate >= 12 && curDate <= 19) {
  greeting = 'Good Afternoon'
  cssStyle.color = 'orange'
} else {
  greeting = 'Good night'
  cssStyle.color = 'blue'
}

function App() {
  return (
    <>
    <div>
      <h1> Hello Sir, <span style={cssStyle}> {greeting} </span> </h1>
    </div>
  </>
  );
}

export default App;
