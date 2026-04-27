import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Link
} from 'react-router-dom'

import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Content from './component/content.jsx'

import './index.css'

// Layout Component
function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/content">Content</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}

// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="content" element={<Content />} />
    </Route>
  )
)

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
