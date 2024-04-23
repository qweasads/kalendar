import { useState, useEffect } from "react";

const ButtonClickHandler = ({ buttonData, setModalData }) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalText, setModalText] = useState("");

    function handleButtonClick(event) {
        modalcontentF.forEach((button) => {
            if (event.target.id === button.buttonId) {
                setModalActive(true);
                setModalText(button.modalText);
            }
        });
    }

    return (
        <div>
            {buttonData.map((button, index) => (
                <button key={index} id={button.id} onClick={handleButtonClick}>
                    {button.label}
                </button>
            ))}
            {modalActive && <div>{modalText}</div>}
        </div>
    );
};
export default ButtonClickHandler;