import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Rightbar from './components/rightbar/Rightbar';


function App() {
  const currentUser = false;
  const Layout = () =>{
    return(
      <div>
      <Navbar />
      <div style={{display: "flex"}}>
        <Leftbar/>
        <div style={{flex: 6}}>
        <Outlet />
        </div>

        <Rightbar />
      </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }else{
      return children
    }
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      }
    ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
