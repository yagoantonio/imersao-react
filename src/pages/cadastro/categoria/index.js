import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([])
  const [valores, setValores] = useState(valoresIniciais)

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    })
  }

  function alterarValor(e) {
    // const {getAttribute, value} = e.target
    setValor(e.target.getAttribute('name'), e.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

      <form onSubmit={function handleSubmit(e){
        e.preventDefault()
        setCategorias([
          ...categorias,
          valores
        ])
        setValores(valoresIniciais)
      }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={valores.nome}
            onChange={alterarValor}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={valores.descricao}
            onChange={alterarValor}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={alterarValor}
          />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
        </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
