import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomeEn } from './pages/HomeEn'
import { HomeAr } from './pages/HomeAr'
import { ServiceDetailAr } from './pages/ServiceDetailAr'
import { BookingStep1Ar } from './pages/BookingStep1Ar'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout lang="en" />}>
          <Route index element={<HomeEn />} />
          <Route
            path="services/:slug"
            element={<Navigate to="/ar/services/home-luxury-clean" replace />}
          />
          <Route path="booking" element={<Navigate to="/ar/booking" replace />} />
          <Route path="*" element={<NotFound lang="en" />} />
        </Route>

        <Route path="ar" element={<Layout lang="ar" />}>
          <Route index element={<HomeAr />} />
          <Route path="services/:slug" element={<ServiceDetailAr />} />
          <Route path="booking" element={<BookingStep1Ar />} />
          <Route path="*" element={<NotFound lang="ar" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
