import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ServiceDetail } from './pages/ServiceDetail'
import { BookingStep1 } from './pages/BookingStep1'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="booking" element={<BookingStep1 />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="ar" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="booking" element={<BookingStep1 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
