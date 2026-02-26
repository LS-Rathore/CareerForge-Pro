import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ResumeBuilderPage from './pages/ResumeBuilderPage'
import DashboardPage from './pages/DashboardPage'
import MyResumesPage from './pages/MyResumesPage'
import CoverLettersPage from './pages/CoverLettersPage'
import TemplatesPage from './pages/TemplatesPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-light text-text-main min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/builder" element={<ResumeBuilderPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/resumes" element={<MyResumesPage />} />
          <Route path="/dashboard/cover-letters" element={<CoverLettersPage />} />
          <Route path="/dashboard/templates" element={<TemplatesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

