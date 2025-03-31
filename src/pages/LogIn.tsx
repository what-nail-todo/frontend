import CloseIcon from './../assets/icon_x.svg';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Logo from '../components/Logo';

export default function LogIn() {
    return (
        <main className="page-content flex h-screen items-center">
            <div className="password-recovery-section flex flex-row my-0 mx-auto justify-between w-[1300px] h-[407px] items-center">
                <section className="h-[290px] flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-between w-[500px] h-[198px] items-center">
                        <Logo />
                        <p className="inline-block w-full text-xl text-[#5C5C5C]">
                            서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다.서비스 소개글입니다. 서비스
                            소개글입니다.
                        </p>
                    </div>
                    <Link to="/login" className="text-[#838383] font-medium text-[17px] underline cursor-pointer">
                        비밀번호 찾기
                    </Link>
                </section>
                <section className="w-[600px] h-full px-4 flex flex-col justify-between">
                    <div className="flex flex-row justify-between items-center ">
                        <h1 className="font-bold text-[28px]">로그인</h1>
                        <button aria-label="모달 닫기" className="w-6 h-6 flex items-center justify-center">
                            <img src={CloseIcon} alt="닫기" className="w-3 h-3 " />
                        </button>
                    </div>
                    <div className="flex flex-col justify-between h-[218px]">
                        <Input label="이메일" type="email" placeholder="example@gmail.com" />
                        <Input
                            label="비밀번호"
                            type="password"
                            placeholder="8자 이상, 대문자와 특수문자를 포함하세요"
                        />
                    </div>
                    <button className="w-full h-[57px] bg-[#FB6091] text-xl text-white rounded-[6px] cursor-pointer">
                        로그인
                    </button>
                </section>
            </div>
        </main>
    );
}
