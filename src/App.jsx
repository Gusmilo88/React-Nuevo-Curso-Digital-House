import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MainLayout from "./layouts"
import AppRoutes from "./routes"

function App() {

  return (
    <MainLayout>
      <AppRoutes/>
    </MainLayout>
  )
}

export default App