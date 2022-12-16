# CISMO API

A cismo api tem como objetivo permitir que quem acessá-la possa visualizar dicas relacionadas ao cuidado das encontas e abrigos caso o pior aconteça.

## Getting Started

Para acessar a versão que está online, basta acessar [cismo.vercel.app](https://cismo.vercel.app/) e passar as rotas indicadas na aba de navegação. Caso queira acessar o repositório para fazer suas mudanças, basta seguir os passos que estão na área de Instalação e Uso

## Pré-requisitos

Esse sistema utiliza sequelize como ORM e Postgres como SGBD, portanto, certifique-se de ter o postgres instalado em sua máquina, basta seguir os passos de instalação no site oficial.

## Instalação e Uso

#

Importe os pacotes necessários para o funcionamento do sistema. No terminal digite :

    npm install

Agora que instalou os pacotes, você precisa informar as credenciais do banco de dados para poder criar suas tabelas no banco. Siga os passos:

    Acesse src > config > database.js

Você pode colocar valores diferentes nos paramêtros das configurações de develop e teste. Por padrão o Sequelize utiliza o ambiente de develop. Então os passos abaixo, até a área de 'Rodando o código' podem ser ignorados

<Strong>OBS: É altamente recomendável que seja utilizado variáveis de ambiente para configurar o ambiente de production. Para fazer isso é muito simples. Digite:</Strong>

    <!-- Criar arquivo .env -->
    touch .env

Neste arquivo você deve informar os mesmos parâmetros que os ambientes de teste e develop, porém, é aqui que você deve colocar os dados sensíveis, como a conexão de produção do seu banco. Seu arquivo .env deve ter essa cara:

    DB_USER=user_exemplo    <!-- nome do usuário dono da base -->
    DB_PWD=senha_exemplo    <!-- senha da base -->
    DB_NAME=name_exemplo    <!-- nome da base -->
    DB_HOST=host_exemplo    <!-- endereço host -->
    DB_PORT=5432       <!-- A porta geralmente é 5432 (padrão do PSQL)  -->
    DB_DIALECT=postgres <!-- O dialeto do seu banco  -->

## Rodando o código

Com isso, você já pode migrar as tabelas do seu banco e deixá-lo pronto para receber os dados da API

Execute o comando abaixo para criar seu banco de dados

    npx sequelize-cli db:create

Em seguida, migre as tabelas do seu banco

    npx sequelize-cli db:migrate

Então, gere as seeders para popular as tabelas que precisem disso

    npx sequelize-cli db:seed:all

Caso queira rodar no ambiente de produção, basta inserir, após seu comando sequelize

    --env prodution

### Let's Go

O banco está pronto para uso, para rodar nossa API localmente, basta digitar:

    npm run start

Ao iniciar, você verá no log a porta que o servidor estará online, basta passar a rota junto ao localhost, pois a API, está rodando locamente, no Postman, no Thunder Client ou qualquer cliente que você queira e você já estará com a API online e funcionando.

    localhost:4000

## Rotas Suportadas

- #### GET - /abrigos

      cismo.vercel.app/abrigos

- #### GET - /dicas

        cismo.vercel.app/abrigos

- #### POST - cismo.vercel.app/user/create

        <!-- No body da sua request você deve informar: -->
        {
            "nome_completo": "nome teste",
            "email": "email@teste.com",
            "senha": "senhateste"
        }

        <!-- Usuário criado com sucesso -->

- #### PUT - cismo.vercel.app/user/:id/update

         <!-- No body da sua request você deve informar: -->
        {
            "nome_completo": "Novo nome teste",
            "email": "email@novoteste.com",
            "senha": "senhanovateste"
        }

        <!-- Usuário atualizado com sucesso -->

- #### DELETE - cismo.vercel.app/user/:id/delete

        <!-- No body da sua request você deve informar: -->

         {
             "email": "email@teste.com",
             "senha": "senhateste"
         }

          <!-- Usuário deletado com sucesso -->

- #### GET - /contatos/:id

        cismo.vercel.app/contatos/1

- #### POST - cismo.vercel.app/contatos/:id/create

           <!-- No body da sua request você deve informar: -->
        {
             "nome": "nome teste",
            "tipo": "autoridade",
            "telefone": "192"
        }

        <!-- Contato criado com sucesso -->

- #### PUT - cismo.vercel.app/contatos/:id/update

         <!-- No body da sua request você deve informar: -->
        {
            "nome": "nome teste",
            "tipo": "autoridade",
            "telefone": "194"
        }

        <!-- Contato atualizado com sucesso -->

- #### DELETE - cismo.vercel.app/contatos/:id/delete

         <!-- No body da sua request você deve informar: -->

         {
               "nome": "nome teste",
         }

          <!-- Contato deletado com sucesso -->

<Strong>O caminho cismo.vercel.app, pode ser substituido pelo localhost, desde que você tenha seguido os passos anteriores</Strong>

## Squad 💻:


<img src="https://avatars.githubusercontent.com/u/95830692?v=4" width="100px"  src="https://github.com/cesarhro" />
<div style="margin:10px" > 
  <a href="https://github.com/cesarhro" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">César</a>
</div><br>

<img src="https://user-images.githubusercontent.com/108691406/197102866-0cd25fa7-fa3b-4457-b952-12632946fb50.png" width="100px" />
<div> 
  <a href="https://github.com/Carol-0liveira" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">Carolayne</a>
</div><br>

<img src="https://user-images.githubusercontent.com/108691406/197102984-fbe01390-a085-49d4-9110-1b78ff94f3d0.png" width="100px" />
<div> 
  <a href="https://github.com/maduu03" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">Maria Eduarda</a>
</div><br>

<img src="https://user-images.githubusercontent.com/108691406/197103395-506f5bdc-f563-4b94-bf1b-23aa3d90207a.png" width="100px" />
<div> 
  <a href="https://github.com/joaovalenca" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">João Victor</a>
</div><br>

<img src="https://avatars.githubusercontent.com/u/83319845?v=4" width="100px" />
<div> 
  <a href="https://github.com/debora28122002" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">Débora</a>
</div><br>

<img src="https://user-images.githubusercontent.com/108691406/197103349-a50c272f-dd03-4113-8944-3d253c3118ca.png" width="100px" />
<div> 
  <a href="https://github.com/annegbelarmino" target="_blank"><img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/star-clipart-png-image-01.png?fit=600%2C571&ssl=1" width="15px" target="_blank">Anne</a>
</div><br>
