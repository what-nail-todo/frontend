import React from 'react';
import logoImg from './../assets/logo.png';
import naverLogo from './../assets/naver-circle-logo.png';
import kakaoLogo from './../assets/kakao-circle-logo.png';
import googleLogo from './../assets/google-circle-logo.png';
import houseSvg from './../assets/house.svg';

export default function Home() {
    const KAKAO_URI = `http://kakao.com`;
    const NAVER_URI = `http://naver.com`;
    const GOOGLE_URI = `http://google.com`;

    return (
        <main className="flex h-screen items-center">
            <div className="flex flex-col items-center h-[561px] justify-between my-0 mx-auto">
                <div className="flex flex-col justify-between w-[500px] h-[198px]">
                    <div className="flex justify-center items-center">
                        <img src={logoImg} alt="로고 이미지" className="w-[116px] h-[116px]" />
                        <span className="ml-2 text-[87.84px] brand-name align-middle">네일뭐해?</span>
                    </div>
                    <span className="inline-block Pretendard-Regular w-full text-xl text-[#5C5C5C]">
                        서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다. 서비스
                        소개글입니다.
                    </span>
                </div>
                <div className="h-[263px] flex flex-col justify-between items-center">
                    <div className="w-[250px] h-[100px] flex flex-col justify-between text-[#838383] ">
                        <span className="text-base font-medium text-[#838383]">
                            간편 로그인으로 <span className="text-[#FB6091]">1분만에</span> 가입하세요!
                        </span>
                        <div className="btn-group flex justify-evenly">
                            <a className=" rounded-xl" href={KAKAO_URI}>
                                <img className="w-[50px] h-[50px]" src={kakaoLogo} alt="카카오 로그인"></img>
                            </a>
                            <a href={NAVER_URI}>
                                <img className="w-[50px] h-[50px]" src={naverLogo} alt="네이버 로그인"></img>
                            </a>
                            <a href={GOOGLE_URI}>
                                <img className="w-[50px] h-[50px]" src={googleLogo} alt="구글 로그인"></img>
                            </a>
                        </div>
                    </div>
                    <div className="h-[112px] flex flex-col justify-between items-center">
                        <div className="flex w-[488px] h-[70px] gap-4 px-4">
                            <button className="flex-1 text-xl bg-[#FB6091] text-white rounded-[6px] px-[20px] py-[13px]">
                                로그인
                            </button>

                            <button className="text-xl flex items-center justify-center flex-1 border border-[#FB6091] text-[#FB6091] rounded-[6px] px-[20px] py-[13px] gap-1">
                                <img src={houseSvg} alt="아이콘" className="w-5 h-5" />
                                입점 신청
                            </button>
                        </div>
                        <a href="https://naver.com" className="inline-block text-[17px] text-[#838383]">
                            가입하기
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
