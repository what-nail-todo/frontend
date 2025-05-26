import CloseIcon from './../assets/icon_x.svg';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Logo from '../components/Logo';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../api/loginApi';
import { queryClient } from '../utils/http';
import { FormEvent } from 'react';

interface LoginType {
    email: string;
    password: string;
}

export default function LogIn() {
    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['info'] });
            console.log('성공했습니다.');

            //navigate('/events');
        },
        onError: () => {},
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        mutate({ email, password });
    }

    return (
        <form onSubmit={handleSubmit} className="page-content flex h-screen items-center">
            <div className="password-recovery-section flex flex-row my-0 mx-auto justify-between w-[1300px] h-[407px] items-center">
                <section className="h-[71.25%] flex flex-col justify-between items-center">
                    <div className="flex flex-col justify-between w-[500px] h-[68.28%] items-center">
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
                    <div className="flex flex-col justify-between h-[53.56%]">
                        <Input label="email" type="email" placeholder="example@gmail.com" />
                        <Input
                            label="password"
                            type="password"
                            placeholder="8자 이상, 대문자와 특수문자를 포함하세요"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-[14%] bg-[#FB6091] text-xl text-white rounded-[6px] cursor-pointer"
                    >
                        로그인
                    </button>
                </section>
            </div>
        </form>
    );
}
