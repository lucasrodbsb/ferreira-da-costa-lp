import { AiFillHome } from "react-icons/ai";
import {MdFamilyRestroom, MdOutlineHomeWork} from 'react-icons/md'
import {FaUserMd} from 'react-icons/fa'
import {FaUserTie} from 'react-icons/fa'
import {GoLaw} from 'react-icons/go'
import {HiShoppingCart} from 'react-icons/hi'
import {IoMdPaper} from 'react-icons/io'
import {BsFillCarFrontFill, BsHouses} from 'react-icons/bs'
import {GiRobber} from 'react-icons/gi'
import {MdOutlineElderly} from 'react-icons/md'
import {MdMapsHomeWork} from 'react-icons/md'
import {GiTakeMyMoney} from 'react-icons/gi'

export type JobAreasType = {
    id: number;
    icon: React.ReactNode;
    title: string;
    urlImage?: string;
    mainText?: string;

  };

 export const jobAreasData: JobAreasType[] = [
  {
    id: 1,
    icon: <GiTakeMyMoney />,
    title: "Soluções Para Cobrança Judicial",
    urlImage: '/detalhesImg/bg1.png',
    mainText: `Cobrança por Inadimplência é sempre uma dor de cabeça e algumas pessoas acreditam que não vale a pena cobrar judicialmente, porém nós da Ferreira da Costa Advocacia, temos soluções para você interessado em cobrar suas dividas sem dor de cabeça.

    Primeiro vamos explicar a você a existência de algumas formas de cobranças judicias, com detalhes específicos.
    
    <h2 class='colorDBlue'>Tipos de títulos executivos </h2>
    <h2 class='colorDBlue'>O que é cheque?</h2>
    A lei diz que o cheque é uma ordem de pagamento à vista. É um título que obriga o banco a pagar uma determinada quantia de dinheiro ao seu portador ou pessoa nomeada. Então, teoricamente, quando você receber um cheque, já pode ir direto ao banco para receber a quantia devida.
     
    <h2 class='colorDBlue'>Cheque pré-datado.</h2>
    Porém, com o passar dos anos, através de práticas costumeiras de mercado, o cheque tornou-se uma forma de pagamento a prazo, dando origem ao popularmente conhecido como “cheque pré-datado”. Essa “espécie” de cheque, criada através do costume, é reconhecida em nosso ordenamento jurídico como sendo cheque “pós-datado”.
     
    Nesse sentido, mesmo a lei definindo o cheque como uma ordem de pagamento à vista, se você receber o título “pós-datado”, não poderá descontá-lo antes do prazo, sob pena, inclusive, de responder pelos danos civis (danos materiais, morais, etc.) provenientes de tal prática.
       
    <h2 class='colorDBlue'>O que é Duplicata (boleto)?</h2>
    Uma duplicata é um título de crédito que representa uma ordem de pagamento. Esse modelo, que surgiu no Brasil, só pode ser emitido diante de duas situações específicas: na compra e venda de produtos mercantis ou na prestação de serviços.
    No caso da duplicata mercantil, o uso mais comum acontece entre transações comerciais de compra e venda em atacado.
    A necessidade de emissão de uma duplicata é fruto da relação entre três elementos: a pessoa que emite a ordem de pagamento, o beneficiado e o pagador dessa ordem de pagamento.
    
    <h2 class='colorDBlue'>O que é nota promissória?</h2>
    Nota promissória é um registro de uma dívida, com uma promessa de pagamento da mesma pelo devedor. Com assinatura e preenchida corretamente, tem valor legal e pode ser cobrada na Justiça.
     
    <h2 class='colorDBlue'>Métodos eficazes para cobrar um cheque sem fundo.</h2>
    Existem diversas maneiras de se cobrar uma dívida cheque sem fundo, porém, pela prática e experiência que tenho como advogado, irei explicar 03 (três) métodos de cobrança que, na minha opnião, são os mais eficazes.
     
    <h2 class='colorDBlue'>Ação de execução.</h2> 
    Essa, para mim, é a forma mais eficaz de se cobrar um cheque ou nota promissória. Grosso modo falando, na ação de execução, você já ingressa cobrando o valor constante no título, sob pena de penhora dos bens do devedor. Nesse sentido, na maioria dos casos, não há o que se discutir: se o emitente da cártula não pagar o valor, seus bens serão penhorados.
    Lembrando que somente é possível ação de execução em no máximo seis meses após o vencimento do cheque ou nota promissória.
     
    Existe também a execução de outros títulos 
     
    <h2 class='colorDBlue'>Ação monitória.</h2>
    Na ação monitória você também será capaz de ingressar com um pedido para que o devedor pague a quantia no título, porém, caso ele não efetue o pagamento, diferente da execução, você não poderá, de forma imediata, requerer a penhora dos bens. Isso porque o juiz ainda terá que sentenciar o processo, tornando o seu cheque um título executivo (capaz de iniciar a execução).
     
    Somente após essa sentença é que você poderá iniciar o procedimento de execução. Nesse sentido, a ação monitória é um procedimento mais demorado e que possibilita uma chance maior de defesa para o devedor. Mas você deve estar se perguntando: para que irei usar a ação monitória se existe a execução direta?
     
    A monitória existe para a cobrança dos famosos cheques “prescritos”. Nessa situação, você primeiramente deve ingressar com uma ação monitória, para tornar o título exequível e, posteriormente, iniciar o procedimento de execução e no caso do cheque poderá cobrar juros e correção monetária desde a data da apresentação do cheque na instituição bancária.
    Então a diferença básica para a execução e monitória é que, na primeira, você já tem um título executivo, capaz de expropriar os bens do devedor, e, na segunda, você pede para que o juiz declare o seu cheque como sendo um título executivo para, somente depois, você começar o procedimento de execução.
     
    <h2 class='colorDBlue'>Ação de Cobrança.</h2>
    Na terceira posição está a ação de cobrança, que ocorre quando o cheque tem alguma rasura dano que impossibilite cobra-lo como execução ou monitória, porém existem provas de que a divida existe, como uma conversa por aplicativo por exemplo, onde o devedor assume a dívida perante o credor.
    
    Caso necessite de algumas dessas soluções, entre em contato com a nossa equipe imediatamente no nosso WhatsApp <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>`
  },
    {
      id: 2,
      icon: <GoLaw />,
      title: "Soluções Em Licitações E Contratos Públicos",
      urlImage: '/detalhesImg/licitacao.png',
      mainText: `<h2 class='colorDBlue'>Análise de Editais</h2>
      Sabendo da Importância do conhecimento preciso de todos os termos convocatórios, a Ferreira da Costa Advocacia presta serviços de análise de editais, bem como a formulação de consultas e impugnações, sempre visando a melhor informação e um processo totalmente adequado à legislação em vigor.
      
      <h2 class='colorDBlue'>Recursos / Contrarrazões Administrativos</h2>
      Primando pela qualidade de seus serviços, a Ferreira da Costa Advocacia atua na elaboração de recursos administrativos e contra-razões a recursos interpostos, sempre com o que há de mais recente na doutrina e jurisprudência, visando a obtenção de resultados satisfatórios aos seus clientes.
      
      <h2 class='colorDBlue'>Impugnação de edital</h2>
      Ao participar de uma licitação o licitante afirma ter conhecimento e concordar com as cláusulas do instrumento convocatório, caso existam falhas/vícios no edital este deve ser impugnado em tempo hábil para que haja a sua devida correção, nossos consultores elaboram esta peça permitindo que a sua empresa cumpra com as regras estabelecidas.
      
      <h2 class='colorDBlue'>Recomposição ou reajuste de preços</h2>
      Durante a execução de um contrato administrativo podem ocorrer alguns episódios capazes de alterar o equilíbrio econômico-financeiro que foi estabelecido quando a empresa apresentou sua proposta para a Administração. Nossos consultores elaboram a peça para que a remuneração volte a ser justa para o contratado.
      
      Caso necessite de algumas dessas soluções, entre em contato com a nossa equipe imediatamente no nosso WhatsApp <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>
      `
    },
    {
      id: 3,
      icon: <AiFillHome />,
      title: "Soluções Jurídicas Imobiliárias",
      urlImage: '/detalhesImg/imob2.png',
      mainText: `<h2 class='colorDBlue'>Saiba como rescindir a promessa de compra e venda e reaver até 90% do que pagou de uma única vez!</h2>
      O que nenhum vendedor de imóveis fala quando você faz uma promessa de compra e venda de lote, na modalidade parcelada, é que você pode pedir a quebra do contrato (rescisão) e pegar o seu dinheiro de volta, devidamente corrigido e em parcela única.
       
      Além disso, é possível parar de pagar as parcelas e ainda não ter o nome negativado, com autorização judicial, o que evitará que você continue fazendo esforço para pagar algo que você vai desistir e receber seu dinheiro de volta.
       
      Esse é o entendimento do STJ (súmula 543) e também em reiterados julgados do Tribunal de Justiça do Estado de São Paulo, que mais abaixo eu coloco aqui pra você ter amplo conhecimento dos seus Direitos.
       
      A rescisão, que é o termo juridicamente usado para esse tipo de quebra de contrato, sob o ponto de vista do consumidor, pode ser dar em 02 (duas) circunstâncias, basicamente: 
       
      1. por vontade do consumidor comprador (porque ele quer, porque não está conseguindo pagar, etc.;
       
      2. por culpa da loteadora vendedora (por descumprimento contratual).
       
      Abaixo, vamos explicar cada uma delas mais detalhadamente e como você pode se beneficiar disso, veja:
       
      <h2 class='colorDBlue'>Possibilidades do Distrato de Contrato de Compra e Venda Parcelada</h2>
      <b class='colorDBlue fontS'>1. Iniciativa ou vontade do Comprador:</b>
       
      Quando é o comprador quem solicita a rescisão, e não importa o motivo, o vendedor está obrigado a atender, contudo, uma parte do valor pago deve ficar para custeio das despesas operacionais do contrato, como por exemplo, comissão de corretor, administração do contrato, etc; isso para as compras feitas até dezembro de 2018.
       
      O que muitas loteadoras/vendedoras fazem é colocar no contrato uma porção de multas que são indevidas, que muitas vezes geram para o consumidor a devolução de apenas 30% do valor pago, e ainda sim de forma parcelada, o que é injusto e inadmissível, do ponto de vista jurídico.
       
      Ou seja, seria o mesmo que você tivesse pago R$ 50.000,00 (cinquenta mil reais) e ficasse com apenas R$ 15.000,00 (quinze mil reais).
       
      Ao contrário disso, considerando o mesmo valor como exemplo, se você tivesse pago R$ 50.000,00 (cinquenta mil reais), teria que receber de volta R$ 45.000,00 (quarenta e cinco mil reais), o que, com a correção monetária dos valores, pode chegar a R$ 58,500,00 (cinquenta e e oito mil e quinhentos reais), dependendo do prazo com que esses pagamentos foram efetuados.
       
      Isso tem que ser devolvido para o consumidor em parcela única.
       
      Veja, depois de analisar muitos casos de abuso por parte dos empreendimentos, os Tribunais de Justiça de vários estados tem entendido que o valor dessa retenção é de 10% do valor das importâncias pagas, ou seja, a empresa vendedora tem que devolver 90% do valor pago (corrigido), à vista e em única parcela.
       
      Além disso, tem a súmula 543 do STJ, veja:
       
      Súmula 543 - Na hipótese de resolução de contrato de promessa de compra e venda de imóvel submetido ao Código de Defesa do Consumidor, deve ocorrer a imediata restituição das parcelas pagas pelo promitente comprador - integralmente, em caso de culpa exclusiva do promitente vendedor/construtor, ou parcialmente, caso tenha sido o comprador quem deu causa ao desfazimento.
       
      Para que você atinja esse melhor resultado é necessário que procure um Advogado especialista, pois apenas ele saberá o caminho nas Leis para chegar nesse resultado.
       
      Outra boa notícia é que o consumidor não precisa ficar pagando as parcelas, pois, com pedido liminar, após distribuiída a ação, geralmente, os Juízes acolhem pedido de antecipação de tutela e garantem ao consumidor o direito de parar de pagar as parcelas, sem que seu nome seja protestado ou negativado, acabando com as ameaças da loteadora e risco de negativação.
       
      Ou seja, nesse momento tão importante e de crise que estamos passando, os consumidores que optarem pelo distrato (quebra do contrato) vão parar de ter a obrigação de pagar as parcelas mensais, restando apenas ter restituído os valores pela loteadora, o que certamente ajudará muito, pois poderá usar esse dinheiro para atender outras necessidades mais urgentes.
       
      Para se ter uma noção do quão boa é essa alternativa, existem muitos proprietários, que vendo que não é mais vantajoso continuar pagando o lote; as vezes por causa do aumento das parcelas e do saldo devedor que teve por causa do aumento do IGPM, eles desistem dos lotes e com o valor que pegam de volta, fazem a compra de um novo lote, muitas vezes pagando à vista pagando a diferença em poucas vezes; sem juros.
       
      Isso é fazer conta e usar a Lei a seu favor. As vezes sai de uma dívida imensa e com o valor que recebe ainda compra um novo lote e paga à vista.
       
      Mas atenção, existem alguns cuidados que devem ser tomados, daí a importancia de buscar sempre auxílio de um Advogado que seja especialista nesse tipo de processo e que já tenha atuado em muitos outros.
       
      Para facilitar ainda mais para os consumidores, hoje isso tudo é feito online e digitalmente, pois todos os processos são digitais e online, tendo o consumidor total acesso aos processos e à atuação do Advogado escolhido para defender seus direitos e recuperar o seu dinheiro. Isso foi um avanço acelerado pela pandemia, pois com as restrições tudo passou a ser feito totalmente online, inclusive audiências de conciliação, que é a única que pode ter nesse caso, pois todas as provas são documentais.
       
      O Ferraira da Costa Advocacia, por seu corpo jurídico especializado, já auxiliou muitos consumidores proprietários, especialmente nessa crise, a obterem esses benefícios na Justiça e receberem praticamente todo seu dinheiro de volta, sempre tendo os melhores resultados e mais rápidos; tanto para entrar com a ação, que é feita em até 4 dias, como para obtenção das liminares para não ter que pagar mais e também sentenças favoráveis para restituição máxima.
       
      O atendimento é feito totalmente online, via WhatsApp, que foi eleita como sendo o melhor ferramenta de comunicação com os clientes, que após utilizarem dos serviços, fazem do escritório uma referência nacional em avaliações positivas no google meu negócio, o que pode facilmente ser confirmada clicando no link abaixo ou pesquisando o nome escritório no google. 
      Se você está precisando INTERROMPER os pagamentos das parcelas ou já está atrasado com elas, sofrendo risco de ser negativado, de perder o lote e o dinheiro investido, ou ainda com qualquer outra dúvida, consulte um Advogado de sua confiança.
       
      Se Já percebeu que manter os pagamentos também não é um bom negócio, consulte um Advogado de sua confiança, que certamente ele saberá te orientar para atingir o melhor resultado e mais rapidamente.
       
      Em continuação, existe a segunda hipotese de quebra do contrato.
       
      <b class='colorDBlue fontS'>2. Por culpa do Vendedor (loteadora):</b>
       
      Já quando a culpa é da empresa vendedora, ou melhor, do empreendimento, seja porque atrasou na entrega do mesmo, descumprindo o contrato, ou seja porque ela simplesmente descumpriu alguma cláusula do mesmo (muito comum descumprir a cláusula que prevê a correção monetária), o consumidor comprador está autorizado a pedir a rescisão sem ter que pagar nada por isso, e o melhor, receber as importancias pagas (100%), devidamente corrigido e de uma única vez.
       
      Causas muito comuns são que o empreendimento não cumpre o PRAZO DE ENTREGA, o que caracteriza um descumprimento e pode autorizar a rescisão contratual e restituição de todas as importâncias pagas ao consumidor proprietário.
       
      Além disso, quando está estipulado no contrato que existe multa em favor da empresa vendedora, é possível solicitar que essa multa seja aplicada em favor do consumidor, o que geraria retorno financeiro dessa multa, que varia de acordo com cada contrato, sendo, na maioria dos casos, 10% do valor do contrato (por exemplo).
       
      A multa pode ser maior, aí depende de cada caso.
       
      Ou seja, caro leitor, qualquer que seja a hipótese utilizada pelo consumidor, ele pode pedir o desfazimento do negócio, seja por sua própria iniciativa (vontade), seja por culpa da loteadora vendedora (descumprimento), ela deve restituir parte significativa dos valores pagos em parcela única, isso considerando os contratos anteriores à lei do distrato.
       
      Claro que cada caso é um caso e você leitor deve procurar um Advogado de sua confiança para analisar seu direito e a melhor forma de exercê-lo, tendo esse conteúdo como único intuito te informar acerca dos seus Direitos, posto que nem sempre é assim, e já cansamos de ver pessoas entregando lotes pura e simplesmente para sair das parcelas, perdendo milhares de reais.
       
      A Ferreira da Costa Advocacia, que tem ganhado cada vez mais notoriedade na atuação nas causas que envolvem rescisão de contrato de compra e venda de lotes parcelados, formalizados diretamente com as loteadoras/empreendimentos imobiliários, conta com um corpo jurídico altamente eficiente e adaptado às mais modernas formas de atendimento online, possibilitando o acesso de qualquer proprietário do Brasil aos exercício de seus Direitos.
       
      O atendimento é feito totalmente online, via WhatsApp, que foi eleita como sendo o melhor ferramenta de comunicação com os clientes, que após utilizarem dos serviços, fazem do escritório uma referência nacional em avaliações positivas no google meu negócio, o que pode facilmente ser confirmada clicando no link abaixo ou pesquisando o nome escritório no google. 
      
      Se você sofreu com falsas promessas das loteadoras, se as obras ou entrega do imóvel estão em atraso ou já identificou algum descumprimento contratual por parte da empresa vendedora, ou ainda com qualquer outra dúvida, consulte um Advogado de sua confiança.
      
      Para falar com um especialista da nossa equipe, <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI</a> que você será direcionado, ou, se preferir, clique no ícone do WhatsApp!`
    },
    {
      id: 4,
      icon: <BsHouses />,
      title: "Soluções Em Inventário Judicial e Extrajudicial",
      urlImage: '/detalhesImg/inventario.png',
      mainText: `<h2 class='colorDBlue'>Inventário: O que é? Para que serve? Qual o prazo para entrar com um inventário? Quanto custa um inventário? Essas e outras perguntas respondidas agora!</h2>
      Você já deve ter ouvido falar sobre inventário, principalmente quando um parente próximo faleceu. Mas afinal, o que é um inventário? Para que serve? Qual o prazo para entrar com um inventário? Quanto custa um inventário? Existe multa? Aprenda também quem pode ser um inventariante, a como fazer um registro do inventário e o que acontece quando o herdeiro não fornece os documentos. 
      
      <h2 class='colorDBlue'>O que é um inventário?</h2>
      O inventário nada mais é que um procedimento inserido entre os artigos 610 e 673 do Código de Processo Civil para que todos os bens do falecido sejam divididos de forma justa e igualitária entre seus herdeiros. Ele deve ser utilizado, ou seja, ele é obrigatório, para que todos os bens da pessoa que morreu sejam transferidos às pessoas que têm direito de recebê-los.
      
      <h2 class='colorDBlue'>Para que serve o inventário?</h2>
      Ele serve para que todos os bens e direitos deixados pela pessoa morta (denominada de cujus) sejam transferidos aos seus herdeiros de forma igualitária. Também é utilizado para validar alguns atos que precisam de autorização judicial, tais como levantamento de valores em bancos e administração de bens enquanto perdurar o procedimento na justiça.
      
      <h2 class='colorDBlue'>Qual o prazo?</h2>
      Ele é de 02 (dois) meses. Muitos textos desatualizados da internet estão dizendo que o prazo para que você ingresse com um procedimento de inventário é de 60 (sessenta) dias, porém, com a alteração do Código de Processo Civil, esse prazo agora é de 02 (dois) meses, de acordo com o artigo 611 do CPC.
      
      Você deve estar pensando: 02 (dois) meses são equivalentes a 60 (sessenta) dias. Não! No nosso entendimento, se a intenção do legislador fosse a contagem do prazo em dias ele não teria especificado que essa contagem seria em meses.
      
      Então se uma pessoa morreu no dia 15 de janeiro de 2023, o prazo para você entrar com o inventário é até o dia 15 de março do mesmo ano. Se fosse para contar em dias, seguindo a regra do CPC, você deveria contar 60 (sessenta) dias úteis a partir do dia 15 de janeiro de 2019, o que daria um prazo fatal no dia 09 de abril de 2019.
      
      Entendeu a diferença? O prazo para fazer um inventário sempre será de 02 (dois) meses, nada de 60 (sessenta) dias!

      Temos que destacar que esse prazo não é absoluto. De acordo com o próprio artigo 611 do CPC, o prazo poderá ser prorrogado pelo próprio juiz ou a pedido da parte, ou seja, a depender da sua situação, o juiz poderá estabelecer um prazo maior que 02 (dois) meses.
      
      <h2 class='colorDBlue'>Quanto custa um inventário?</h2>
      Infelizmente essa pergunta não possui uma resposta objetiva. Vai depender muito do seu caso. Vários fatores podem influenciar no custo do seu inventário, tais como: quanto o advogado cobrou, quantos bens serão partilhados, se ele será inventário judicial ou extrajudicial, quantos herdeiros, qual o preço das custas no tribunal ou no cartório, dentre outros fatores.
      
      Em geral o custo de um inventário não é barato, porém existem alguns benefícios para as pessoas que não têm condições de arcar com o procedimento, tais como isenções de custas e advogados públicos.
      
      Se você mora no DF, por exemplo, é aconselhável procurar por um advogado em Brasilia para que ele exerça uma consultoria jurídica e lhe repasse uma média do quanto mais ou menos você irá gastar. A dica é procurar por um advogado para que ele lhe diga a média dos gastos.
      
      <h2 class='colorDBlue'>Existe multa em inventário?</h2>
      Sim. Se você não entrar com o procedimento de inventário no prazo estipulado pela lei, terá que pagar uma multa. O STF já se manifestou no sentido de que essa multa é constitucional, ou seja, pode ser cobrada (Súmula nº 542). O valor dessa multa é diferente em cada estado. No Distrito Federal, por exemplo, essa alíquota é de 20% sobre o Imposto de Transmissão Causa Mortis e Doação (ITCD). 
      
      <h2 class='colorDBlue'>É gratuito?</h2>
      Depende de cada caso. Se for uma pessoa considerada pobre por lei, ela terá isenção de custas no processo, no cartório e poderá ser assessorada por um advogado público, o que reduzirá e muito o valor e, a depender do caso, o inventário realmente poderá ser gratuito (custo zero).
      
      Porém, para que ele seja “totalmente gratuito” a pessoa deverá preencher os requisitos estabelecidos por lei. O mais aconselhável é você solicitar uma consulta com um advogado de inventário e verificar essas condições.
      
      <h2 class='colorDBlue'>Quem pode ser um inventariante?</h2>
      De acordo com o artigo 617 do Código de Processo Civil, podem ser inventariantes:

      •	o cônjuge ou companheiro sobrevivente, desde que estivesse convivendo com o outro ao tempo da morte deste.
      •	o herdeiro que se achar na posse e na administração do espólio, se não houver cônjuge ou companheiro sobrevivente ou se estes não puderem ser nomeados.
      •	qualquer herdeiro, quando nenhum deles estiver na posse e na administração do espólio.
      •	o herdeiro menor, por seu representante legal.
      •	o testamenteiro, se lhe tiver sido confiada a administração do espólio ou se toda a herança estiver distribuída em legados.
      •	o cessionário do herdeiro ou do legatário.
      •	o inventariante judicial, se houver.
      •	pessoa estranha idônea, quando não houver inventariante judicial.

      De acordo com o STJ, a ordem da lista de inventariante pode ser desrespeitada, a depender do caso em concreto (AREsp 1397282).

      Ademais, é necessário que o inventariante esteja com seu discernimento mental totalmente regular, afinal, é ele quem representa o espólio, cumprindo todas as suas obrigações legais.

      Não há nenhum problema caso o inventariante seja uma pessoa idosa, porém, ele deve estar saudável mentalmente (com lucidez). Ademais, o inventariante idoso pode ser substituído se ficar demonstrada a ausência de discernimento, podendo, posteriormente, sofrer uma ação de interdição.
      
      <h2 class='colorDBlue'>Herdeiro não fornece documentos para efetuar o inventário.</h2>
      Nesse caso os demais herdeiros poderão solicitar ao juiz para que ele obrigue o herdeiro negligente a fornecer toda a documentação faltante, sob pena de responder por crime de desobediência. Caso ainda haja recusa, o magistrado poderá solicitar aos órgãos competentes referida documentação.
      
      <h2 class='colorDBlue'>Inventário e partilha de bens.</h2>
      Como dito anteriormente, o intuito do inventário é repartir o patrimônio da pessoa que morreu para seus herdeiros. Essa divisão, cisão, é a chamada partilha de bens. A partilha de bens nada mais é que a divisão do patrimônio deixado pelo morto para as pessoas que fizeram parte do procedimento.

      Como envolve a divisão de patrimônio de uma pessoa falecida, para que não haja nenhuma nulidade nessa partilha de bens, todos os herdeiros devem fazer parte do procedimento de inventário, devendo todos os eles serem ouvidos e se manifestarem no procedimento.
      
      <h2 class='colorDBlue'>Registro de inventário em cartório.</h2>
      Após o encerramento do procedimento de inventário, você deve registrá-lo no cartório de imóveis, para transferência de propriedades, no órgão de fiscalização de trânsito, para transferência de veículos, nas Juntas Comerciais ou Cartório de Registro de Pessoas Jurídicas, para transferência de empresas, e nos bancos, para transferências de bens ou valores que estejam em poder do órgão bancário.
      
      Então, respondemos suas dúvidas? Ainda têm alguns pontos não esclarecidos? Precisa de um especialista na área? <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI</a> para falar com um especialista!`
    },
    {
      id: 5,
      icon: <FaUserMd />,
      title: "Soluções Trabalhistas",
      urlImage: '/detalhesImg/trabalho.png',
      mainText: `<h2 class='colorDBlue'>Missão de um advogado trabalhista</h2>
      Basicamente, a ação de um advogado trabalhista não pode se restringir somente a lidar com a avaliação de ações e a efetuação de acordo entre os envolvidos. Afinal, o profissional que tem o interesse de crescer nesse segmento precisa estar sempre pronto para avaliar o contexto da situação relatado por um possível cliente.
      
      Todavia, a missão do advogado trabalhista, antes de qualquer coisa, é compreender toda a situação, avaliar todas as variações e somente depois tomar as medidas cabíveis na esfera legal. Afinal, o advogado trabalhista precisa instruir o seu respectivo cliente a fim de identificar o critério adequado a ser adotado e quais são os riscos envolvidos em um possível processo.
      
      <h2 class='colorDBlue'>Atuação do advogado trabalhista com empregados e empregadores</h2>
      As ações trabalhistas podem tratar de vários problemas tanto para o colaborador quanto para a companhia, o que pode resultar em sérias conseqüências.
      
      Para o trabalhador, o principal dilema se refere às responsabilidades com os seus dependentes, ou seja, as pessoas que necessitam de seu suporte econômico para sobreviver.
      
      Portanto, a lentidão de uma ação ou uma estratégia inadequada pode causar graves dificuldades para a condição de vida do trabalhador. Justamente por isso, o advogado trabalhista precisa contar com uma sensibilidade extra para identificar em qual situação é melhor procurar por uma resolução judicial ou uma composição.
      
      Para a empresa, contar com um advogado trabalhista também é bastante importante, uma vez que o profissional pode aconselhar o seu cliente a utilizar estratégias com a finalidade de seguir as normas trabalhistas em vigor no país. A partir dessa conscientização, se torna simples reduzir o número de problemas com os seus funcionários e, consequentemente, diminuir a quantia de processos com origem trabalhista. No entanto, o advogado trabalhista não se trata apenas de um articulador de acordo entre empregados e empregadores.
      
      Precisa de um especialista na área? <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI</a> para falar com um especialista!
      `
    },
    {
      id: 6,
      icon: <IoMdPaper/>,
      title: 'Soluções Para Contratos',
      urlImage: '/detalhesImg/contrato.png',
      mainText: `<h2 class='colorDBlue'>Contrato de Gaveta: tudo o que você precisa saber.</h2>
      O contrato de gaveta talvez seja a expressão popular mais utilizada entre as pessoas que estão realizando algum negócio jurídico, principalmente quando envolve venda de imóvel, veículo, etc.
      
      Mas o que é contrato de gaveta? Ele tem validade? Existe contrato de gaveta registrado em cartório? Preciso de advogado para realizar um contrato de gaveta? Posso utilizá-lo para venda de veículo, imóvel ou até mesmo aluguel? 
      
      <h2 class='colorDBlue'>O que é contrato de gaveta?</h2>
      Como o próprio nome já diz, o contrato de gaveta é um instrumento no qual se formaliza algum tipo de negócio jurídico sem sua devida publicidade ao que está sendo negociado. Em outras palavras: o contrato de gaveta é um tipo de contrato no qual os contratantes, por alguma razão, não o tornam público.
       
      Ele é chamado de “contrato de gaveta” pois, geralmente, as partes contratantes, após a sua assinatura, guardam o instrumento contratual em suas residências, preservando-os dentro de móveis (gavetas).
       
      Essa “modalidade” contratual começou a ficar conhecida no Brasil entre as décadas de 80 e 90. Naquela época, o financiamento de imóveis e veículos era um procedimento extremamente burocrático e cansativo.
      
      Além disso, várias taxas e impostos também atrapalhavam a negociação. Nesse sentido, naqueles tempos, nem todas as pessoas eram capazes de financiar algum bem, realizando um contrato particular com quem realmente possuía o financiamento.
      
      <h2 class='colorDBlue'>Contrato de gaveta tem validade?</h2>
      Dúvida que está presente na maioria das pessoas que me procuram: o contrato de gaveta tem validade? Tem! Mas ele somente gera efeitos para as partes contratantes. Nesse sentido, nada do que estiver escrito no contrato de gaveta afetará terceiros.
       
      Um exemplo: Existência de cláusula na qual menciona que o devedor do financiamento principal é o próprio devedor do contrato de gaveta.
       
      Nesse exemplo, mesmo existindo tal cláusula, o banco deverá cobrar sempre do real devedor, que no caso, é o credor do contrato de gaveta. Ou seja, mesmo existindo cláusula obrigando o devedor a pagar o financiamento principal, essa obrigação é nula, pois em nenhum momento foi informado ao banco sobre essa “transferência” de devedor.
       
      Nesse sentido, essa cláusula afeta um terceiro (o banco), não possuindo validade alguma.
       
      Porém, quando as cláusulas não afetam terceiros, elas são válidas para as partes contratantes. Exemplo seria uma cláusula contendo a data do vencimento do pagamento, multa por atraso, etc. Como essas obrigações não afetam diretamente o agente financiador, elas podem ser validadas e surtirem efeitos.
      
      <h2 class='colorDBlue'>Contrato de gaveta registrado em cartório.</h2>
      Existe contrato de gaveta registrado em cartório? Sim. Porém, não é que ele seja realmente registrado no tabelionato, mas sim que as assinaturas de seus contratantes (firmas) sejam reconhecidas em cartório. Nesse sentido, a expressão correta seria “contrato de gaveta com firma (assinatura) registrada em cartório”.
       
      Mas qual a importância de se fazer esse tipo de contrato com firma reconhecida em cartório? Para dar mais segurança aos contratantes! Imagine um contrato de gaveta no qual as assinaturas não são autenticadas em cartório. Será muito mais difícil provar que um dos contratantes realmente assinou o termo contratual. 
      
      Sendo assim, o contrato de gaveta com firma registrada em cartório dá mais segurança aos contratantes.
      
      <h2 class='colorDBlue'>Contrato de gaveta precisa de advogado?</h2>
      Para todo tipo de contrato é imprescindível a sua elaboração ou revisão por um advogado especialista em direito contratual. Nesse sentido, para redigir um contrato de gaveta, a contratação de um advogado especialista na área é uma atitude que pode te ajudar a não ter problemas futuramente.
       
      Essa modalidade contratual só gera efeito para os próprios contratantes, não afetando terceiros. Logo, uma boa assessoria jurídica pode ajudá-lo a elaborar um contrato sem o risco do termo possuir cláusulas nulas.
       
      <h2 class='colorDBlue'>Contrato de gaveta de veículo financiado.</h2>
      Muito utilizado nos últimos anos, o contrato de gaveta de veículo financiado visa a transferência da obrigação de pagamento de um determinado financiamento veicular de uma pessoa para outra.
       
      Nesse tipo de contrato, o devedor assume o pagamento das parcelas oriundas do financiamento que está em nome do credor, podendo ficar com a posse do veículo. Nesse sentido, o devedor tem a obrigação de pagar o financiamento, contudo, tem o direito de ter a posse do automóvel para si.
       
      Diga-se posse, pois, na verdade, a propriedade do veículo é da instituição financeira, ou seja, quem é o real proprietário do automóvel é o banco. Caso não haja pagamento de alguma das parcelas, a instituição financeira poderá mover uma ação de busca e apreensão de veículo.
       
      <h2 class='colorDBlue'>Quem a instituição financeira poderá acionar?</h2>
      Aí fica uma pergunta: o banco deverá ingressar com uma ação contra o devedor do contrato de gaveta, afinal, ele quem assumiu as parcelas, ou contra o credor do contrato obscuro? Lembre-se que o contrato de gaveta não afeta terceiros, logo, a instituição financeira não pode ser prejudicada, devendo acionar o próprio credor, pois foi ele quem efetivamente contratou com o banco.
       
      Para entender melhor: Imagine que uma pessoa A contratou um financiamento de um veículo com o banco X. Logo depois, essa mesma pessoa A firmou um contrato de gaveta com B, ficando B obrigado a pagar o financiamento, porém, podendo utilizar o veículo. Se B deixar de pagar alguma das parcelas do financiamento, o banco X acionará A, devendo ela arcar com todo o prejuízo, por mais que exista um contrato de gaveta obrigando B a honrar com os pagamentos.
       
      Naquele exemplo, a pessoa A deverá arcar com todo o prejuízo em virtude da inadimplência de B, porém, posteriormente, poderá ingressar com uma ação cobrando o que despendeu. E como ele provará que era B quem assumiu as prestações? Através do contrato de gaveta!
       
      Percebe-se que o contrato de gaveta de veículo financiado pode gerar uma insegurança jurídica, afinal, uma pessoa assume dívida em seu nome, porém, quem honrará com a obrigação de pagar é outro indivíduo, alheio ao contrato de financiamento.
       
      <h2 class='colorDBlue'>Contrato de gaveta de imóvel financiado.</h2>
      O contrato de gaveta de imóvel financiado é um instrumento no qual o real devedor do financiamento transfere a obrigação de pagamento a terceiro que não está vinculado ao contrato original. Mais uma vez, perante terceiro, esse tipo de contrato não tem validade.
       
      Nesse sentido, caso haja alguma inadimplência, a instituição financeira não pode ser prejudicada, podendo acionar quem efetivamente contratou o financiamento.
       
      Em outras palavras: se o devedor do contrato de gaveta não honrar com o pagamento do financiamento, o credor poderá ser acionado pela instituição financeira, arcando com todo o prejuízo gerado. Praticamente é a mesma situação já explicada no tópico sobre o contrato de gaveta de veículo financiado.
       
      <h2 class='colorDBlue'>Contrato de gaveta de aluguel.</h2>
      O contrato de gaveta de aluguel de imóvel é o tipo de termo contratual mais utilizado entre a população brasileira. Esse instrumento regula obrigações relativas ao aluguel de imóvel. Assim como nos demais contratos de gaveta, essa modalidade não pode gerar prejuízos a terceiros. Nesse sentido, as obrigações convencionadas neste contrato somente obrigarão as partes contratantes. 
       
      É uma espécie contratual que, ao meu ver, gera menos insegurança jurídica em comparação com os outros tipos de contrato de gaveta. Existem milhares de modelos deste tipo de contrato na internet, porém, é interessante a contratação de um advogado para uma assessoria mais completa, diminuindo o risco do negócio jurídico. 
       
      <h2 class='colorDBlue'>Riscos do contrato de gaveta.</h2>
      Não tem como falar de todos os riscos, pois a insegurança jurídica irá variar conforme o caso. Entretanto, posso citar os principais riscos do contrato de gaveta:
       
      1. Nulidade perante terceiros: o contrato de gaveta somente afeta as partes contratantes, não podendo prejudicar terceiros. Nesse sentido, pessoas alheias ao contrato não podem ser lesadas, podendo requerer, por exemplo, a anulação do negócio.
      
      2. Dívidas do real proprietário: como o contrato de gaveta é nulo perante terceiros, se existir dívida que possa recair sobre o bem, objeto do negócio, ele poderá ser penhorado e leiloado. Logo, existe o risco, por exemplo, de você perder o imóvel, automóvel, etc, mesmo efetuando o pagamento das parcelas do contrato.
      
      3. Falecimento do real proprietário: quando o real proprietário do bem, objeto do contrato, morre, necessariamente um procedimento de inventário deverá existir. Nesse sentido, corre o risco de o imóvel, automóvel, etc, fazer parte da partilha entre os herdeiros, podendo o devedor do contrato de gaveta perder referido bem.
      
      4. Divórcio do real proprietário: assim como no caso do inventário, existe o risco da perda do bem no caso de o credor divorciar-se.
      
      5. Golpes: Como não existe muita garantia jurídica nesse tipo de contrato, o risco de você sofrer um golpe é bem maior. Um exemplo disso seria uma pessoa vender o mesmo bem para diversas outras.

      6. Perda do imóvel, veículo e qualquer outro bem financiado: Nos contratos de financiamento, qualquer alteração da pessoa do real devedor deverá ser informada e autorizada pela instituição financeira. Sendo assim, ao firmar o contrato, você omite tais informações, podendo perder o bem em caso de inadimplemento por parte do real devedor.
       
      <h2 class='colorDBlue'>Contrato de gaveta pode ser anulado?</h2>
      Pode! A depender do caso, o contrato de gaveta firmado entre duas pessoas pode ser anulado. Nesse sentido, com tal anulação, ele poderá ser considerado inexistente, prejudicando as partes contratantes. Por esse motivo, é recomendável você procurar uma assessoria jurídica especializada no assunto.
       
      <h2 class='colorDBlue'>Fazer ou não fazer esse contrato?</h2>
      Vai depender muito do seu caso em questão. Existem situações em que um simples contrato de gaveta não traz tanta insegurança jurídica. O importante sempre é você procurar por uma assessoria jurídica antes de firmar este tipo de contrato. O advogado irá lhe dizer todas as vantagens, desvantagens e riscos do negócio a ser pactuado.
      
      Precisa de um especialista na área? <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI</a> para falar com um especialista!
      `
    },
    {
      id: 7,
      icon: <HiShoppingCart />,
      title: "Soluções Para o Consumidor",
      urlImage:'/detalhesImg/consumidor.png',
      mainText: `<h2 class='colorDBlue'>Produto com defeito: qual seria o direito do consumidor?</h2>
      Você sabe o que é um produto com defeito? Apesar de ser um fato que ocorre de maneira corriqueira na vida do consumidor, esse tema ainda pode causar algumas dúvidas.

      Essa situação é campeã de dúvidas de nossos clientes que passam por dissabores na hora de comprar e receber um produto.

      <h2 class='colorDBlue'>Definição de produto com defeito pelo CDC</h2>
      O defeito é um problema grave. Em regra, o defeito é percebido no decorrer da utilização do produto, necessitando de um fator externo para que se tenha conhecimento de que ele existe.
      
      Imagine, por exemplo, que você comprou um carro que tem defeito no airbag. Você dificilmente teria conhecimento desse problema no produto se não houvesse uma colisão que acionasse esse dispositivo de segurança, certo?
      
      É dessa forma que o Código de Defesa do Consumidor define o defeito: um produto com um problema difícil de detectar, que impacta na utilização desse produto e também na segurança do consumidor.
      
      O Código de Defesa do Consumidor também busca responsabilizar alguém por esses defeitos, sendo os fabricantes, produtores e importadores responsáveis pela reparação do dano causado ao consumidor.
      
      Ou seja, no caso do airbag defeituoso que utilizamos, o responsável por reparar os danos que aconteceram com o motorista em razão do defeito do dispositivo vai ser o fabricante do veículo.
      
      Conforme o Código de Defesa do Consumidor estabelece, a responsabilização ao fabricante é uma forma de incentivo aos fornecedores para criarem meios de controle de qualidade e segurança de produtos e serviços.

      <h2 class='colorDBlue'>Vícios de qualidade</h2>
      Basicamente, vícios são problemas que tornam produtos ou serviços inadequados para o consumo que são destinados.
      
      Também são classificados como vícios os erros decorrentes da diferença entre informações que constam na embalagem, em mensagem publicitária e no produto.
      
      Como você pode perceber, o vício é uma característica específica, que faz parte do produto ou serviço, portanto, há vício sem defeito, mas não há defeito sem vício!
      
      Dessa forma, podemos dizer que vícios são problemas que fazem com que o produto não funcione de forma que o mesmo se propõe a funcionar, como um liquidificador que não gira.
      
      Um vício pode ser também uma mercadoria que funciona mal, como uma televisão sem som, ou algo que diminua o valor do produto, como riscos na lataria do automóvel.
      
      Ou, ainda, um vício pode acontecer através de informações equivocadas, como um vidro de geléia de 500 ml que só tem 400 ml.
      
      Os vícios podem ser classificados em duas categorias: aparentes e ocultos.
      
      Saber diferenciar um vício oculto de vício aparente é importante, pois é essa diferença que irá determinar o início da contagem do prazo para o consumidor conseguir exercer o direito de reclamar do vício do produto.

      <h2 class='colorDBlue'>Defeito aparente</h2>
      Vício ou defeito aparente é um problema perceptível para o consumidor, dispensando a necessidade de uma perícia para ser constatado, podendo ser verificado simplesmente pela utilização do produto.
      Quando um vício é aparente, o prazo para o consumidor exercer o direito de reclamar tanto para o fabricante quanto para a loja começa a correr quando o produto é entregue ao consumidor.
      
      <h2 class='colorDBlue'>Defeito oculto</h2>
      Agora, diferente do vício aparente, o vício oculto é um problema que não é facilmente constatado pelo consumidor no uso do produto, sendo que este defeito pode aparecer apenas depois de algum ou muito tempo de uso.
      Quando o defeito é oculto, o prazo para exercer o direito de reclamar tanto para o fabricante quanto para a loja começa a correr no momento em que o defeito for percebido.
      
      <h2 class='colorDBlue'>Tipos de garantias</h2>
      Geralmente, uma compra pode ter um ou dois tipos de garantias, que podem ser a garantia legal ou a garantia contratual.
      
      A garantia legal é a proteção estipulada pelo Código de Defesa do Consumidor, que se refere à manifestação dos consumidores quando se deparam com problemas com produtos ou serviços.
      
      A duração dessas garantias varia de acordo com a natureza do produto: itens duráveis têm garantia de 90 dias, enquanto itens não duráveis têm garantia de 30 dias.
      
      É preciso lembrar que esse prazo vale para problemas aparentes, ou seja, que são de fácil percepção.
      
      Porém, o Código de Defesa do Consumidor aumenta o prazo para 90 dias para o caso de vícios ocultos, que são defeitos que não podem ser percebidos de maneira imediata. 
      
      As garantias contratuais, por outro lado, são uma forma não obrigatória que costuma acompanhar os produtos que são duráveis.
      
      Nesse tipo de garantia, a empresa é que decide o prazo de cobertura da garantia, variando conforme as características do item.
      
      Quando imaginamos, por exemplo, o caso de um carro, as empresas normalmente oferecem uma garantia de contrato de 5 anos.
      
      <h2 class='colorDBlue'>Garantia legal</h2>
      Essa modalidade de garantia é prevista pelo CDC e prevê 30 dias de garantia de bens não duráveis, como roupas e alimentos, e 90 dias de garantia de bens duráveis, como eletrodomésticos e automóveis.
      Dessa maneira, quando um problema não é solucionado em até 30 dias, o consumidor tem o direito de escolher se quer receber o dinheiro de volta, se prefere descontar o preço ou se quer trocar o produto.
      
      <h2 class='colorDBlue'>Garantia contratual</h2>
      A garantia contratual não é prevista pelo Código de Defesa do Consumidor, sendo oferecida pelo próprio fabricante de bens duráveis, que decide o prazo de cobertura da garantia.
      Nesse caso, se o fabricante oferecer dois anos de garantia, o cliente pode fazer uma reclamação em até dois anos após a compra.
      
      Além disso, os consumidores ainda têm direito à garantia de 90 dias para itens não duráveis. 
      E, vale lembrar que, em alguns casos onde ocorre a identificação do produto com defeito, o cliente sempre pode recorrer ao Art. 49 do CDC, referente ao direito do arrependimento.
      
      <h2 class='colorDBlue'>Troca de produtos com defeitos</h2>
      As trocas de produtos com defeito são frequentes e as orientações do Código de Defesa do Consumidor (CDC) são bem claras.
      
      Isso porque, dependendo do defeito, o produto precisa ser substituído o mais rápido possível.
      
      Além do mais, ninguém gosta de comprar um produto e descobrir que ele não atende ao seu propósito, certo?
      
      Portanto, de acordo com o CDC, as empresas são responsáveis por esses defeitos e devem resolvê-los no prazo máximo de 30 dias, ou seja, devem solucionar os defeitos do produto dentro desse prazo.
      
      Caso contrário, o consumidor tem o direito de:

      1.	Substituir o produto por outro similar em perfeitas condições de uso;

      2.	Sem prejuízo de eventuais perdas e danos, restituir imediatamente o valor pago, atualizado;

      3.	Redução de preço proporcional.

      Além disso, se você deseja substituir um produto e a empresa informa que não está disponível, você pode substituí-lo por outro produto com restituição da diferença de preço.
      
      Também vale citar que CDC determinou que as reclamações por esses defeitos devem feitas a partir do recebimento do produto, ou, no caso de defeitos ocultos, com a percepção do problema, conforme prazos estabelecidos:

      1.	30 dias no caso de produtos não duráveis 
      2.	90 dias para produtos duráveis 
      
      Agora, se houver algum defeito que traga risco à segurança do consumidor ou em um item essencial, como um ar condicionado que não resfria o ambiente, a troca deve ser imediata assim que o problema for verificado.
      Essa substituição deve ser realizada mesmo fora do período de garantia legal, que prevê no máximo 90 dias para reclamações de problemas no produto.

      <h2 class='colorDBlue'>Produto com defeito e recall</h2>
      Os recalls são uma forma dos fornecedores informarem ao público que um determinado produto ou serviço que adquiriram representa um risco para os consumidores que o compraram.
      
      Esta comunicação inclui não apenas a notificação de defeitos por meio de publicidade, mas principalmente a remoção desses itens de circulação e reparos sempre que possível.
      
      Caso seja determinado que o produto ou serviço que está sendo vendido oferece risco aos clientes, as empresas precisam comunicar esse fato às autoridades e consumidores em escala nas mais diferentes formas de comunicação.
      
      Se você perceber que determinado produto não é seguro, é de extrema importância checar se alguma convocação de recall foi realizada e comunicar o problema ao fornecedor o mais rápido possível.
      
      Se o fabricante não resolver o problema e ainda existirem riscos na segurança da utilização ou manuseio do produto, é muito importante fazer valer os seus direitos. Ainda, se for necessário, acione os órgãos de defesa do consumidor.
      
      Ao receber um comunicado de recall, o consumidor deve:

      •	Analisar se o item faz parte da campanha de recall (identificar lote, modelo ou ano de fabricação);
      •	Observar as orientações do aviso; 
      •	Contatar a empresa;
      •	Obedecer os protocolos determinados na campanha de recall, indo ao local indicado nos informativos para o reparo ou troca de peças que apresentem defeitos.
      
      Tudo isso deve ser realizado sem qualquer custo para o consumidor, pois todos os custos devem ficar a cargo do fabricante ou fornecedor.
      
      Por fim, conforme Ministério da Justiça, não existe limite de quantidade recall para produtos adquiridos de terceiros, no Brasil ou no exterior
      
      <h2 class='colorDBlue'>Contratar um advogado</h2>
      Além de todas essas dicas, se o seu problema ainda não tiver sido resolvido pela empresa, você pode procurar os órgãos de proteção ao consumidor para fazer valer os seus direitos! Nesse caso, você pode:
      
      •	Protocolar uma reclamação no site Consumidor.gov;
      •	Fazer uma reclamação direto no PROCON.
      
      Além das opções acima, ainda é possível ajuizar uma demanda judicial contra o fabricante através de um advogado especializado em Direitos do Consumidor.
      
      Dessa forma, você pode garantir que as normas estabelecidas em lei sejam cumpridas.
      
      Dependendo do caso, ao realizar uma reclamação da falta de atendimento, é possível solicitar ainda uma indenização não só pelo defeito do produto, mas também pelos prejuízos que foram causados. Temos uma vasta experiência no setor de Direitos do Consumidor. O contato com nosso escritório pode ser feito através do nosso Whatsapp <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>`
    },

    {
      id: 8,
      icon: <MdFamilyRestroom/>,
      title: "Soluções Para Divórcio e Pensão Alimentícia",
      urlImage: '/detalhesImg/familia.png',
      mainText:`<h2 class='colorDBlue'>A Ferreira da Costa poderá ajudar você nos casos de divórcio e separação, após isso saberá quando será consensual, litigioso judicial, consensual extrajudicial, trazendo algumas informações sobre a guarda dos filhos e pensão alimentícia.</h2>
      Antes de um divórcio, primeiro é preciso ter a consciência de que ele poderá ser um procedimento simples ou algo realmente estressante. Isso vai depender muito da modalidade de divórcio adotada. Outro ponto é o tempo do procedimento. Ele poderá ser curto ou longo, a depender da idade dos filhos (se estes são maiores ou menores), do regime (comunhão parcial, comunhão universal, separação total e participação final nos aquestos) e número de bens a partilhar, das partes envolvidas e da agilidade do órgão competente, bem como do advogado contratado.
       
      <h2 class='colorDBlue'>Separação e Divórcio</h2>
      Antigamente nossa legislação somente autorizava o divórcio depois da separação judicial, respeitados os prazos dessa separação. Houve mudança em nossa Constituição Federal e, nos dias atuais, ninguém precisa passar pelo procedimento da separação, muito menos cumprir algum prazo, para poder pedir o divórcio. Ele pode ser requerido, por exemplo, poucas horas depois que o casal se casou. De fato ninguém pode ser obrigado a estar juridicamente vinculado a alguém contra sua vontade, somente para respeitar prazos estabelecidos em lei.
       
      Logo, a separação judicial foi extinta de nosso ordenamento jurídico, podendo o casal requerer o divórcio de forma imediata.
       
      <h2 class='colorDBlue'>Situações Em Que Se Pode Pedir Divórcio</h2>
      Alguns clientes me perguntam quais seriam os motivos capazes de ensejar o divórcio, com a ideia de que a lei somente o autoriza com base em situações específicas. O casamento realmente possui alguns deveres a serem cumpridos, que influenciam na reparação de eventual dano moral ou até mesmo na obtenção da guarda dos filhos, mas o descumprimento daqueles não é requisito para pedir o divórcio.
       
      Mesmo que a outra pessoa não tenha desrespeitado um dos deveres do matrimônio, você pode, por seu livre arbítrio, requerer o divórcio. Sendo assim, para uma pessoa, hodiernamente, se divorciar basta apenas ela QUERER. Sim, caros leitores, não existe nenhum requisito legal. Um casal pode contrair matrimônio e ao sair do cartório pode simplesmente requerer o divórcio.
       
      <h2 class='colorDBlue'>Divórcio Consensual (amigável)</h2>
      Quando um cliente me procura para a realização de um divórcio, eu sempre questiono se existe a possibilidade de o procedimento ser realizado de forma amigável.
       
      No divórcio amigável, que o Direito denomina Divórcio Consensual, deve existir uma comunhão de ideias. Deve haver um acordo relacionado à partilha de bens, guarda dos filhos e demais cláusulas a serem formuladas pelo casal.
       
      Essa espécie de divórcio destina-se ao casal que já entrou em ajuste e decidiu o que cada um terá de direito. Não deve ser adotada caso exista (ou possa existir) algum impasse provocado por uma das partes.
       
      <h2 class='colorDBlue'>Divórcio Consensual Extrajudicial (Realizado no Cartório) – Filhos Maiores</h2>
      O Divórcio Consensual Extrajudicial é o realizado no próprio cartório (através do tabelião). Para tanto, é pré-requisito que o casal não tenha filhos menores. Nesse procedimento as partes deverão contratar um advogado para redigir documento, a ser posteriormente registrado em cartório. Esse papel deve conter todas as informações repassadas pelo casal (qual bem irá ficar com o marido; qual irá ficar com a esposa; se houver necessidade, qual o valor da pensão alimentícia; mudança no sobrenome das partes; etc.).
       
      Daí a vantagem do divórcio ser realizado perante o tabelião: o tempo do procedimento é extremamente inferior ao tempo de uma ação judicial. Os gastos com advogado e demais despesas também são menores. Não existe desgaste emocional das partes envolvidas.
       
      Você, leitor, que está pensando em se divorciar, tente, antes de qualquer providência, conversar amigavelmente com seu parceiro(a), pois isso poderá agilizar o procedimento no futuro.
       
      <h2 class='colorDBlue'>Necessidade de Advogado no Divórcio Extrajudicial</h2>
      Como dito anteriormente, mesmo que o divórcio seja realizado em cartório, um documento deverá ser redigido por advogado. Apesar haver julgados e entendimentos contrários, prevalece ainda em nosso país a obrigatoriedade do divórcio extrajudicial ser realizado com a assistência de um advogado, o que é interessante inclusive para a preservação dos direitos das partes envolvidas.
       
      Quer contratar um advogado para realizar o seu divórcio? Entre em contato agora mesmo conosco.
       
      <h2 class='colorDBlue'>Divórcio Consensual Com Filhos Menores</h2>
      O casal que deseja separar-se de forma amigável, mas possui filhos menores, necessariamente deverá entrar com uma ação judicial de divórcio com filho menor. Nossa legislação impõe essa obrigatoriedade em razão de estarem em jogo direitos de crianças e adolescentes, considerados indisponíveis por nosso ordenamento jurídico.
       
      Em sendo assim, deve haver fiscalização e acompanhamento pelo juiz e membro do Ministério Público.
       
      Não desanime: o Divórcio Consensual Judicial também é um procedimento rápido, pois a ação existirá somente para que o juiz, juntamente com o promotor de justiça, analise a situação e diga se não há algum desrespeito aos interesses dos filhos menores envolvidos.
       
      <h2 class='colorDBlue'>Divórcio Consensual Judicial Sem Filhos Menores</h2>
      Parece sem lógica, mas alguns casais, sem filhos menores, entram com ação judicial para divórcio consensual, ou seja, mesmo podendo entrar com divórcio perante o cartório, eles optam por ingressar com uma demanda judicial.
       
      Isso ocorre, na maioria das vezes, pela desconfiança de uma das partes no sentido de a outra criar algum embaraço no decorrer do procedimento, fazendo com que ele se torne um processo litigioso (onde existe briga).
       
      De forma clara: quando você entra com um pedido de divórcio amigável no cartório e, em determinado momento, a outra pessoa envolvida, por qualquer motivo, desista do acordo, você não poderá fazer nada. Nesse caso, simplesmente terá que reunir toda a documentação novamente e entrar com uma ação judicial.
       
      Agora quando você entra com pedido de divórcio amigável na justiça e, em algum momento, não seja mais possível sustentar o que foi ajustado, o juiz tocará o processo para frente tratando-o como se fosse um divórcio litigioso, sem a necessidade de você entrar com uma nova ação.
       
      Então vou resumir para o leitor:
       
      Divórcio Consensual
       
      É o divórcio amigável, no qual não existe briga. O próprio casal decide, em comum acordo, sobre os bens, filhos, pensão alimentícia etc. Ele pode ser Extrajudicial ou Judicial.
       
      Extrajudicial
       
      Realizado em cartório, facultativo somente para o casal que não possui filhos menores.
      *mesmo sendo extrajudicial o divórcio deverá ser acompanhando por advogado.
      *caso haja briga no meio do procedimento, será necessário entrar com divórcio judicial.
       
      Judicial
       
      Realizado perante o juiz. Obrigatório para o casal que tenha filhos menores. Facultativo para o casal que tenha apenas filhos maiores.
      *mesmo existindo briga durante o procedimento, o juiz tocará o processo, sem necessidade de a parte entrar com outra ação.
       
      <h2 class='colorDBlue'>Divórcio Litigioso – Judicial</h2>
      Nesse tipo de procedimento, o casal não consegue mais estabelecer um diálogo ou contato, havendo uma verdadeira “briga” por direitos e deveres. Muitas vezes essa discórdia é ocasionada por uma traição, gerando o popularmente conhecido como divórcio por traição. Nesse caso eles devem levar esse impasse para um terceiro imparcial, no caso o juiz, que irá decidir com base na lei e demais respaldos jurídicos.
       
      É o procedimento mais cansativo das espécies de divórcio, pois gerará grande desgaste emocional e psicológico entre as partes. A ação, a depender do caso, pode ser bastante demorada. Muitas vezes se discute no mesmo processo a guarda dos filhos e pensão alimentícia, o que só agrava o abalo causado nas partes.
        
      <h2 class='colorDBlue'>Guarda Dos Filhos Menores</h2>
      Outra questão sempre levantada por meus clientes é em relação à guarda dos filhos menores. Na ação de divórcio com filho menor, a guarda será dada a quem tiver melhores condições de atender aos interesses do filho. Lembrando sempre que melhores condições não se resume a maior poder aquisitivo (dinheiro), uma vez que este é suprido pela fixação de prestação de alimentos pelo outro genitor.
       
      Importante destacar que se ambos tiverem as mesmas condições, igualmente favoráveis ao interesse do menor, o juiz optará pela guarda compartilhada, de modo que filho conviva com os dois genitores de forma igualitária.
       
      Pode ocorrer de o juiz conceder a guarda unilateral, aquela na qual somente um genitor ficará com a guarda do filho, por possuir melhores condições. Mesmo que isso ocorra, pai/mãe terá direito a visitas e a participar diretamente da vida do filho (férias escolares, feriados, ano novo, natal, etc.).
       
      Um ponto que sempre gosto de destacar é: guarda não significa propriedade. A outra pessoa também terá direitos, que deverão ser respeitados, sob pena inclusive de novo questionamento judicial acerca da referida guarda.
       
      Algumas pessoas acham que podem, detendo a guarda do menor, caso o ex-marido/esposa esteja em outro relacionamento, restringir o contato do filho com seu ex-cônjuge. Pensamento errado: o fato de a pessoa contrair novo relacionamento não retira o direito de ela ter consigo seus filhos. Por mais que seja uma situação delicada, a lei estabelece que esse vínculo deva sempre permanecer.
       
      Os pais devem ter a consciência que a disputa pelo menor somente prejudica seu desenvolvimento e crescimento saudável. Por mais que seja difícil, deve-se preferir uma convivência pacífica com o ex-cônjuge, com comunicação adequada e respeito ao que foi disposto na ação de divórcio.
       
      <h2 class='colorDBlue'>Pensão Alimentícia</h2>
      Na ação de divórcio também poderá ser pleiteado o pagamento de pensão alimentícia. Mas quem deve pagar a pensão alimentícia? A pensão será devida a quem dela necessitar para viver de modo compatível com sua condição social, em virtude do abalo financeiro gerado pela dissolução do casal, desde que a outra parte tenha como arcá-la.
       
      Pode existir o requerimento para pagamento de duas pensões alimentícias distintas: a que irá atender as necessidades dos filhos, pagas à pessoa que detiver a guarda, bem como outra específica para a subsistência do próprio ex-cônjuge.
       
      <b class="fontS colorDBlue">Pensão alimentícia para uma das partes</b>
       
      Mesmo que o casal não possua filhos ou estes sejam maiores, pode ser que exista o deferimento de pensão alimentícia a uma das partes do ex-relacionamento (ex-marido paga para ex-esposa / ex-esposa paga para ex-marido). Isso ocorre em virtude do abalo financeiro ocasionado no divórcio.
       
      O juiz estipulará um prazo razoável de duração para a referida pensão, no qual a pessoa abalada deverá se reestruturar para ingressar novamente no mercado de trabalho. Após esse prazo, a pensão será extinta, presumindo-se que aquela pessoa já conseguiu se reestabelecer na sociedade. No entanto, não posso afirmar que todos os casos serão assim, pois cada casal possui sua particularidade.
       
      <b class="fontS colorDBlue">Valor da pensão</b>
       
      Em relação ao valor do pagamento, devem ser observadas as condições da pessoa que irá recebê-la, bem como as condições de quem irá pagá-la. Existe um mito de que a pensão alimentícia vai variar de 10% até 20% do salário da outra pessoa.
       
      Não podemos traçar uma regra absoluta para o Direito de Família, muito menos quando se trata de pagamento de pensão alimentícia, pois deve ser observada a realidade fática dos envolvidos.
       
      Nesses termos, para estipular o valor da pensão o juiz sempre analisará o seguinte binômio: necessidade do alimentando (quem receberá a pensão) X possibilidade do alimentante (quem pagará).
       
      Esperamos ter sanado algumas dúvidas pertinentes ao divórcio e aconselhamos aos que estão pensando em se divorciar a procurar a nossa equipe, pois a Ferreira da Costa estará pronta para atender todas as suas necessidades pertinentes sobre o assunto.
      
      Fale com um especialista <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>`
    },
    {
      id: 9,
      icon: <MdMapsHomeWork/>,
      title: "Soluções Para Condomínios e Associações de Moradores",
      urlImage: '/detalhesImg/morador.png',
      mainText:`<h2 class='colorDBlue'>Associação de moradores: o guia completo de como criar uma associação em 2023.</h2>
      Você já ouviu falar de associação de moradores? Sabe o que é uma associação? Como criar uma associação de moradores? O que deve constar no estatuto? Como fazer o registro e quais são os cargos? Então não deixe de ler esse guia completo, que vai te ensinar desde os passos básicos até os mais avançados para você montar uma associação de moradores.
      
      <h2 class='colorDBlue'>O que é associação de moradores?</h2>
      Uma associação de moradores é uma pessoa jurídica sem fins lucrativos criada por um grupo de pessoas de uma determinada região. Ela é criada, na maioria das vezes, no intuito de guarda e conservação dos imóveis de seus associados.
      
      De acordo com o Código Civil, uma associação é uma união de pessoas que se organizam para fins não econômicos. Nesse sentido, uma associação nunca poderá visar o lucro, mas tão somente atividades que não envolvam o ganho de capital para seus associados.
      
      <h2 class='colorDBlue'>Como criar uma associação de moradores?</h2>
      Agora que você sabe o que é uma associação e qual a finalidade de sua constituição, chegou a hora de aprender a como criar uma associação de moradores. Então fique atento às dicas que vou lhe repassar, pois elas lhe ajudarão muito no futuro e na administração da associação.
      
      <h2 class='colorDBlue'>Junte o maior número de pessoas possível.</h2>
      Uma associação não existe se não for composta por pessoas. Nesse sentido, o primeiro passo para você criar uma associação é reunir as pessoas que farão parte dela e explicar o motivo e a finalidade de sua criação.
      
      Tente ser o mais transparente e breve em suas explicações, respondendo todas as dúvidas dos futuros associados. Novas ideias também são bem vindas, nesse sentido, evite confrontar alguma inovação proposta por um dos moradores da região.
      
      <h2 class='colorDBlue'>Qual o número mínimo de pessoas para formar uma associação?</h2>
      O número mínimo de pessoas para se formar uma associação é de 2 (duas) pessoas. Isso porque a lei não define um montante mínimo em sua composição, mas tão somente que ela seja constituída pela união de pessoas. Nesse sentido, não existe união de pessoas composta por somente um indivíduo, devendo, ao menos, existirem 2 (duas) pessoas para ficar caracterizada a união.
      
      <h2 class='colorDBlue'>Marque uma reunião de constituição.</h2>
      Após reunir as pessoas que farão parte da associação, marque um dia e horário com elas para que a reunião de constituição da associação aconteça. Essa reunião é o nascimento da associação. É nela que será criado o estatuto da associação de moradores, nome dos membros da diretoria, órgãos de fiscalização, apoio, etc. E como é feito esse estatuto? Vamos ver!
      
      <h2 class='colorDBlue'>Estatuto de associação de moradores.</h2>
      Não basta somente a reunião de pessoas para que uma associação de moradores seja constituída. Para que ocorra o “nascimento” da associação, um documento deve ser elaborado: O estatuto da associação. Mas afinal, o que é um estatuto de uma associação?
      
      <h2 class='colorDBlue'>O que é um estatuto de uma associação?</h2>
      O estatuto de associação de moradores é o documento legal no qual estão inseridas todas as informações de constituição, composição e administração da associação. Ele é como se fosse a certidão de nascimento da associação. Como todo documento legal, o estatuto de associações deve ser registrado em cartório.
      
      <h2 class='colorDBlue'>Elaboração do estatuto de associação de moradores.</h2>
      O estatuto de associação de moradores poderá ser elaborado por qualquer pessoa. Entretanto, recomenda-se o apoio jurídico da equipe do Ferreira da Costa Advocacia, para que o documento fique bem redigido, contendo uma segurança jurídica maior tanto para seus associados quanto para terceiros.
      
      <h2 class='colorDBlue'>O que deve constar no estatuto de uma associação?</h2>
      Veja o que deve constar no estatuto de uma associação:
      
      1.	A denominação, os fins e a sede da associação;
      2.	Os requisitos para a admissão, demissão e exclusão dos associados;
      3.	Os direitos e deveres dos associados;
      4.	As fontes de recursos para sua manutenção;
      5.	O modo de constituição e de funcionamento dos órgãos deliberativos;
      6.	As condições para a alteração das disposições estatutárias e para a dissolução.
      7.	A forma de gestão administrativa e de aprovação das respectivas contas.
      
      Tais requisitos estão previstos no artigo 54 do Código Civil e devem necessariamente fazer parte do estatuto, sob pena de nulidade. Isso quer dizer que, se no estatuto de uma associação de moradores não constar tais informações, ele será considerado nulo, devendo ser refeito.
      
      <h2 class='colorDBlue'>Registro de associação de moradores</h2>
      O registro de associação de moradores deve ser realizado em algum cartório de registro de títulos e documentos de pessoas jurídicas. Isso porque, como dito anteriormente, a associação se tornará uma pessoa jurídica (com CNPJ), podendo praticar todos os atos da vida civil após sua constituição.
      
      <h2 class='colorDBlue'>Associação de moradores e legislação</h2>
      A legislação principal que uma associação de moradores deve respeitar é o Código Civil Brasileiro, especialmente os artigos 53 ao 61 da norma cível brasileira. O estatuto social também deve ser respeitado, afinal, sem ele, não existe uma associação.
      
      <h2 class='colorDBlue'>Quais são os cargos de uma associação?</h2>
      Os cargos de uma associação podem variar de acordo com a finalidade dela, porém, alguns desses cargos são comuns na maioria das associações, como por exemplo o cargo de presidente, vice-presidente, diretor de contas, vice-diretor de contas, secretário, tesoureiro, etc.
      
      Lembre-se que os associados devem ter direitos iguais, porém, algumas categorias podem ter vantagens especiais. Exemplo disso seria a existência de uma categoria com descontos na mensalidade de manutenção da associação ou até mesmo isenção dela.
      
      Importante destacar que tais vantagens não podem influenciar no fim principal da associação, nem interferir no poder de decisão da assembleia geral. Nesse sentido, não pode existir um cargo que tenha poder de voto maior que o de outros associados.
      
      <h2 class='colorDBlue'>Qual o papel do presidente de uma associação de moradores?</h2>
      O papel do presidente de uma associação de moradores é administrar as ações tomadas pelos associados, zelando pelo cumprimento do estatuto, coibindo atos que prejudiquem seus fins sociais.
      
      <h2 class='colorDBlue'>Quanto ganha um presidente de associação de moradores?</h2>
      Para saber quanto ganha um presidente de associação de moradores o interessado deverá requerer tal informação à diretoria, justificando seu pedido. Lembrando que a remuneração do presidente deve ser razoável, condizente com o seu trabalho.
      
      <h2 class='colorDBlue'>Quem fiscaliza as associações de moradores?</h2>
      Quem fiscaliza as associações de moradores é o próprio conselho fiscal delas, ou seja, os próprios membros são responsáveis por sua fiscalização. A depender do caso, o Poder Judiciário poderá ser acionado para coibir eventuais irregularidades, entretanto, a regra é que os próprios associados supervisionem a associação.
      
      <h2 class='colorDBlue'>Inadimplência em associação de moradores.</h2>
      A inadimplência em associação de moradores dá direito à cobrança dos valores do associado que esteja devendo as mensalidades. Apesar de uma associação não poder obter lucro em suas atividades, ela possui despesas com pessoal e material. Nesse sentido, o associado inadimplente deve pagar todos os débitos em atraso.
      
      <h2 class='colorDBlue'>Cobrança de taxas de moradores não associados.</h2>
      Em 2020 o STF autorizou a cobrança de taxas de moradores mesmo que eles não sejam associados. Entretanto, tal cobrança somente é permitida após a edição da Lei nº 13.465/2017 ou alguma outra lei local que discipline sobre o tema.
      
      Em resumo: a associação de moradores somente poderá cobrar referidas taxas após 25 de agosto de 2017, que foi quando a Lei nº 13.465/2017 entrou em vigor. Nesse sentido, nenhuma taxa anterior a essa data poderá ser cobrada, salvo se já existir alguma lei local com data anterior que autorize tal cobrança.
      
      <h2 class='colorDBlue'>Como se desassociar de uma associação de moradores?</h2>
      Para se desassociar de uma associação de moradores você deve consultar o estatuto da associação e seguir as normas ali constantes. Caso o estatuto seja omisso, o ideal é você entregar uma notificação (com aviso de recebimento) à diretoria da associação comunicando sua saída.
      
      Para falar com um especialista no assunto, <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI!</a>
      `
    },
    {
      id: 10,
      icon: <MdOutlineElderly/>,
      title: "Aposentadorias e Benefícios Do INSS",
      urlImage: '/detalhesImg/inss.png',
      mainText:`A equipe do Ferreira da Costa Advocacia também atua em favor daqueles que possuem o direito aos benefícios junto ao Governo e INSS(Previdência Social)

      <h2 class='colorDBlue'>Primeiramente, o mais importante para que você conheça todos os Benefícios do INSS.</h2>
      As aposentadorias concedidas pelo INSS hoje são:

      •	Aposentadoria da Pessoa com Deficiência por Idade
      •	Aposentadoria da Pessoa com Deficiência por Tempo de Contribuição
      •	Aposentadoria especial por tempo de contribuição
      •	Aposentadoria por Idade Rural
      •	Aposentadoria por Idade Urbana
      •	Aposentadoria por tempo de contribuição do professor
      •	Aposentadoria por Tempo de Contribuição (apenas para segurados incluídos na regra de transição)
      •	Aposentadoria por invalidez

      Se você busca um resumão sobre as regras de aposentadoria, indicamos a leitura do nosso Guia Definitivo Para Aposentadoria Em 2021. clique e confira este conteúdo com dicas essenciais para quem quer ficar por dentro das regras de aposentadoria.
      
      <h2 class='colorDBlue'>Auxílios</h2>
      Para que você conheça todos os benefícios do INSS é importantíssimo conhecer os auxílios.
      
      Já os auxílios concedidos pelo INSS são:

      •	Auxílio-Acidente
      •	Auxílio-doença
      •	Auxílio-Reclusão Rural
      •	Auxílio-Reclusão Urbano
      •	Solicitar Auxílio-Doença da Aeronauta Gestante
      
      <h2 class='colorDBlue'>Benefícios Assistenciais</h2>
      Os benefícios assistenciais também são bastante conhecidos e é importante para que você conheça todos os Benefícios do INSS
      •	Benefício assistencial ao trabalhador portuário avulso
      •	Benefício assistencial à pessoa com deficiência (BPC)
     
      <h2 class='colorDBlue'>Pensões</h2>
      •	Pensão especial da síndrome da Talidomida
      •	Pensão por Morte Urbana
      •	Pensão por Morte Rural
      •	Pensão especial por hanseníase
      •	Pensão especial destinada a crianças com Síndrome Congênita do Zika Vírus
      
      Esses são os benefícios concedidos pelo INSS! Se você precisa de auxílio para obter algum desses benefícios,  poderá buscar o apoio de um Advogado Previdenciário independente de qual lugar esteja.
      
      Não abra mão dos seus direitos antes de conhecê-los, <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLIQUE AQUI</a> e vamos conversar sobre o seu caso no Whatsapp.`
    },
    {
      id: 11,
      icon: <GiRobber/>,
      title: "Soluções Contra Golpes Bancários",
      urlImage: '/detalhesImg/golpe.png',
      mainText:`<h2 class='colorDBlue'>Caiu no golpe do PIX e agora? O que você precisa fazer se caiu em algum golpe bancário.</h2>
      Segundo a Febraban Federação Brasileira de Bancos, no ano de 2021 aumentou 165% o número de golpes contra clientes de bancos.
      Ser vítima de um golpe é frustrante, dá uma dor de cabeça, às vezes resulta também em perder algum dinheiro, refazer documentos, transtornos da vida urbana.

      Os golpes que mais aconteceram em 2021 foram, o falso funcionário, o phishing, o falso empréstimo e o golpe do PIX.
      Todos esses golpes lesaram milhares de consumidores brasileiros, e pode ter sido sua situação.
      
      O que você precisa fazer caso isso tenha ocorrido? Quais passos, logo abaixo irei orientar sobre o que fazer.
      
      <h2 class='colorDBlue'>O Primeiro Passo.</h2>   
      Nossa equipe orienta primeiramente a fazer um boletim de ocorrência na cidade em que morar, em muitos Estados é possível fazer o Boletim de Ocorrência de forma online e isso favorece a imediata comunicação, procure o site da Polícia Civil do seu Estado.
      
      O boletim de ocorrência é um documento imprescindível em que há presunção de legalidade, ou seja, a informação prestada no boletim é fortemente considerada pelo Poder Judiciário.
      
      Muito cuidado! Não pode fazer boletim de ocorrência contando fatos que não ocorreram, caso isso ocorra saiba que poderá incorrer em crime e ser responsabilizado, no boletim deve constar o relato do golpe ocorrido, se você for fazer procure descrever as informações importantes, o que ocorreu, data, valor, local, se possível identificar o beneficiário dos valores se for esse o caso.
      
      <h2 class='colorDBlue'>Segundo Passo.</h2>
      Comunique diretamente ao seu banco, seja banco digital ou banco 'normal' é imprescindível que haja essa comunicação, oriento que seja encaminhado e-mail de preferência para ficar documentado, se for por ligação anote data e hora e protocolo da ligação.
      
      No e-mail direcionado ao Banco informe a fraude ocorrida, com informações precisas tais como datas, horas, valores, local, conta bancária, agência, apresente um relato detalhado.
      
      <h2 class='colorDBlue'>Terceiro Passo.</h2> 
      Após isso, oriento ao consumidor a utilizar a plataforma do Governo Federal, Consumidor.gov.br, em que poderá realizar seu cadastro e abrir uma reclamação contra o seu banco.
      
      Nessa reclamação você novamente apresentará um relato detalhado do que ocorreu, e solicitar que o banco apresente uma solução.
      
      Caso não seja possível resolver o problema por essa ferramenta, oriento então a procura de um advogado para que lhe auxilie.
      
      <h2 class='colorDBlue'>Fiz todos esses passos e não consegui resolver o meu problema, o que fazer?</h2>
      Com todos esses documentos procure um advogado para analisar a documentação e lhe informar sobre a possibilidade de ingressar com ação judicial.
      
      Uma dúvida constante é, se há responsabilidade das instituições financeiras para aqueles casos em que a fraude decorre de abertura de conta-corrente, contratação de empréstimos, utilização de documentos falsos que causem danos ao consumidor, boletos falsos encaminhados e o golpe com o PIX.
      
      No contexto de diversas fraudes de diferentes tipos qual é responsabilidade dos bancos quanto a esses golpes? Qual é o entendimento do Poder Judiciário quanto aos golpes?
      
      <h2 class='colorDBlue'>A responsabilidade dos bancos é objetiva e deve haver reparação integral dos danos financeiros causados.</h2>
      O que significa isso, responsabilidade objetiva dos bancos?
      
      A responsabilidade objetiva é aquela que a instituição financeira é responsável diretamente por fraudes praticadas por terceiros no âmbito de operações bancárias.
      
      Sendo assim, as fraudes que mais ocorreram em 2021 relacionadas a empréstimos que foram indevidamente contratados, aberturas de conta, pagamento de boletos falsos são algumas das possibilidades do banco ser responsável diretamente pelos danos causados.
      
      O consumidor, apresentando provas da fraude poderá conseguir o ressarcimento integral de uma eventual quantia paga de forma irregular, ou o cancelamento da abertura de conta, ou o cancelamento do empréstimo indevidamente contratado ou ainda um cartão de crédito recebido indevidamente.
      
      O que mais lhe é importante para assegurar seu direito nesses casos de fraude é se você conseguir juntar provas da contratação indevida de serviços bancários, e por isso você deve seguir os passos mencionados acima.
      
      <h2 class='colorDBlue'>Sobre o golpe com o PIX, há responsabilidade dos bancos nesses golpes?</h2>
      O PIX é um novo instrumento de transações bancárias que logo popularizou no ano de 2021, pela facilidade de transferir valores em qualquer horário do dia com crédito imediato e pela economia de taxas bancárias.
      
      Da mesma velocidade que popularizou o PIX vieram os golpes.
      
      <h2 class='colorDBlue'>Aqui há uma diferença dos outros golpes.</h2>
      Os golpes citados acima eram praticados por terceiros que aproveitavam de possuir dados dos clientes com informações privilegiadas que fizessem com que as pessoas fossem enganadas.
      
      Já em relação ao PIX não há participação de um terceiro diretamente no âmbito da operação financeiras. A relação existente é entre o consumidor-enganado e o criminoso que transfere dinheiro livremente.
      
      O Banco Central em novembro de 2021 editou uma resolução que permite que seja bloqueado por até 72 (setenta e duas) horas o dinheiro do PIX no caso de suspeita de fraude.
      
      <h2 class='colorDBlue'>Como então solicitar esse bloqueio?</h2>
      Assim que perceber que caiu em um golpe com a transferência você deverá ir a uma delegacia e fazer um boletim de ocorrência. E ainda imediatamente você irá avisar ao seu banco que caiu em um golpe pelos canais de atendimento normais, alguns bancos já possuem canais exclusivos para esse tipo de atendimento.
      
      Dessa forma, seu banco irá analisar a solicitação juntamente com o banco que recebeu o dinheiro, e se eles identificarem uma fraude em até 7 (sete) dias será estornado os valores.
      
      Caso os bancos entendam que não há indício de fraude os valores transferidos serão liberados na conta de quem irá receber.
      
      Ocorre que se o PIX foi realizado e houver indícios de fraude ainda que o banco negue o direito há alguns precedentes no Poder Judiciário em relação a responsabilidade dos bancos quanto a golpes realizados com PIX desde que ocorra com altos valores e em curto espaço de tempo e que haja documentos conforme orientados acima.
      
      Para demais dúvidas e contratação, entre em contato conosco no Whatsapp <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>`
    },
    {
      id: 12,
      icon: <FaUserTie/>,
      title: "Soluções Para Empresários, Comerciantes e Empreendedores",
      urlImage: '/detalhesImg/comerciante.png',
      mainText:`<h2 class='colorDBlue'>Assessoria jurídica: o que é e qual a importância para a sua empresa.</h2>
      A assessoria jurídica geralmente prestada por nossa equipe de advogados, advogados e consultores é de suma importância para dar segurança jurídica nos negócios todo empresário, comerciante ou empreendedor deve entender a importância desse setor no seu negócio!
      
      Assessoria jurídica é um serviço de acompanhamento de processos judiciais e consultoria e auxílio na tomada de decisões prestado por advogados e demais profissionais do direito a uma determinada empresa ou negócio. Ela é o setor que cuidará das demandas judiciais, pré e pós contratuais do empreendimento ou negócio jurídico a ser tratado.
      
      A assessoria atua tanto na esfera preventiva quanto repressiva do negócio, trabalhando para que a empresa reduza as chances de ser acionada na justiça, bem como, na defesa de processos já existentes.
      
      O empresário precisa ter a segurança necessária para tomada de decisão, a nossa equipe analisa juridicamente todo o negócio, colocando os pontos positivos e negativos do negócio para que o empresário tome a Decisão mais acertada para o caso concreto.
      
      Uma assessoria jurídica faz um trabalho de auxílio e acompanhamento judicial de uma empresa, operando no sentido de reduzir demandas judiciais em desfavor do negócio e buscar oportunidades para a saúde financeira do empreendimento.
      
      Um assessor jurídico protege os direitos de uma empresa, ingressando com defesas, petições, recursos e demais atos judiciais capazes de resguardar o patrimônio do negócio. Ele também atua ajudando na redução dos custos e despesas do empresário.
      
      Empresário, micro empresário, empreendedor e Comerciante, nossa equipe está pronta para atende-lo via Whatsapp <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>`
    },
    {
      id: 13,
      icon: <BsFillCarFrontFill/>,
      title: 'Soluções de Trânsito Junto ao Detran',
      urlImage: '/detalhesImg/detran.png',
      mainText: `<h2 class='colorDBlue'>Soluções de Trânsito Junto ao Detran</h2>
      Ter um advogado de Direito de Trânsito garante que tanto a legislação de trânsito, como os direitos e deveres dos motoristas e pedestres sejam respeitados como um todo, sendo um profissional apto a orientar, aconselhar, propor soluções e auxiliar juridicamente em questões de trânsito.
      
      <b class='colorDBlue fontS'>Atuar no Direito de Trânsito como advogado inclui saber lidar e resolver algumas das situações abaixo:</b>
      
      •	Recurso de multas, de suspensão de CNH e de cassação de CNH;
      •	Seguro DPVAT;
      •	Pontuação na CNH;
      •	Acidentes de trânsito;
      •	Indenização;
      •	Lei Seca;
      •	Teste do Bafômetro.
      
      Diante do apresentado, pode-se concluir que o advogado de trânsito promove não apenas recursos de punições jurídicas e administrativas, mas também busca garantir aquilo que é certo e devido à parte lesada.
      
      Questões de trânsito estressam bastante as pessoas, de modo geral, e quanto antes esses problemas forem resolvidos para que se evite um possível impedimento na sua locomoção, mais satisfatório será para a parte lesada, e é aí que está a fundamental importância do profissional especializado em Direito de Trânsito.
      
      O advogado especialista em Direito de Trânsito, ao produzir um recursos e teses bem elaboradas, traz argumentações consistentes que o levam mais facilmente ao ganho de uma causa.
      
      Caso necessite de um especialista entre em contato conosco <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>
      `
    },

    {
      id: 14,
      icon: <MdOutlineHomeWork/>,
      title:'Soluções Para Locações Comerciais e Residenciais',
      urlImage: '/detalhesImg/locacao.png',
      mainText: `<h2 class='colorDBlue'>Como funciona o processo?</h2>
      Se mesmo depois de muitas conversas não foi possível resolver o problema entre proprietário e inquilino, o dono do imóvel deve buscar um advogado especialista em Direito Imobiliário para formalizar a ação de despejo, ou demais ações que envolvam questões locatícias para esse tipo de negócio jurídico.
      
      O locador deve apresentar um motivo relevante e documentos que comprovem a situação, como comprovantes dos pagamentos em atraso, provas do descumprimento de cláusulas, registro de conversas, entre outros. Além disso, também é preciso ter em mãos o contrato de aluguel, documentos pessoais e a escritura do imóvel.
      
      O próximo passo é com a nossa equipe de advogados, que recorre à Justiça para exigir a saída do inquilino. Então, todos aguardam a decisão. Se ela for favorável ao proprietário, o inquilino é notificado e tem até 30 dias para desocupar o local, mas ele ainda pode recorrer da decisão.
      
      <h2 class='colorDBlue'>O que pode gerar uma ação de despejo?</h2>
      Normalmente uma ação de despejo é solicitada quando acontece a falta de pagamento do aluguel, mas outras situações também podem ocorrer:
      
      <b class='colorDBlue fontS'>Ação de despejo por falta de pagamento</b>

      Com um dia de atraso no pagamento do aluguel ou das contas previstas em contrato de locação, como condomínio, IPTU, luz, água e gás, o proprietário já pode pedir o despejo.
      
      <b class='colorDBlue fontS'>Ação de despejo para uso próprio</b>

      O locador tem o direito de entrar com uma ação de despejo da casa ou apartamento caso seja para uso próprio, destinado para fim residencial ou comercial. Ele também pode acionar a medida para que cônjuge, pais, avós, filhos e netos façam uso residencial do local, desde que não tenham imóvel no nome deles.
      
      <b class='colorDBlue fontS'>Ação de despejo por permanência</b>

      Se o contrato de locação terminar sem possibilidade de extensão ou renovação e o locatário se negar a sair do imóvel, o dono do imóvel pode entrar com um processo de despejo para reaver o local.
      
      <b class='colorDBlue fontS'>Ação de despejo por reparos urgentes</b>
      
      Quando o imóvel precisar de reparos urgentes e que não podem ser feitos com o inquilino habitando o local, ou quando ele se recusar a permitir obras no apartamento ou casa, o proprietário também pode entrar com a ação de despejo na lei.
      
      <b class='colorDBlue fontS'>Ação de cobrança de alugueis atrasados e demais prejuízos causados pelo inquilino</b>

      Quando o inquilino sai do imóvel deixando pendências, como o pagamento de aluguéis, reparos do imóvel constatados em vistoria e não reparados, contas de luz, água, IPTU, gás, condomínio e demais prejuízos que houver causado ao locador, que deve ingressar com esta ação para assegurar o direito que tem de cobrar os prejuízos a ele causados pelo inquilino.  
      
      Caso necessite de um especialista entre em contato conosco <a href="https://api.whatsapp.com/send?phone=5561991484701&text=Ol%C3%A1,%20Ferreira%20da%20Costa!" class='colorDBlue'>CLICANDO AQUI!</a>
      `
    }
  ];
  
  