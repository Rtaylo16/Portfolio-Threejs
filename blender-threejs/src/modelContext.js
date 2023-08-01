import { createContext } from 'react';

const ModelContext = createContext({
    isModelLoaded: false,
    setIsModelLoaded: () => {},});

export default ModelContext;