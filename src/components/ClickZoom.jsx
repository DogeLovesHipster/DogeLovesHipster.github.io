import { useState } from 'react';
import Modal from 'react-modal';

const ClickZoom = ({ imgSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <img src={imgSrc} onClick={openModal} style={{ cursor: 'pointer' }} alt="zoomable" />
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image Zoom Modal"
            >
                <img src={imgSrc} alt="zoomed" />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </>
    );
};

export default ClickZoom;