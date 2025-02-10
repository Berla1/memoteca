
# Memoteca 🧠  
Este projeto é uma aplicação CRUD desenvolvida em **Angular**, que consome um **back-end falso** (utilizando `json-server`). A Memoteca permite criar, visualizar, atualizar e deletar pensamentos diretamente na interface.  

## 🛠️ Tecnologias utilizadas  
- **Angular**  
- **TypeScript**  
- **json-server** (para simular o back-end)  

## ⚙️ Funcionalidades  
- **Listagem de pensamentos**: Exibe todos os pensamentos cadastrados.  
- **Adicionar pensamento**: Permite criar um novo pensamento.  
- **Editar pensamento**: Atualiza o conteúdo de um pensamento existente.  
- **Excluir pensamento**: Remove um pensamento definitivamente.  

## 🚀 Como executar o projeto  

### Pré-requisitos  
- Node.js instalado na máquina  
- Angular CLI instalada globalmente (`npm install -g @angular/cli`)  

### Passo a passo  
1. Clone o repositório:  
   ```bash
   git clone https://github.com/Berla1/memoteca.git
   cd memoteca
   ```  
   
2. Instale as dependências:  
   ```bash
   npm install
   ```  

3. Inicie o back-end falso com o **json-server**:  
   ```bash
   cd backend
   npm start
   ```  

4. Inicie o projeto Angular:  
   ```bash
   ng serve
   ```  
5. Acesse a aplicação em: [http://localhost:4200](http://localhost:4200)  

## 📂 Estrutura do projeto  
- `src/app`: Contém os componentes, serviços e lógica da aplicação.  
- `db.json`: Arquivo utilizado pelo `json-server` para simular uma API REST.  

