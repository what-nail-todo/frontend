import Logo from './../components/Logo';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';

import ScheduleIcon from '../assets/icons/calendar.svg?react';
import ChatIcon from '../assets/icons/chat.svg?react';
import ReservationIcon from '../assets/icons/reservation.svg?react';
import MenuIcon from '../assets/icons/menu.svg?react';
import CustomerIcon from '../assets/icons/customer.svg?react';

const SideNav = () => {
    return (
        <nav className="fixed w-[250px] h-full z-50 p-9 shadow-[0px_0px_15px_rgba(170,170,170,0.25)] ">
            {/* 로고 */}
            <Logo fontSize={26} />

            <ul className="flex flex-col w-full items-center mt-8  gap-y-6">
                {/* 일정관리 */}
                <NavButton to="/schedule" icon={ScheduleIcon} text="일정관리" />

                {/* 예약관리 */}
                <NavButton to="/reservation" icon={ReservationIcon} text="예약관리" />

                {/* 채팅 */}
                <NavButton to="/chat" icon={ChatIcon} text="채팅" />

                {/* 메뉴관리 */}
                <NavButton to="/menu" icon={MenuIcon} text="메뉴관리" />

                {/* 고객관리 */}
                <NavButton to="/customer" icon={CustomerIcon} text="고객관리" />
            </ul>
        </nav>
    );
};

export default SideNav;
