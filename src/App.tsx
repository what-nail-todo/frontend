import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Schedule from './pages/Schedule';
import Chat from './pages/Chat';
import Reservation from './pages/Reservation';
import Menu from './pages/Menu';
import Customer from './pages/Customer';

function App() {
    return (
        <div className="w-full h-full flex flex-col bg-white min-w-[1000px]">
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/reservation" element={<Reservation />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/customer" element={<Customer />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
