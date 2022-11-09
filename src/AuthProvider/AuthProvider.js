import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Fierbase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmailAndPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUserWithEmailAndPass,
        createUserWithGoogle,
        loading,
        logIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;