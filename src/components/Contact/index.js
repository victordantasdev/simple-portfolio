import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';

const WrapperContact = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 52px;
`;

const ContactButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background: transparent;
  border: 1px solid orange;
  border-radius: 50%;
  color: white;
  cursor: pointer;
`;

export default function Contact() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <>
      <WrapperContact>
        <h2>Entre em contato</h2>
        <ContactButton
          onClick={() => { setModalState(!isModalOpen); }}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.592 0.431999V5.424H14.424V9.328H9.592V14.32H5.4V9.328H0.536V5.424H5.4V0.431999H9.592Z" fill="white" />
          </svg>
        </ContactButton>
      </WrapperContact>
      <Modal
        isOpen={isModalOpen}
        onClose={() => { setModalState(false); }}
        setModalState={setModalState}
      />
    </>
  );
}
