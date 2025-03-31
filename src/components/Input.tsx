import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
    return (
        <p className="flex flex-col">
            <label>{label}</label>
            <input {...props} ref={ref} className="bg-[#FBFBFB] w-full h-[57px] px-3 mt-2" />
        </p>
    );
});

export default Input;
