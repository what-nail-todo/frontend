import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import Input from '../components/Input';
import LoginIcon from '../assets/로그인.svg?react'
import CloseIcon from './../assets/icon_x.svg?react';


export default function Signup(){
  const navigate = useNavigate();

    return (
      <div className="w-full h-screen flex flex-row items-center justify-center">

        {/* 로고 & 로그인 */}
        <div className="w-1/2 flex flex-col itemss-center">
          <div className="flex flex-col items-center justify-center">
            <Logo fontSize={68}/>
            <p className="flex w-[55%] text-base text-center text-[#5C5C5C] mt-6">
              서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다.
            </p>
            <LoginIcon className="mt-8 w-[30%] h-[25%]" onClick={()=>navigate('/login')}/>
          </div>     
        </div>

        {/* 회원가입 폼 */}
        <div className="w-1/2 h-full flex flex-1 flex-col items-center">
          <div className="w-[80%] h-full flex flex-col justify-center">

            {/* 타이틀 */}
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold text-2xl">회원가입</h1>
              <CloseIcon className="w-3 h-3 mt-1.5"/>           
            </div>  

            {/* 폼 */}
            <div className="flex flex-col mt-7 space-y-6">
              <Input 
                label="이름"
                type="name"
                placeholder="이름을 입력하세요"
              />
              <div className="flex flex-col space-y-0 ">
                <div className="flex flex-row">
                  <Input 
                    className="w-full" 
                    label="전화번호" 
                    type="tel" 
                    placeholder="01012345678"
                  />
                  <button className="w-[25%] h-[48px] bg-[#FB6091] text-sm text-white opacity-30 rounded-[6px] mt-8 ml-3">
                    인증번호 발송
                  </button>   
                </div>
                <div className="flex flex-row">
                  <Input 
                    className="w-full" 
                    label="" 
                    type="text" 
                    placeholder="인증번호를 입력하세요" 
                  />
                  <button className="w-[25%] h-[48px] bg-[#FB6091] text-sm text-white opacity-30 rounded-[6px] mt-[8px] ml-3">
                    확인
                  </button>   
                </div>
              </div>
              <div className="flex flex-row">
                <Input 
                  className="w-full" 
                  label="이메일"
                  type="email"
                  placeholder="example@gmail.com"
                />
                <button className="w-[25%] h-[48px] bg-[#FB6091] text-sm text-white opacity-30 rounded-[6px] mt-8 ml-3">
                  이메일 인증
                </button>   
              </div>
              <Input 
                label="비밀번호"
                type="password"
                placeholder="8자 이상, 대문자와 특수문자를 포함하세요"
              />
              <Input 
                label="비밀번호 재입력"
                type="confirm password"
                placeholder="8자 이상, 대문자와 특수문자를 포함하세요"
              /> 

              <button className="w-full h-[48px] bg-[#FB6091] font-semibold text-lg text-white opacity-30 rounded-[6px]">
                다음
              </button>        
            </div>  
          </div>
        </div>  
      </div>
    )
}