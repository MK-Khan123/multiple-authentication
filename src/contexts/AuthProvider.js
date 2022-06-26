import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const context = useFirebase();

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;