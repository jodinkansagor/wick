import React, { useState } from "react"

const initialState = {
  openDrawer: false,
  toggleDrawer: undefined
}

const WickContext = React.createContext(initialState)

const ContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }


  return (
    <WickContext.Provider value={openDrawer, toggleDrawer}>
      {children}
    </WickContext.Provider>
  )
}


export { WickContext, ContextProvider };