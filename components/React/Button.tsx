import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const button = ({ children, className = '', ...rest }: IButton): JSX.Element => {
    // Array with conditional classNames
    const classNames = [
        !className.includes('text') && 'text-white',
        !className.includes('rounded') && 'rounded',
        !className.includes('p-') &&
            !className.includes('py') &&
            !className.includes('px') &&
            'p-[10px]',
        !className.includes('p-') && className.includes('py') && 'px-[10px]',
        !className.includes('p-') && className.includes('px') && 'py-[10px]'
    ].filter((string) => string);

    className += ` ${classNames.join(' ')}`;

    return (
        <button
            className={`
                disabled:opacity-60 disabled:pointer-events-none
                focus:outline-none outline-none bg-red-500 rounded
                ${className}
            `}
            {...rest}
        >
            {children}
        </button>
    );
};

export default button;
