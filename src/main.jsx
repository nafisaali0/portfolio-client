import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import ThemeProvider from './Providers/ThemeProvider'
// if tanstack query needed:
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'
// const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </ThemeProvider>
  </React.StrictMode>,
)
