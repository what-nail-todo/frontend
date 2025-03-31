import Logo from './../components/Logo'
import { Link } from "react-router-dom";

const LoginIcon = '/images/로그인.svg'
const ScheduleIcon = '/images/일정관리.svg'
const ReservationIcon = '/images/예약관리.svg'
const ChatIcon = '/images/채팅.svg'
const ManuIcon = '/images/메뉴관리.svg'
const CustomerIcon = '/images/고객관리.svg'


const SideNav = () => {
    return (
        <nav className="fixed w-[250px] h-full shadow-[0px_0px_15px_rgba(170,170,170,0.25)]"> 
            <ul className="flex flex-col w-full items-center mt-8">
             {/* 로고 */}   
             <Logo fontSize={26}/>
                {/* 로그인 */}
                <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center mt-7 mb-12">
                        <img
                            src={LoginIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
                {/* 일정관리 */}
                <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center mb-8">
                        <img
                            src={ScheduleIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
                {/* 예약관리 */}
                 <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center mb-8">
                        <img
                            src={ReservationIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
                {/* 채팅 */}
                <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center mb-8">
                        <img
                            src={ChatIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
                 {/* 메뉴관리 */}
                 <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center mb-8">
                        <img
                            src={ManuIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
                {/* 고객관리 */}
                <li className="flex flex-1">
                    <Link to="/login" className="flex w-full justify-center">
                        <img
                            src={CustomerIcon}
                            width= "80%"
                            height="5%"
                        />
                    </Link>              
                </li>
            </ul>
        </nav>
    )
  };
  
  export default SideNav;