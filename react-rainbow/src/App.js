import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'

function App(){
    let [colors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])
    

    return (
      <div className="App">
    {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
    ))}
</div>

    )
}

export default App;
