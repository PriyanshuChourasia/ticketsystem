import Layout from "@/app/layout"
import { Outlet } from "react-router-dom"

const AppDashboard = () => {

  

  return (
    <>
      <Layout>

        <Outlet/>
 
      </Layout>
    </>
  )
}

export default AppDashboard
