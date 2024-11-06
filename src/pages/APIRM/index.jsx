import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SelectPage from '../../components/SelectPage';
import './styles.css';

export default function APIRM() {
    const [conteudo, setConteudo] = useState(<p>Loading...</p>);
    const [numero, setNumero] = useState(1);
    const [filtroStatus, setFiltroStatus] = useState('');
    const [filtroGender, setFiltroGender] = useState('');
    const [filtroSpecies, setFiltroSpecies] = useState('');
    const [totalPages, setTotalPages] = useState(0);

    async function carregarTodosOsPersonagens() {

        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${numero}${filtroStatus}${filtroGender}${filtroSpecies}`,
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

    function atualizarPagina(valor) {
        setNumero(prevNumero => {
            const novoNumero = valor === '+' ? prevNumero + 1 : prevNumero - 1;
            return novoNumero > 0 ? novoNumero : prevNumero;
        });
    }

    function aplicarFiltroStatus(statusPersonagem) {

        const novoFiltro = '&status=' + statusPersonagem;

        setFiltroStatus(novoFiltro);
        setNumero(1);
    }

    function aplicarFiltroGender(genderPersonagem) {

        const novoFiltro = '&gender=' + genderPersonagem;

        setFiltroGender(novoFiltro);
        setNumero(1);
    }
    function aplicarFiltroSpecies(speciesPersonagem) {

        const novoFiltro = '&species=' + speciesPersonagem;

        setFiltroSpecies(novoFiltro);
        setNumero(1);
    }

    function pularPagina(paginaNova) {
        setNumero(paginaNova);
    }

    useEffect(() => {
        listaPersonagens();
    }, [numero, filtroStatus, filtroGender, filtroSpecies]);

    return (
        <main>
            <div className='linhaBotao'>
                <button onClick={() => atualizarPagina('-')}>Previous Page</button>
                    <SelectPage numero={numero} total={totalPages} mudancaPagina={pularPagina}/>
                <button onClick={() => atualizarPagina('+')}>Next Page</button>
            </div>
            <div className='FiltersBox'>
                <select className='Filters' onChange={(event) => aplicarFiltroStatus(event.target.value)}>
                    <option>Status</option>
                    <option value="">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                <select className='Filters' onChange={(event) => aplicarFiltroGender(event.target.value)}>
                    <option>Gender</option>
                    <option value="">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
                <select className='Filters' onChange={(event) => aplicarFiltroSpecies(event.target.value)}>
                    <option>Species</option>
                    <option value="">All</option>
                    <option value="human">human</option>
                    <option value="humanoid">Humanoid</option>
                    <option value="alien">Alien</option>
                    <option value="animal">Animal</option>
                    <option value="cronenberg">Cronenberg</option>
                    <option value="Mythological Creature">Mythological Creature</option>
                    <option value="unknown">Unknown</option>
                </select>
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