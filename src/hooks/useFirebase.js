import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    // Changeable States Here
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [success, setSuccess] = useState('');
    const [Loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //SignIn Using Google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }

    // Logout User
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
            .catch(error => {
                setError(error.message)
            })
    }

    //Handle Email, Password, and Name for Registration
    const toggleLogIn = (e) => {
        setIsloggedIn(e.target.checked);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must include 1 Uppercase with minimum 6 characters');
            return;
        }
        //Toggle Between LogIn and Register
        isLoggedIn ? processLogin(email, password) : CreateNewUser(email, password);
    }

    // Create New User
    const CreateNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUser(result.user);
                setSuccess('Successfully Logged In');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Update Profile 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })

    }

    // Process Login
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setSuccess('Successfully Logged In');
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //Send Email Verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                setSuccess('Email Sent, Please Verify Your Email');
            })
    }

    // Reset Password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                setSuccess('Reset Password Link Sent to you Email')
            })
    }

    // State Change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
        return unsubscribe;
    }, [])

    // Return Required Field 
    return {
        handleNameChange,
        signInUsingGoogle,
        logOut,
        user,
        error,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        email,
        password,
        toggleLogIn,
        isLoggedIn,
        success,
        handleResetPassword,
        Loading,
        setError
    }
}

export default useFirebase;