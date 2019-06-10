import React from "react"
import Layout from "../components/layout"
import { useIdentityContext } from "react-netlify-identity-widget"

export default () => {
  const identity = useIdentityContext()
  console.log("This is the index page.")
  return (
    <Layout>
      Hello world! You can use identity info anywhere in your app:{" "}
      <pre>{JSON.stringify(identity, null, 2)}</pre>{" "}
    </Layout>
  )
}
