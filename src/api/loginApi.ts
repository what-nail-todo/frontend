import { ApiError } from '../utils/ApiError';
import { getCookie, setCookie } from '../utils/cookie';

interface LoginType {
    email: string;
    password: string;
}

//소셜 회원가입 + 로그인 / 일반 회원가입
export const loginApi = async (login: LoginType) => {
    const response = await fetch('https://what-nail-todo.inuappcenter.kr/api/v1/auth/sign-in', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const code = response.status;
        const info = await response.json();

        const error = new ApiError('정보가 올바르지 않습니다.', code, info);

        console.log(error);
        throw error;
    }

    const { data } = await response.json();
    return data;
};
