import React from "react";

import {
  Container,
  DivTitle,
  Title,
  SubTitle,
  DivBottom,
  Column,
} from "./styles";

import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../Button";

export default function PerguntasFrequentes({ pix = false }) {
  return (
    <Container>
      <DivTitle>
        <SubTitle>PERGUNTAS FREQUENTES</SubTitle>
        <Title>Tire suas dúvidas abaixo</Title>
      </DivTitle>
      <DivBottom>
        <Column>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Como funciona?</Accordion.Header>
              <Accordion.Body>
                Nós temos um sistema com milhões de usuários cadastrados
                voluntariamente que fazem parte do nosso programa de afiliação,
                deixando os perfis disponíveis para interações. Ao efetuar a
                compra, você informa o @ do perfil no ato da compra e
                colocaremos na nossa plataforma para que estes seguidores sigam
                o seu perfil.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Os seguidores são reais?</Accordion.Header>
              <Accordion.Body>
                Sim, nossos seguidores são reais, brasileiros e ativos.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Os seguidores interagem?</Accordion.Header>
              <Accordion.Body>
                Nossos seguidores são de altíssima qualidade, então a chance de
                interagirem com o qualquer publicação do seu perfil é bem alta.
                Porém essa interação dos seguidores enviados ocorre de forma
                espontânea de acordo com o proprietário da conta. Por isso é
                sempre importante estar postando bons conteúdos e estar
                procrurando sempre manter o perfil atraente para o público.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Posso segmentar meu público?</Accordion.Header>
              <Accordion.Body>
                Sim, basta nos enviar no WhatsApp as segmentações junto do seu
                número do pedido após efetuar a compra.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Recebo em quanto tempo?</Accordion.Header>
              <Accordion.Body>
                Pedimos um prazo máximo de 2 dias úteis para iniciar os envios
                por questão de segurança! Mas praticamente todos os nossos
                serviços entram em algumas horas após a compensação do pagamento
                em nosso sistema.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Column>
        <Column>
          <Accordion>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Há alguma variação ou queda?</Accordion.Header>
              <Accordion.Body>
                Como são perfis reais, pode haver uma pequena taxa de variação,
                porém é extremamente raro de acontecer. Mas não se preocupe, se
                algum seguidor deixar de seguir, nossa plataforma repõe com
                novos seguidores gratuitamente.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Como funciona a reposição?</Accordion.Header>
              <Accordion.Body>
                Como prezamos a melhor experiência possível para nossos
                clientes, desenvolvemos um sistema no qual se houver alguma
                eventual queda de nossos seguidores, a nossa plataforma irá
                repor automaticamente. A reposição é vitalícia.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Onde eu recebo estes seguidores?
              </Accordion.Header>
              <Accordion.Body>
                Você recebe os seguidores diretamente em seu perfil, no caso, o
                perfil que for cadastrado por você no momento da compra em nosso
                site.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
              <Accordion.Header>Preciso passar minha senha?</Accordion.Header>
              <Accordion.Body>
                Não, não solicitamos a senha do seu perfil em hipótese alguma.
                Precisamos apenas do @usuário do seu perfil.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                É seguro? Posso confiar que vão me entregar?
              </Accordion.Header>
              <Accordion.Body>
                Totalmente!!! Nós somos uma empresa com alvará de funcionamento
                e que opera no CNPJ (42.258.811/0001-37) , tornando todo o
                procedimento bem seguro. Nosso escritório fica no interior do
                Rio de Janeiro, contamos com uma equipe qualificada de suporte
                que irá te auxiliar diariamente caso haja dúvidas. Atuamos no
                mercado de entrega de serviço para redes socais há 4 anos. Além
                disso, utilizamos as melhores plataformas de pagamentos so
                Brasil.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Column>
      </DivBottom>
      {pix && <Button text="quero fazer a transferencia" />}
    </Container>
  );
}
