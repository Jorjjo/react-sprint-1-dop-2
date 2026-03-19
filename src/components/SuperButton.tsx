import React, { ButtonHTMLAttributes } from 'react';
import styles from './SuperButton.module.css';

// type SuperButtonProps = {
//     title?: string;
//     onClick: () => void;
//     color: string;
//     children?: React.ReactNode;
// };

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //same что и выше

export function SuperButton(props: SuperButtonProps) {
    const {
        title,
        onClick,
        color,
        children,
        className,
        disabled,
        ...restProps
    } = props;

    // const finalClassName = styles.button+' '+styles.red
    const finalClassName = `
    ${styles.button}
    ${color === 'red' ? styles.red : color === 'secondary' ? styles.secondary : styles.default}
    ${disabled ? styles.disabled : ''}
    `;

    return (
        <button
            // style={finalClassName}
            className={finalClassName}
        >
            {children}
        </button>
    );
}
