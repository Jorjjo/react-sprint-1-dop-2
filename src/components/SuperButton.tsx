import React, { ButtonHTMLAttributes } from 'react';
import styles from './SuperButton.module.css';

// type SuperButtonProps = {
//     title?: string;
//     onClick: () => void;
//     color: string;
//     children?: React.ReactNode;
// };

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; //same что и выше

type Test = SuperButtonProps['color'];

function getBaseClassName() {
    return styles.button;
}

function getColorClassName(color: string | undefined) {
    if (color === 'red') return styles.red;
    if (color === 'secondary') return styles.secondaryColor;

    return styles.defaultColor;
}

function getDisabledClassName(disabled: boolean | undefined) {
    if (disabled) return styles.disabled;

    return '';
}

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
    ${getBaseClassName}
    ${getColorClassName(color)}
    ${getDisabledClassName(disabled)}
    `;

    const customClass = `bg-red ${styles.disabled}`;

    console.log(customClass);

    console.log(styles);

    return (
        <>
            <div className={customClass}>hehbne custom</div>
            <button
                // style={finalClassName}
                className={finalClassName}
            >
                {children}
            </button>
        </>
    );
}
