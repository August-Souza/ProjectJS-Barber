import React, {useRef,useCallback} from 'react';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';


import { FiLogIn,FiMail, FiLock } from "react-icons/fi";
import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email valido'),
        password: Yup.string().required('Senha obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error)

      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail"/>

          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
