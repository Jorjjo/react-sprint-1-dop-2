import { useState } from 'react';
import './App.css';
import { Modal } from './components/modal/Modal';
import { SuperButton } from './components/SuperButton';
import styles from './components/SuperButton.module.css';
import { SuperSneakers } from './components/SuperSneakers';

export const App = () => {
    const sneakers = [
        { id: 1, model: 'ADIDAS', size: 'XXX' },
        { id: 2, model: 'ABIBAS', size: 'YYY' },
        { id: 3, model: 'PUMA', size: 'ZZZ' },
    ];
    return (
        <div>
            {/* <SuperButton onClick={() => {}} className={styles.redForSuperButton}>
                Red Super Button
            </SuperButton>
                        <SuperButton onClick={() => {}} className={styles.blueForSuperButton}>
                Blue Super Button
            </SuperButton> */}
            {/* <SuperButton color={'red'}>Red superbutton</SuperButton>
            <SuperButton color={'secondary'}>Secondary superbutton</SuperButton>
            <SuperButton>Default superbutton</SuperButton>
            <SuperButton disabled>Disabled superbutton</SuperButton> */}
            {/* <SuperSneakers sneakers={sneakers}>
                <div>Куча всякой информации</div>
                <div>Куча всякой информации</div>
                <div>Куча всякой информации</div>
                <div>Куча всякой информации</div>
                <div>Куча всякой информации</div>
                <SuperButton color={'red'}>Red superbutton</SuperButton>
                <SuperButton color={'secondary'}>
                    Secondary superbutton
                </SuperButton>
                <SuperButton>Default superbutton</SuperButton>
                <SuperButton disabled>Disabled superbutton</SuperButton>
            </SuperSneakers>
            <SuperSneakers sneakers={sneakers}>
                <div>Куча всякой информации</div>
                <div>Куча всякой информации</div>
                <SuperButton>Default superbutton</SuperButton>
                <SuperButton disabled>Disabled superbutton</SuperButton>
            </SuperSneakers>
            <SuperSneakers sneakers={sneakers}>
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <input type='text' />
                <SuperButton disabled>Disabled superbutton</SuperButton>
            </SuperSneakers> */}

            <Modal>
                <h1>Сonfidential Inforfation</h1>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='password' />
                <input type='password' placeholder='password' />
                <label>
                    <input type='checkbox' />
                    I agree
                </label>

                <button>send</button>
            </Modal>
            {/* <Modal></Modal> */}
        </div>
    );
};
