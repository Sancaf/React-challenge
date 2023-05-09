import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Layout from './components/Layout'
import Home from './pages/Home'
import UserList from './pages/UserList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchContextProvider from './context/SearchContextProvider'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Movie-selections" element={<UserList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </QueryClientProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
