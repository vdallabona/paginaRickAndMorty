import { useEffect, useState } from 'react'

export default function SelectPage({ numero, total, onChange }) {
    console.log(numero, total)
    const [ options, setOptions ] = useState(<></>)
    
    function createOptions() {
        const options = []

        for(let index = 1; index <= total; index++) {
            options.push(<option value={index}>Página {index}</option>)
        }

        return options
    }

    useEffect(() => {
        function teste() {
            setOptions(createOptions())
        }

        teste()
    }, [])

    return (
        <select value={numero} onChange={(e) => onChange(e.target.value)}>
            {options}
        </select>
    )
    
}