import { createContext, useEffect, useState, } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})

    // Registration user information
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

        })
    }, [user])

    // Login With email and password
    const loginWithEmailAndPassword = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log out function
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        user,
        loginWithEmailAndPassword,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;