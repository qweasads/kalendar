import { useState } from 'react';
import styles from './../../assets/Home.module.css'
import Modal from './../../Modal/Modal';

const May = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalText, setModalText] = useState('');

    const modalcontentJ = [
        {
            buttonId: "b1",
            modalText: <h1 className={styles.info}>Рождественский пост. <br /> Предпразднество Рождества Христова</h1>
        },

        {
            buttonId: "b2",
            modalText: <h1 className={styles.info}>Праздник Праведного Иоанна Кронштадтского. <br /> День иконы Божьей Матери «Спасительница утопающих»</h1>
        },

        {
            buttonId: "b6",
            modalText: <h1 className={styles.info}>Навечерие Рождества Христова. <br /> (Рождественский сочельник)</h1>
        },

        {
            buttonId: "b7",
            modalText: <h1 className={styles.info}>Рождество Христово. <br /> Рождество Господа Бога и Спаса нашего Иисуса Христа. Конец Рождественского поста.</h1>
        },

        {
            buttonId: "b8",
            modalText: <h1 className={styles.info}>Собор Пресвятой Богородицы.</h1>
        },

        {
            buttonId: "b13",
            modalText: <h1 className={styles.info}>Отдание праздника Рождества Христова.</h1>
        },

        {
            buttonId: "b14",
            modalText: <h1 className={styles.info}>День святителя Василия Великого.</h1>
        },

        {
            buttonId: "b15",
            modalText: <h1 className={styles.info}>Преподобного Серефима Саровского чудотворца.</h1>
        },

        {
            buttonId: "b18",
            modalText: <h1 className={styles.info}>Крещенский сочельник.</h1>
        },

        {
            buttonId: "b19",
            modalText: <h1 className={styles.info}>Крещение Господне. Святое Богоявление.</h1>
        },

        {
            buttonId: "b20",
            modalText: <h1 className={styles.info}>Иоанна Предтечи — Крестителя Господня.</h1>
        },

        {
            buttonId: "b25",
            modalText: <h1 className={styles.info}>День святой мученицы Татианы (Татьянин день), Свт. Саввы, архиеп. Сербского (1237).</h1>
        },

        {
            buttonId: "b27",
            modalText: <h1 className={styles.info}>День Равноапостольной Нины, просветительницы Грузии.</h1>
        },
    ];

    function handleButtonClick(event) {
        modalcontentJ.forEach((button) => {
            if (event.target.id === button.buttonId) {
                setModalActive(true);
                setModalText(button.modalText);
            }
        });
    }

    return (
        <div className={styles.container}>

            <div className={styles.phone}>
                <img className={styles.imgPhone} src="/jan.webp" alt="" />
            </div>

            <div className={styles.month}>
                <h1>Май</h1>
            </div>

            <div className={styles.chisla}>
                <button id="b1" onClick={handleButtonClick} className={styles.weekend}>1</button>
                <button id="b2" onClick={handleButtonClick} className={styles.weekend}>2</button>

                <p className={styles.number}>3</p>
                <p className={styles.number}>4</p>
                <p className={styles.number}>5</p>

                <button id="b6" onClick={handleButtonClick} className={styles.weekend}>6</button>
                <button id="b7" onClick={handleButtonClick} className={styles.weekend}>7</button>
                <button id="b8" onClick={handleButtonClick} className={styles.weekend}>8</button>

                <p className={styles.number}>9</p>
                <p className={styles.number}>10</p>
                <p className={styles.number}>11</p>
                <p className={styles.number}>12</p>

                <button id="b13" onClick={handleButtonClick} className={styles.weekend}>13</button>
                <button id="b14" onClick={handleButtonClick} className={styles.weekend}>14</button>
                <button id="b15" onClick={handleButtonClick} className={styles.weekend}>15</button>

                <p className={styles.number}>16</p>
                <p className={styles.number}>17</p>

                <button id="b18" onClick={handleButtonClick} className={styles.weekend}>18</button>
                <button id="b19" onClick={handleButtonClick} className={styles.weekend}>19</button>
                <button id="b20" onClick={handleButtonClick} className={styles.weekend}>20</button>

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

export default May;