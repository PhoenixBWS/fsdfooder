import {Routes, Route} from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}