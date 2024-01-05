import ColorDisplay from './ColorDisplay';
import InputBar from './InputBar'; 
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState(''); 
  const [isDarkText, setIsDarkText] = useState(1); 

  return (
    <div className="App">
      <ColorDisplay
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputBar
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
