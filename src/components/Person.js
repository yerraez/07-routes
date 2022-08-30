import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export const  Person = () => {
    let {name, lastName} = useParams()
    const navigate = useNavigate()

    const send = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let lastName = e.target.lastName.value
        let url = `/person/${name}/${lastName}`

        navigate(url)

    }


  return (
    <div>
        {!name && <h1>Anything person to show information</h1>}
        {name && <h1>Person Page: {name}{lastName}</h1>}

        <h1>This is the page of the person </h1>

        <form onSubmit={send}>
            <input type="text" name='name'></input>
            <input type="text" name='lastName'></input>
            <input type="submit" name='send' value="send"></input>

        </form>
    </div>
  )
}
