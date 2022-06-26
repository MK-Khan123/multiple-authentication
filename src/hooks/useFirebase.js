import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import sweetAlert from "../components/Shared/SweetAlert/SweetAlert";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    //Navigate towards the actual page after successful authentication(login)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/home';

    const registerUsingEmail = (displayName, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                updateProfile(auth.currentUser, {
                    displayName
                });
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                sweetAlert('Successfully Registered!', 'success', 'Please login using your email and password afterwards');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Registration Failed!', 'error', errorMessage);
            });
    }

    const signInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
                sweetAlert('Successfully Logged In!', 'success');
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
            });
    }

    const passwordReset = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Password Reset Failed!', 'error', errorMessage);
                // ..
            });
    }

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            sweetAlert('Logged out successfully!', 'success');
        }).catch((error) => {
            alert(error);
        });
    }

    const signInUsingGoogle = () => {

        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(from, { replace: true });
                sweetAlert('Successfully Signed In!', 'success');
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                sweetAlert('Login Failed', 'error', errorMessage);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User                
                console.log('onAuthStateChanged', user);
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth]);

    return {
        user,
        passwordReset,
        logout,
        signInUsingGoogle,
        registerUsingEmail,
        signInUsingEmail
    };
};

export default useFirebase;

