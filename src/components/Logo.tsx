import React from 'react';
import logoImg from './../assets/logo.png';

interface LogoProps {
    fontSize?: number; // 단위는 px 기준
}

export default function Logo({ fontSize = 87.84 }: LogoProps) {
    const imageSize = fontSize * (116 / 87.84); // 약 1.32배

    return (
        <header className="flex justify-center items-center">
            <img src={logoImg} alt="로고 이미지" style={{ width: imageSize, height: imageSize }} />
            <span className="ml-2 brand-name align-middle" style={{ fontSize }}>
                네일뭐해?
            </span>
        </header>
    );
}
