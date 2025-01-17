import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
// if tanstack query needed:
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
)
