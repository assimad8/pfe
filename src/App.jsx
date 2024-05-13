import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,RouterProvider
} from 'react-router-dom'
import Dashboard,
  {
    loader as DashboardLoader,
    action as DashboardAction
} from './pages/Dashboard'
import ErrorPage from './routes/Error';
import Contact,{
  loader as ContactLoader,
  action as ContactAction,
} from './pages/Dashboard/Contact';
import EditContact,
  {
    action as EditAction
  } from './pages/Dashboard/Edite';
import {action as DestroyAction} from './pages/Dashboard/Destroy.js'
import Home from './pages/Dashboard/Home'
import ProtectedRoute from './routes/ProtectedRoute';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/LandingPage/components/NotFound';
import Hero from './pages/LandingPage/components/Hero';
// import Demand from './pages/LandingPage/components/Demand';
import Login from './pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
    errorElement:<ErrorPage/>,
    loader:DashboardLoader,
    action:DashboardAction,
    children:[{
      errorElement:<ErrorPage/>,
      children:[
        { index: true, element: <Home /> },{
          path: "contacts/:contactId",
          element: <Contact />,
          loader:ContactLoader,
          action:ContactAction,
        },{
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader:ContactLoader,
          action:EditAction,
        },{
          path: "contacts/:contactId/destroy",
          action:DestroyAction,
        },
      ],
    }]
  },
])
const myrouter = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<LandingPage/>}>
      <Route path='/' element={<Hero/>} />
      <Route path='login/' element={<Login/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>

    <Route element={<ProtectedRoute role="directeur"/>} >
    <Route
        path='dashboard/'
        element={<Dashboard/>}
        loader={DashboardLoader}
        action={DashboardAction}
        errorElement={<ErrorPage/>}
        >
      <Route errorElement={<ErrorPage/>}>
        <Route index element={<Home/>} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={ContactLoader}
          action={ContactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={ContactLoader}
          action={EditAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={DestroyAction}
        />
        <Route
          path="*"
          element={<div>Not </div>}
        />
        </Route>
    </Route>
    
    </Route>
    </>
  ))

const App = () => {
  return (
    <RouterProvider router={myrouter} />
  )
}

export default App