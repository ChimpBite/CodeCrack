import useLocalStorage from './useLocalStorage';


const useDifficulty = (initialValues) => {
    const [difficulty, setDifficulty] = useLocalStorage(initialValues);
    

    return ([difficulty, setDifficulty])
};

export default useDifficulty;