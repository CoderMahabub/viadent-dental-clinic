import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
            .catch(error => {
                setError(error.message)
            })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return unsubscribe;
    }, [])



    return {
        signInUsingGoogle,
        logOut,
        user,
        error
    }
}

export default useFirebase;