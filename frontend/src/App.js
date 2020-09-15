import React, { useState, useEffect } from 'react'

import api from './services/api'

import './App.css'

import Header from './components/Header'

function App ( ) {
  const [ projects, setProjects ] = useState ( [ ] )

  useEffect ( ( ) => {
    api.get ( 'projects' ).then ( response => {
      setProjects ( response.data )
    } )
  }, [ ] )

  function handleAddProject ( ) {
    api.post ( 'projects', {
      title: `Projeto ${ projects.length + 1 }`,
      owner: "Diogo Manhães"
    } ).then ( response => {
      const project = response.data

      setProjects ( [
        ...projects,
        project
      ] )
    } )
  }

  return (
    <>
      <Header title="Projetos">
        <h3>
          Listagem dos projetos da api
        </h3>
      </Header>

      <ul>
        { projects.map ( project =>
          <li key={ project.id } >{ project.title }</li>
        ) }
      </ul>

      <button type="button" onClick={ handleAddProject } >
        Adicionar projeto
      </button>
    </>
  )
}

export default App