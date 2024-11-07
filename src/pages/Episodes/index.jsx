import React, { useEffect, useState } from 'react';
import CardEpisode from '../../components/CardEpisode';
import SelectPage from '../../components/SelectPage';
import './styles.css';

export default function Episodes() {
    const [conteudo, setConteudo] = useState(<p>Loading...</p>);
    const [numero, setNumero] = useState(1);
    const [filtroName, setFiltroName] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    async function carregarTodosOsEpisodios() {

        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(
            `https://rickandmortyapi.com/api/episode?page=${numero}${filtroName}`,
            reqOptions
        );

        if (!response.ok) {
            throw new Error('Algo deu errado');
        }
        const responseApi = await response.json();
        return responseApi;
    }

    async function listaPersonagens() {
            const { info, results } = await carregarTodosOsEpisodios();
            setTotalPages(info.pages)
            setConteudo(results.map(episodes => <CardEpisode data={episodes} key={episodes.id} />));
    }

    function atualizarPagina(valor) {
        setNumero(prevNumero => {
            const novoNumero = valor === '+' ? prevNumero + 1 : prevNumero - 1;
            return novoNumero > 0 ? novoNumero : prevNumero;
        });
    }

    function aplicarFiltroName(nomeEpidosio) {

        const novoFiltro = '&name=' + nomeEpidosio;

        setFiltroName(novoFiltro);
        setNumero(1);
    }

    function pularPagina(paginaNova) {
        setNumero(paginaNova);
    }

    useEffect(() => {
        listaPersonagens();
    }, [numero, filtroName]);

    return (
        <main>
            <div className='linhaBotao'>
                <button onClick={() => atualizarPagina('-')}>Previous Page</button>
                    <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Next Page</button>
            </div>
            <div className='FiltersBox'>
                <input className='Filters' placeholder='nome' onChange={(event) => aplicarFiltroName(event.target.value)}/>
            </div>
            <div className='lista-principal'>
                {conteudo}
            </div>
            <div className='linhaBotao'>
                <button onClick={() => atualizarPagina('-')}>Previous Page</button>
                    <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Next Page</button>
            </div>
        </main>
    );
}