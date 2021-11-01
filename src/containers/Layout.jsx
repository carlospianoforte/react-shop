import React from 'react'

const Layout = ({children}) => {//layout es el padre y recibe los demas componentes hijos
    return (
        <div className="Layout">
            {children}
        </div>
    )
}

export default Layout
