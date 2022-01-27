import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebase from '../Component/Firebase/Firebase.init';


initializeFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState(" ")
    const [isLoading, setIsLoading] = useState(true)
    const [name, SetName] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, SetPassword] = useState(" ");
    const [admin, setAdmin] = useState(false);

    const getNewUserEmail = (event) => {
        SetEmail(event.target.value);
    };
    //get new user name
    const getNewUserName = (event) => {
        SetName(event.target.value);
    };
    //get new user password
    const getNewUserPassword = (event) => {
        SetPassword(event.target.value);
    };

    //sign up new use
    const handleSubmitForm = event => {
        setIsLoading(true);

        //condition for valid password
        if (password.length < 6) {
            setError("password should have 6 character")
            return;
        }
        //create new use with email and password
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setIsLoading(false));
    };
    //set new user display name
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            alert(`An Verification mail has been set to ${email}`);
        });
    }
    //sign in with  email 
    const signInWithEmail = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

            .finally(() => setIsLoading(false));
    }
    //reset password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                alert('Password Reset Successfully! Check your email!!')
            })
    }

    //sign in with google 

    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))

    };
    //log out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => setIsLoading(false))
    }

    //set an obsever
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const storeUserDb = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://still-brushlands-68938.herokuapp.com/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then()
    }

    //store google user in Db
    const storeGoogleUserDb = (email, displayName) => {
        const user = { email, displayName };
        fetch("https://still-brushlands-68938.herokuapp.com/users", {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then()
    };

    useEffect(() => {
        fetch(`https://still-brushlands-68938.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    return {
        user, name, email,
        setUser,
        setError,
        error,
        isLoading,
        setIsLoading,
        signInWithGoogle,
        logOut,
        storeUserDb,
        storeGoogleUserDb,
        handleSubmitForm, getNewUserName,
        getNewUserEmail, getNewUserPassword, signInWithEmail, emailVerification, setUserName, handleResetPassword,
        admin
    }
};

export default useFirebase;