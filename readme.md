# Briefing de Desenvolvimento  
## Aplicação Web de Cadastro de Alunos  

---

## 1. Contexto do Projeto  

A coordenação de um curso técnico do Senac identificou limitações no processo atual de controle de matrículas. Atualmente, os dados dos alunos são registrados manualmente em planilhas eletrônicas, o que gera problemas como:  

- inconsistência de dados;  
- dificuldade de atualização;  
- possibilidade de exclusões ou alterações incorretas;  
- baixa organização das informações.  

Diante desse cenário, foi solicitada ao setor de tecnologia a criação de uma aplicação web simples para gerenciar o cadastro de alunos de forma mais organizada, rápida e acessível.  

A aplicação deverá permitir registrar, visualizar e excluir alunos cadastrados, utilizando uma interface simples e intuitiva.  

---

## 2. Objetivo da Aplicação  

Desenvolver uma aplicação web funcional que permita o cadastro e gerenciamento básico de alunos, facilitando o registro e a visualização das informações.  

A aplicação deve funcionar diretamente no navegador, sem necessidade de banco de dados externo, utilizando armazenamento local.  

---

## 3. Público-Alvo  

O sistema será utilizado principalmente por:  

- equipe administrativa do curso;  
- coordenação acadêmica.  

O nível técnico dos usuários é básico, portanto a interface deve ser simples e intuitiva.  

---

## 4. Funcionalidades do Sistema (Requisitos Funcionais)  

A aplicação deverá implementar as seguintes funcionalidades:  

### 4.1 Cadastro de Alunos  

O sistema deve permitir o cadastro de novos alunos contendo os seguintes campos:  

- Matrícula  
- Nome completo  
- Data de nascimento  
- E-mail  
- Curso  

Todos os campos são obrigatórios.  

---

### 4.2 Listagem de Alunos  

Após o cadastro, os alunos devem ser exibidos em uma lista logo abaixo do formulário contendo:  

- Matrícula  
- Nome  
- Idade  
- E-mail  
- Curso  

Cada registro deve aparecer organizado em formato de lista ou tabela.  

---

### 4.3 Exclusão de Alunos  

Cada aluno listado deve possuir um botão ou opção de excluir registro, permitindo remover o cadastro individualmente.  

Após a exclusão, a lista deve ser atualizada automaticamente.  

---

### 4.4 Validação de Dados  

O sistema deve validar os campos antes de permitir o cadastro.  

Regras mínimas:  

- nenhum campo pode estar vazio;  
- e-mail deve possuir formato válido.  

Caso algum campo esteja inválido, o cadastro não deve ser realizado e o usuário deve ser informado.  

---

### 4.5 Persistência de Dados  

Os dados cadastrados devem ser armazenados utilizando:  

- LocalStorage do navegador  

Isso garante que os dados permaneçam salvos mesmo após atualizar a página.  

---

## 5. Requisitos Não Funcionais  

### 5.1 Usabilidade  

A interface deve ser:  

- simples  
- clara  
- intuitiva  

O usuário deve conseguir realizar as operações sem treinamento prévio.  

---

### 5.2 Responsividade  

A aplicação deve possuir layout responsivo, permitindo o uso em:  

- desktops  
- tablets  
- smartphones  

---

### 5.3 Organização do Código  

O código do projeto deve seguir uma estrutura organizada.  

Exemplo de organização:  

```
/projeto
    /css
        style.css
    /js
        script.js
    /html
        index.html
```

---

## 6. Tecnologias Sugeridas  

A aplicação pode ser desenvolvida utilizando tecnologias web básicas:  

- HTML5 - Semântico (estrutura)  
- CSS3 (estilização)  
- JavaScript (lógica e manipulação do LocalStorage)  

Opcionalmente pode-se utilizar:  

- PHP para lógica de backend (caso desejado)  

---

## 7. Produtos Esperados  

Ao final do desenvolvimento, os alunos deverão entregar:  

- Uma página web funcional com:  
  - formulário de cadastro  
  - listagem de alunos  
  - exclusão de registros  

- Código-fonte organizado em pastas separadas.  

- Formulário validado impedindo registros incompletos.  

- Interface responsiva.  

---

**Tempo total estimado:** 80 minutos (1h20).