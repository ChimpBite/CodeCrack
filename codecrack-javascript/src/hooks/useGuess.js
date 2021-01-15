import useLocalStorage from './useLocalStorage';


const useGuess = (initialValues) => {
    const [guess, setGuess] = useLocalStorage(initialValues);

    const handlePlayerGuess = e => {
        setGuess({
            ...guess,
            [e.target.guess1]: e.target.value,
            [e.target.guess2]: e.target.value,
            [e.target.guess3]: e.target.value
        });
    };

    return ([guess, setGuess, handlePlayerGuess])
};

export default useGuess;