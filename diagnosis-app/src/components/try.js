import React from 'react'

function App() {
    const [user, setUser] = React.useState(null);
    const [authState, setAuthState] = React.useState(null);

    if (authState == null){
        return (
        <h1>Loading .....</h1>
        )
    }
  
}

export default App