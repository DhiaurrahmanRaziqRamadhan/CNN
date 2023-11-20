import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import AttendancePage from './pages/AttendancePage'
import NotFoundPage from './pages/NotFoundPage'
import NewUserPage from './pages/NewUserPage'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const App = () => {
  const initialOpen = JSON.parse(localStorage.getItem('open'));
  const [open, setOpen] = useState(initialOpen);

  const initialDarkMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(initialDarkMode)
  
  useEffect(() =>  {
    localStorage.getItem('open')
  }, [setOpen])

  // Menyimpan nilai open pada local storage saat nilai berubah
  useEffect(() => {
    localStorage.setItem('open', open);
  }, [open]);

  // useEffect(() => {
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     setDarkMode('dark')
  //   }else {
  //     setDarkMode('')
  //   }
  // }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleThemeSwitch = () => {
    setDarkMode(darkMode === 'dark' ? '' : 'dark')
  }

  return (
    <>
      <Router>
        <section className='flex duration-100 min-h-screen'>
          <Sidebar open={open} setOpen={setOpen}/>
          <div className={`w-full bg-slate-100 flex flex-col dark:bg-slate-800 text-xl ${open ? "ml-[288px]" : "ml-[74px]"} box-border duration-300 p-4`}>
          <Navbar darkMode={darkMode} handleThemeSwitch={handleThemeSwitch}/>
          <Routes>
              <Route path='/' element={<DashboardPage/>}/>
              <Route path='/attendance' element={<AttendancePage/>}/>
              <Route path='/new_user' element={<NewUserPage/>}/>
              <Route path='/*' element={<NotFoundPage/>}/>
          </Routes>
          </div>
        </section>
      </Router>
    </>
  )
}

export default App
