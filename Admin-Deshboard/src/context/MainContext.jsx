import React, { createContext, useEffect, useState } from 'react'

export let loginContext = createContext()
export const MainContext = ({ children }) => {

  const [adminID, setAdminID] = useState(localStorage.getItem("ADMINID") ?? "")

  useEffect(() => {
    localStorage.setItem("ADMINID", adminID)
  }, [adminID])

  let obj = {
    adminID,
    setAdminID
  }

  return (
    <loginContext.Provider value={obj}>{children}</loginContext.Provider>
  )
}
