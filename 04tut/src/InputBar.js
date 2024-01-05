import colorNames from 'colornames'; 

const InputBar = (
    {colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}
) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Color Name:</label>
            <input 
                autoFocus
                type='text'
                placeholder='Add color name'
                required
                value={colorValue}
                // Sets state of colorValue to whatever is typed into form.
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value)); 
                }}
            />
            <button
                // When clicked, the font of the dispay will change from either
                // black or white. 
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default InputBar