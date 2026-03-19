import React from 'react';

type Sneakers = {
    sneakers: SneakersInstance[];
    children: React.ReactNode;
};

type SneakersInstance = {
    id: number;
    model: string;
    size: string;
};

export function SuperSneakers({ sneakers, children }: Sneakers) {
    return (
        <div>
            <ul>
                {sneakers.map((sneakersInstance, index) => {
                    return (
                        <li key={index}>
                            <div>{sneakersInstance.id}</div>
                            <div>{sneakersInstance.model}</div>
                            <div>{sneakersInstance.size}</div>
                        </li>
                    );
                })}
            </ul>
            {children}
            <hr />
        </div>
    );
}
