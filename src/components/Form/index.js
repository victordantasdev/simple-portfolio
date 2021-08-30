import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import Done from '../Done';

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-around;
  padding: 0 45px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme: { colorTheme } }) => colorTheme.borders.color};

  ${breakpointsMedia({
    xs: css`
      width: 100vw;
    `,

    md: css`
      width: 900px;
    `,
  })};
`;

const Label = styled.label`
  align-self: flex-start;
  margin: 32px 0 12px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 40px;
  border: 2px solid ${({ theme: { colorTheme } }) => colorTheme.secondary.color};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  font-size: 40px;
  border: 2px solid ${({ theme: { colorTheme } }) => colorTheme.secondary.color};
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
  background-image: url(${(props) => `/svgs/${props.icon}.svg`});
  background-repeat: no-repeat;
  background-position: center;
  filter: ${({ theme: { colorTheme } }) => (
    colorTheme.title === 'dark'
      ? 'invert(1)'
      : 'invert(0)'
  )};
`;

export default function Form({ setModalState }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submited, setSubmited] = useState(false);

  return (
    <WrapperForm
      data-modal-safe-area="true"
      onSubmit={(e) => {
        e.preventDefault();

        const data = {
          name,
          email,
          message,
        };

        setTimeout(() => {
          setSubmited(false);
          setName('');
          setEmail('');
          setMessage('');
        }, 1.2 * 1000);

        setSubmited(true);

        // eslint-disable-next-line no-console
        console.log(data);
      }}
    >
      <ContactButton
        onClick={() => setModalState(false)}
        style={{
          position: 'absolute', top: '30px', right: '30px',
        }}
        icon="close"
      />
      <Text
        tag="h2"
        variant="formTitle"
        style={{ marginBottom: '0' }}
      >
        Envie sua mensagem
      </Text>

      <Label htmlFor="name">
        <Text tag="span" variant="formLabel">Seu nome:</Text>
      </Label>
      <Input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Label htmlFor="email">
        <Text tag="span" variant="formLabel">Seu email:</Text>
      </Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Label htmlFor="message">
        <Text tag="span" variant="formLabel">Sua mensagem:</Text>
      </Label>
      <TextArea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '32px 0',
        }}
      >
        {!submited && (
          <>
            <Text
              tag="span"
              variant="formLabel"
              style={{ marginRight: '12px' }}
            >
              Enviar
            </Text>
            <ContactButton
              type="submit"
              icon="arrow"
            />
          </>
        )}

        {submited && <Done />}
      </div>
    </WrapperForm>
  );
}

Form.propTypes = {
  setModalState: PropTypes.func.isRequired,
};
