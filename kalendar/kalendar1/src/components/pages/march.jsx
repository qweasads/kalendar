import { useState } from 'react';
import styles from './../../assets/Home.module.css'
import Modal from './../../Modal/Modal';

const March = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalText, setModalText] = useState('');

    const modalContentM = [
        {
            buttonId: "b9",
            modalText: <h1 className={styles.info}>Суббота мясопустная (Вселенская родительская).</h1>
        },

        {
            buttonId: "b11",
            modalText: <h1 className={styles.info}>Масленица.</h1>
        },

        {
            buttonId: "b15",
            modalText: <h1 className={styles.info}>Преставление свт. Арсения, еп. Тверского (1409). День Иконы чудотворной — Божия Матерь Державная</h1>
        },

        {
            buttonId: "b17",
            modalText: <h1 className={styles.info}>Масленица.</h1>
        },

        {
            buttonId: "b18",
            modalText: <h1 className={styles.info}>Великий пост (начало).</h1>
        },

        {
            buttonId: "b22",
            modalText: <h1 className={styles.info}>Святых сорока мучеников Севастийских.</h1>
        },

        {
            buttonId: "b30",
            modalText: <h1 className={styles.info}>Суббота 2-й седмицы Великого поста, Прп. Макария, игум. Калязинского, чудотворца (1483).</h1>
        },
    ];

    function handleButtonClick(event) {
        modalContentM.forEach((button) => {
            if (event.target.id === button.buttonId) {
                setModalActive(true);
                setModalText(button.modalText);
            }
        });
    }

    return (
        <div className={styles.container}>

            <div className={styles.phone}>
                <img className={styles.imgPhone} src="/march.jpg" alt="" />
            </div>

            <div className={styles.month}>
                <h1>Март</h1>
            </div>

            <div className={styles.chisla}>
                <p className={styles.number}>1</p>
                <p className={styles.number}>2</p>

                <p className={styles.number}>3</p>
                <p className={styles.number}>4</p>
                <p className={styles.number}>5</p>

                <p className={styles.number}>6</p>
                <p className={styles.number}>7</p>
                <p className={styles.number}>8</p>

                <button id="b9" onClick={handleButtonClick} className={styles.weekend}>9</button>
                <p className={styles.number}>10</p>
                <button id="b11" onClick={handleButtonClick} className={styles.weekend}>11</button>
                <p className={styles.number}>12</p>

                <p className={styles.number}>13</p>
                <p className={styles.number}>14</p>
                <button id="b15" onClick={handleButtonClick} className={styles.weekend}>15</button>

                <p className={styles.number}>16</p>
                <button id="b17" onClick={handleButtonClick} className={styles.weekend}>17</button>

                <button id="b18" onClick={handleButtonClick} className={styles.weekend}>18</button>
                <p className={styles.number}>19</p>
                <p className={styles.number}>20</p>

                <p className={styles.number}>21</p>
                <button id="b22" onClick={handleButtonClick} className={styles.weekend}>22</button>
                <p className={styles.number}>23</p>
                <p className={styles.number}>24</p>

                <p className={styles.number}>25</p>

                <p className={styles.number}>26</p>

                <p className={styles.number}>27</p>

                <p className={styles.number}>28</p>
                <p className={styles.number}>29</p>
                <button id="b30" onClick={handleButtonClick} className={styles.weekend}>30</button>
                <p className={styles.number}>31</p>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                {modalText}
            </Modal>
        </div>
    );
}

export default March;