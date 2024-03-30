import React, { useState } from 'react';
import './ChatBot.scss';
import { BsChatDots } from "react-icons/bs";
import ChatBotModal from '../ChatBotModal/ChatBotModal';

const ChatBot = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='ChatBot container'>
            <div className="secContainer chatbotContainer" onClick={handleOpenModal}>
                <BsChatDots className='icon'  />
            </div>
            {isModalOpen && <ChatBotModal handleCloseModal={handleCloseModal} />}
        </div>
    );
}

export default ChatBot;
