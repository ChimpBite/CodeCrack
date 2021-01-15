import useRandom from '../hooks/useRandom';

const initialValues = {
    values: [],
}

const GameEngine = () => {
    const [values, setValues] = useRandom(initialValues);

    const getRandom = () => {
        setValues({
            codeA: Math.floor(Math.random() * 10 + 1),
            codeB: Math.floor(Math.random() * 10 + 1),
            codeC: Math.floor(Math.random() * 10 + 1)
        })
    }

    const getGameCode = () => {
        getRandom()
        values.map(num => (
            setValues({
                sum: num.codeA + num.codeB + num.codeC,
                product: num.codeA * num.codeB * num.codeC,
            })
        ))
        
    }
    
    

    return ([values, getGameCode]);
}

export default GameEngine;