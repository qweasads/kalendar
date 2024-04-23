import { useState } from 'react';
import styles from './../../assets/Home.module.css'
import Modal from './../../Modal/Modal';

const February = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalText, setModalText] = useState('');

    const modalContentF = [
        {
            buttonId: "b2",
            modalText: <h1 className={styles.info}>Прп. Евфимия Великого.</h1>
        },

        {
            buttonId: "b5",
            modalText: <h1 className={styles.info}>Неделя о мытаре и фарисее.</h1>
        },

        {
            buttonId: "b6",
            modalText: <h1 className={styles.info}>День блаженной Ксении Петербургской.</h1>
        },

        {
            buttonId: "b7",
            modalText: <h1 className={styles.info}>Свт. Григория Богослова, архиеп. Константинопольского.</h1>
        },

        {
            buttonId: "b9",
            modalText: <h1 className={styles.info}>Перенесение мощей святителя Иоанна Златоуста.</h1>
        },

        {
            buttonId: "b12",
            modalText: <h1 className={styles.info}>Праздник Трех святителей — Василия Великого, Григория Богослова и Иоанна Златоуста.</h1>
        },

        {
            buttonId: "b13",
            modalText: <h1 className={styles.info}>Свт. Никиты, затворника Печерского, еп. Новгородского (1108).</h1>
        },

        {
            buttonId: "b14",
            modalText: <h1 className={styles.info}>Предпразднство Сретения Господня и мч. Трифона (250).</h1>
        },

        {
            buttonId: "b15",
            modalText: <h1 className={styles.info}>Сретение Господне.</h1>
        },

        {
            buttonId: "b18",
            modalText: <h1 className={styles.info}>Свт. Феодосия, архиеп. Черниговского (1696), Суббота мясопустная (Вселенская родительская).</h1>
        },

        {
            buttonId: "b25",
            modalText: <h1 className={styles.info}>Праздник Иверской иконы Божией Матери.</h1>
        },

        {
            buttonId: "b27",
            modalText: <h1 className={styles.info}>Равноапостольного Кирилла, учителя Словенского, Начало Великого поста.</h1>
        },
    ];

    function handleButtonClick(event) {
        modalContentF.forEach((button) => {
            if (event.target.id === button.buttonId) {
                setModalActive(true);
                setModalText(button.modalText);
            }
        });
    }

    return (
        <div className={styles.container}>

            <div className={styles.phone}>
                <img className={styles.imgPhone} src="/feb.jpg" alt="" />
            </div>

            <div className={styles.month}>
                <h1>Февраль</h1>
            </div>

            <div className={styles.chisla}>
                <p className={styles.number}>1</p>
                <button id="b2" onClick={handleButtonClick} className={styles.weekend}>2</button>

                <p className={styles.number}>3</p>
                <p className={styles.number}>4</p>
                <button id="b5" onClick={handleButtonClick} className={styles.weekend}>5</button>

                <button id="b6" onClick={handleButtonClick} className={styles.weekend}>6</button>
                <button id="b7" onClick={handleButtonClick} className={styles.weekend}>7</button>
                <p className={styles.number}>8</p>

                <button id="b9" onClick={handleButtonClick} className={styles.weekend}>9</button>
                <p className={styles.number}>10</p>
                <p className={styles.number}>11</p>
                <button id="b12" onClick={handleButtonClick} className={styles.weekend}>12</button>

                <button id="b13" onClick={handleButtonClick} className={styles.weekend}>13</button>
                <button id="b14" onClick={handleButtonClick} className={styles.weekend}>14</button>
                <button id="b15" onClick={handleButtonClick} className={styles.weekend}>15</button>

                <p className={styles.number}>16</p>
                <p className={styles.number}>17</p>

                <button id="b18" onClick={handleButtonClick} className={styles.weekend}>18</button>
                <p className={styles.number}>19</p>
                <p className={styles.number}>20</p>

                <p className={styles.number}>21</p>
                <p className={styles.number}>22</p>
                <p className={styles.number}>23</p>
                <p className={styles.number}>24</p>

                <button id="b25" onClick={handleButtonClick} className={styles.weekend}>25</button>

                <p className={styles.number}>26</p>

                <button id="b27" onClick={handleButtonClick} className={styles.weekend}>27</button>

                <p className={styles.number}>28</p>
                <p className={styles.number}>29</p>
                <p className={styles.number}>30</p>
                <p className={styles.number}>31</p>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                {modalText}
            </Modal>
        </div>
    );
}

export default February;