import { useEffect, useState } from 'react'

export default function SelectPage({ numero, total, mudancaPagina }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const novasOpcoes = [];
        for (let index = 1; index <= total; index++) {
            novasOpcoes.push(<option key={index} value={index}>Page {index}</option>);
        }
        setOptions(novasOpcoes);
    }, [total]);

    const mudarPagina = (evento) => {
        const selectedPage = Number(evento.target.value);
        mudancaPagina(selectedPage);
    };

    return (
        <select value={numero} onChange={mudarPagina}>
            {options}
        </select>
    );
}