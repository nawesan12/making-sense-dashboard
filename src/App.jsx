import './App.css'
import Header from './components/Header'
import MainDashboard from './components/MainDashboard'
import TodayOverview from './components/TodayOverview'

export default function App() {
  document.body.classList.toggle('darkMode')
  return (
    <main className="App">
      <section className="top-bg-pattern" 
        style={{
          position:'absolute',
          top:0,
          left: 0,
          width:'100vw',
          height:'36vh',
          background: 'var(--top-bg-pattern)',
          zIndex:0,
          borderRadius: '0 0 1.8rem 1.8rem',
          transition: 'all .2s ease'
        }}
      />
      <section className="app_wrapper">
        <Header />
        <MainDashboard />
        <TodayOverview />
      </section>
    </main>
  )
}