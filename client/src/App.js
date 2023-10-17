import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Rightbar from './components/rightbar/Rightbar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getAuthUser } from './helpers/functions';
import Users from './components/users/Users';
import Games from './components/games/Games';
import GameDetails from './components/gameDetails/GameDetails';
import GameCreate from './components/gameCreate/GameCreate';
import GameEdit from './components/gameEdit/GameEdit';
import Cart from './components/cart/Cart';
import Friends from './components/friends/Friends';

function App() {
  const currentUser = getAuthUser();

  const queryClient = new QueryClient();
  const Layout = () =>{
    return(
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    )
  }

  // const ProtectedRoute = ({children}) =>{
  //   if(!currentUser){
  //     return <Navigate to='/login'/>
  //   }else{
  //     return children
  //   }
  // }
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        // <ProtectedRoute>
          <Layout />
        // </ProtectedRoute>
      ),
      children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:id',
        element: <Profile />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/games',
        element: <Games />
      },
      {
        path: '/games/:id',
        element: <GameDetails />
      },
      {
        path: '/create-card',
        element: <GameCreate />
      }, 
      {
        path: '/edit-card/:id',
        element: <GameEdit />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/friends',
        element: <Friends />
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
