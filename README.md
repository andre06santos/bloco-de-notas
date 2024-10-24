# Bloco de notas

Projeto que será desenvolvido para a prática do CRUD.

### Tecnologias utilizadas:

- React JS
- TS
- Vite

### Telas

<div style='display: flex'>
  <img src='https://github.com/andre06santos/bloco-de-notas/blob/main/public/images/getNotes.JPG?raw=true' style='width: 40%' />
  <img src='https://github.com/andre06santos/bloco-de-notas/blob/main/public/images/createNote.JPG?raw=true' style='width: 40%' />
  <img src='https://github.com/andre06santos/bloco-de-notas/blob/main/public/images/editNote.JPG?raw=true' style='width: 40%' />
  <img src='https://github.com/andre06santos/bloco-de-notas/blob/main/public/images/deleteNote.JPG?raw=true' style='width: 40%' />
</div>

### Estrutura do projeto

```
app
│
└── src
    │
    ├── infrastructure
    │   ├── get-notes.ts
    │   ├── create-note.ts
    │   ├── edit-note.ts
    │   └── delete-note.ts
    │
    ├── modules
    │   └── hooks
    │       └── use-notes.ts
    │   └── provider.tsx
    │
    ├── pages
    │   ├── create-page.tsx
    │   ├── edit-page.tsx
    │   └── notes-page.tsx
    │
    ├── services
    │   └── api
    │       └── api-client.ts
    │
    └── ui
        ├── note
        │   ├── index.tsx
        │   └── styles.css
        ├── header.tsx
        ├── footer.tsx
        └── layout.tsx
│
├── App.tsx
├── main.tsx
├── index.html
└── index.css
```

### Padrões do projeto


#### 1) Como nomear branchs: <br/>

Os verbos devem ficar no tempo infinitivo

<tipo de alteração (em inglês)>/nome-da-branch

Exemplos de branchs: <br />

<ul>
  <li>feature/adicionar-busca</li>
  <li>bugfix/corrigir-login</li>
  <li>docs/atualizar-documentacao</li>
  <li>refactor/remover-codigo-desnecessario</li>
  <li>improvement/melhorar-api</li>
</ul>

#### 2) Como nomear commits: <br/>

Os verbos devem ficar no tempo presente do indicativo

Exemplos de mensagens de commit: <br />

<ul>
  <li>adiciona nova funcionalidade de busca</li>
  <li>corrige bug na página de login</li>
  <li>atualiza documentação do projeto</li>
  <li>remove código desnecessário</li>
  <li>melhora desempenho da API</li>
</ul>
