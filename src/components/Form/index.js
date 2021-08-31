import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import Text from '../foundation/Text';
import { Loading, Success, Error } from '../../assets/animations/formAnimations';

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
        name="nome"
        value={formInfo.nome}
        onChange={handleChange}
        required
      />

      <Label htmlFor="email">
        <Text tag="span" variant="formLabel">Seu email:</Text>
      </Label>
      <Input
        type="email"
        id="email"
        name="email"
        value={formInfo.email}
        onChange={handleChange}
        required
      />

      <Label htmlFor="message">
        <Text tag="span" variant="formLabel">Sua mensagem:</Text>
      </Label>
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
