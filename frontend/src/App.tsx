import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <p>Home Page</p>
            </Layout>
            } 
          />
          <Route path="/search" element={            
            <Layout>
              <p>Search Page</p>
            </Layout>
            } 
          />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
  )
}

export default App
