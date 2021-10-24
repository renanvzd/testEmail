import { FormEvent, useState } from 'react';
import { Container, Header } from "./styleContatos";

export function FaleConosco() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email.trim() || !nome.trim() || !mensagem.trim()) {
      let mensagemVazia = alert('Por favor, preencha todos os campos do formulário.')

      return (mensagemVazia);
    }

    console.log({
      email,
      nome,
      mensagem,
    })

    setEmail('');
    setNome('');
    setMensagem('');
  }

  return (
    <>
      <Header>
        <div className="header">
          <h1>Fale Conosco</h1>
        </div>
      </Header>
      <Container onSubmit={handleFormSubmit}>
        <div className="containerForm">
          <h1>E-mail</h1>
          <input
            placeholder="Informe o seu e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <h1>Nome</h1>
          <input
            placeholder="Informe seu nome"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />

          <h1>Mensagem</h1>
          <textarea
            placeholder="Informe o endereço do condomínio "
            value={mensagem}
            onChange={event => setMensagem(event.target.value)}
          />

          <div>
            <button type="submit">
              Enviar
            </button >
          </div>
        </div>
      </Container>
    </>
  );
}
