import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import React from 'react';

interface NavButtonProps {
    to: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
}

export default function NavButton({ to, icon: Icon, text }: NavButtonProps) {
    return (
        <li className="flex flex-1  w-full ">
            <NavLink
                to={to}
                className={({ isActive }: NavLinkRenderProps) =>
                    ` flex items-center px-10 py-3 gap-2 w-full justify-between  hover:text-[#FF3F7B] font-medium transition ${
                        isActive ? 'text-[#FB6091] bg-[#FFF3F7] rounded-3xl ' : 'text-[#a7a7a7]'
                    }`
                }
            >
                <Icon stroke="currentColor" className="w-6 h-6 hover:text-pink-500 " />
                <span className="text-[16px] inline-flex justify-center items-center w-full font-normal">{text}</span>
            </NavLink>
        </li>
    );
}
