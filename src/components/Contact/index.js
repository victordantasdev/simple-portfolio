import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';

const WrapperContact = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 52px;
`;

const ContactButton = styled.button`
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
  background-image: url('/svgs/plus.svg');
  background-repeat: no-repeat;
  background-position: center;
  filter: ${({ theme: { colorTheme } }) => (
    colorTheme.title === 'dark'
      ? 'invert(1)'
      : 'invert(0)'
  )};
`;

export default function Contact() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <>
      <WrapperContact>
        <h2>Entre em contato</h2>
        <ContactButton onClick={() => setModalState(!isModalOpen)} />
      </WrapperContact>
      <Modal
        isOpen={isModalOpen}
        onClose={() => { setModalState(false); }}
        setModalState={setModalState}
      />
    </>
  );
}
