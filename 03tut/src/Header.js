import React from 'react'

// Component function allows us to pass in props
const Header = ({ title }) => {
  return (
    // Props holds all the different properties from the parent component
    // passed onto the child component. 
    <header>
        <h1>{title}</h1>
    </header>
  )
}

// Default props initializes values to expected props
Header.defaultProps = {
  title: "Default Title"
}

export default Header;
