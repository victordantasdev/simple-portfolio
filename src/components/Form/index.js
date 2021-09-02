import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import { Loading, Success, Error } from '../../assets/animations/formAnimations';

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-around;
  padding: 0 45px;
  border-radius: 10px 10px 0 0;
  box-shadow: -1px -1px 50px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.borders.color};

  ${breakpointsMedia({
    xs: css`
      width: 100vw;
    `,

    md: css`
      width: 768px;
    `,
  })};
`;

const FormTitle = styled.h2`
  margin-bottom: 0;
  
  ${breakpointsMedia({
    xs: css`
      font-size: 24px;
      font-weight: 400;
    `,
    md: css`
      font-size: 36px;
      font-weight: 400;
    `,
  })}
`;

const Label = styled.label`
  align-self: flex-start;
  margin: 32px 0 12px 0;

  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
      font-weight: 400;
    `,
    md: css`
      font-size: 34px;
      font-weight: 400;
    `,
  })}
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 40px;
  border: 2px solid ${({ theme }) => theme.secondary.color};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  font-size: 40px;
  border: 2px solid ${({ theme }) => theme.secondary.color};
`;

const SendText = styled.span`
  margin-right: 12px;

  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
      font-weight: 400;
    `,
    md: css`
      font-size: 34px;
      font-weight: 400;
    `,
  })}
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
  filter: ${({ theme }) => (
    theme.title === 'dark'
      ? 'invert(1)'
      : 'invert(0)'
  )};
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export default function Form({ setModalState }) {
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [formInfo, setFormInfo] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');
    setFormInfo({
      ...formInfo,
      [fieldName]: e.target.value,
    });
  };

  return (
    <WrapperForm
      data-modal-safe-area="true"
      onSubmit={(e) => {
        e.preventDefault();
        const formDTO = {
          name: formInfo.nome,
          email: formInfo.email,
          message: formInfo.mensagem,
        };

        setSubmissionStatus(formStates.LOADING);
        const url = 'https://contact-form-api-jamstack.herokuapp.com/message';
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(formDTO),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }

            throw new Error('Não foi possível enviar a mensagem agora :(');
          })
          .then(() => {
            setSubmissionStatus(formStates.SUCCESS);
            setTimeout(() => {
              setSubmissionStatus(formStates.DEFAULT);
            }, 1.2 * 1000);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            setTimeout(() => {
              setSubmissionStatus(formStates.DEFAULT);
            }, 1.2 * 1000);
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }}
    >
      <ContactButton
        onClick={() => setModalState(false)}
        style={{
          position: 'absolute', top: '30px', right: '30px',
        }}
        icon="close"
        as="div"
      />
      <FormTitle>Envie sua mensagem</FormTitle>

      <Label htmlFor="name">Seu nome:</Label>
      <Input
        type="text"
        id="name"
        name="nome"
        value={formInfo.nome}
        onChange={handleChange}
        required
      />

      <Label htmlFor="email">Seu email:</Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={formInfo.email}
        onChange={handleChange}
        required
      />

      <Label htmlFor="message">Sua mensagem:</Label>
      <TextArea
        id="message"
        name="mensagem"
        value={formInfo.mensagem}
        onChange={handleChange}
        required
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '32px 0',
        }}
      >
        {submissionStatus === formStates.DEFAULT && (
          <>
            <SendText>Enviar</SendText>
            <ContactButton
              type="submit"
              icon="arrow"
            />
          </>
        )}

        {submissionStatus === formStates.SUCCESS && <Success />}
        {submissionStatus === formStates.LOADING && <Loading />}
        {submissionStatus === formStates.ERROR && <Error />}
      </div>
    </WrapperForm>
  );
}

Form.propTypes = {
  setModalState: PropTypes.func.isRequired,
};
