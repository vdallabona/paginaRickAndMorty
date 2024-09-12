import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SelectPage from '../../components/SelectPage'

export default function APIRM() {
    const [conteudo, setConteudo] = useState(<p>Carregando...</p>);
    const [numero, setNumero] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    async function carregarTodosOsPersonagens() {

        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${numero}`,
            reqOptions
        );

        if (!response.ok) {
            throw new Error('Algo deu errado');
        }
        const responseApi = await response.json();
        return responseApi;
    }

    async function listaPersonagens() {
            const { info, results } = await carregarTodosOsPersonagens();
            setTotalPages(info.pages)
            setConteudo(results.map(personagem => <Card data={personagem} key={personagem.id} />));
    }

    useEffect(() => {
        listaPersonagens();
    }, [numero]);

    function atualizarPagina(valor) {
        setNumero(prevNumero => {
            const novoNumero = valor === '+' ? prevNumero + 1 : prevNumero - 1;
            return novoNumero > 0 ? novoNumero : prevNumero; // se for menor que 0 ele retorna o número anterior pra evitar página negativa
        });
    }

    function pularPagina(paginaNova) {
        setNumero(paginaNova);
    }

    return (
        <main>
            <div className='lista-principal'>
                <button onClick={() => atualizarPagina('-')}>Página anterior</button>
                <p>Página {numero}</p>
                <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Próxima página</button>
                {conteudo}
                <button onClick={() => atualizarPagina('-')}>Página anterior</button>
                <p>Página {numero}</p>
                <button onClick={() => atualizarPagina('+')}>Próxima página</button>
            </div>
        </main>
    );
}