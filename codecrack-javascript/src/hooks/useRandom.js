import useLocalStorage from './useLocalStorage';

const useRandom = (initialValues) => {
    const [randomNum, setRandomNum] = useLocalStorage(initialValues);

    return ([randomNum, setRandomNum])
};

export default useRandom;