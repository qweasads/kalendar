const ModalContent = ({ modalContentF }) => {
    return (
        <>
            {modalContentF.map((item) => (
                <div key={item.buttonId}>
                    {item.modalText}
                </div>
            ))}
        </>
    );
}

export default ModalContent;