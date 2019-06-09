import React from "react"
import { useIdentityContext } from "react-netlify-identity-widget"

const Layout = ({ children }) => {
  const identity = useIdentityContext()

  console.log(JSON.stringify(identity))

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
