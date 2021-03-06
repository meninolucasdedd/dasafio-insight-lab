import React from 'react';
import {  Link } from 'react-router-dom';
import { FiChevronLeft} from 'react-icons/fi';


import logoImg from '../../assets/octocat.svg';
import { Header, HowItWorkInfo, Subtitle, Card, } from './styles';



const HowItWorks: React.FC = () =>{
  return(
    <>
    <Header>
      <img src={logoImg} alt="Avatar Empresa"/>
        <Link to="/">
          <FiChevronLeft size={16}/>
            Voltar
        </Link>
    </Header>

    <HowItWorkInfo>
      <Subtitle>
         Como funcionam os trabalhos do Github?
      </Subtitle>
      <h2>
         GitHub Jobs é um ótimo lugar para atrair os melhores talentos técnicos para os cargos de desenvolvimento de software aberto da sua empresa.
      </h2>
      <br></br>
      <h2> Veja como:</h2>



      <Card>
    <Link to={'/'}>
      <img src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg" alt="Passo 01" />
      <div>
        <strong>Crie e visualize sua listagem</strong>
        <div>
          <p>Veja exatamente como sua listagem ficará antes de publicá-la ao vivo. Antes de criar uma lista, você deve fazer login com sua conta do GitHub e verificar seu endereço de e-mail.</p>
        </div>
      </div>
      </Link>
    </Card>
    <Card>
     <Link to={'mailto:jobs@github.com'}>
      <img src="https://jobs.github.com/images/modules/faq/screenshot-editor.jpg" alt="Passo 01" />
      <div>
        <strong>
          Pague com um dos principais cartões de crédito
        </strong>
        <div>
          <p>Faturamento disponível mediante solicitação para pedidos em massa.</p>
          <p>Envie um email para <strong>jobs@github.com</strong> </p>
          <br></br>
          <p>Desculpe, mas no momento, não há agências de recrutamento.</p>
        </div>
      </div>
      </Link>
    </Card>
    <Card>
      <Link to={'/'}>
        <img src="https://jobs.github.com/images/modules/faq/screenshot-listing.jpg" alt="Passo 01" />
        <div>
          <strong>
            Sua listagem vai ao ar imediatamente
          </strong>
          <div>
            <p>As listagens estão no ar por 30 dias. </p>
            <p>Enviaremos a você um recibo e um link para alterar a listagem. </p>
          </div>
        </div>
      </Link>
    </Card>
    </HowItWorkInfo>
    </>
  )
}

export default HowItWorks;
