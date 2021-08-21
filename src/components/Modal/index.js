import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: .3s;
  z-index: 100;
  overflow: hidden;
  
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  height: 675px;
  background-color: ${({ theme: { colorTheme } }) => colorTheme.borders.color};

  ${breakpointsMedia({
    xs: css`
      width: 100vw;
    `,

    md: css`
      width: 900px;
    `,
  })}
`;

function Modal({ isOpen, onClose, setModalState }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(e) => {
        const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');

        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Form data-modal-safe-area="true">
          <button
            type="button"
            onClick={() => { setModalState(false); }}
            style={{
              position: 'absolute', top: '30px', right: '30px',
            }}
          >
            Fechar
          </button>
          <h2>Envie sua mensagem</h2>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu Email" required />
          <textarea rows="5" cols="22" defaultValue="Sua Mensagem" required />
          <input type="button" value="Enviar >" />
        </Form>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default Modal;
