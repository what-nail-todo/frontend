import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, ...props }, ref) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="font-semibold text-lg">{label}</label>
            <input {...props} ref={ref} className="text-sm bg-[#FBFBFB] w-full h-[48px] rounded-md px-3 mt-2" />
        </div>
    );
});

export default Input;
