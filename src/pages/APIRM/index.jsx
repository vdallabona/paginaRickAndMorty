import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

export default function APIRM(){
    const [conteudo, setConteudo] = useState(<>Carregando...</>)
    async function carregarTodosOsPeronagens() {

        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            "https://rickandmortyapi.com/api/character",
            reqOptions
        )

        if(!response.ok){
            throw new Error("Algo deu errado")
        }

        const responseApi = await response.json()

        return responseApi
    }

    async function listaPersonagens(){
        const { results } = await carregarTodosOsPeronagens()

        return results.map(personagem => <Card data={personagem} key={personagem.id} /> )
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await listaPersonagens())
        }

        getConteudo()
    }, [])

    return (
        <main>
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}