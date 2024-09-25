import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';


export const login = () => async dispatch => {
    try {

        dispatch({
            type : LOGIN_REQUEST,
        })

        const provider = new GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

        const res = await signInWithPopup(auth, provider);
        // console.log(res);

        const accessToken = res.user.stsTokenManager.accessToken;
        // console.log(accessToken);

        const profile = {
            name: res.user.displayName,
            photoURL: res.user.photoURL,
        }
        // console.log(profile);

        sessionStorage.setItem("ustudy-access-token", accessToken)
        sessionStorage.setItem("ustudy-user", JSON.stringify(profile))

        dispatch({
            type : LOGIN_SUCCESS,
            payload : accessToken,
        })

        dispatch({
            type : LOAD_PROFILE,
            payload : profile,
        })

    }
    
    catch (error) {

        console.log(error.message);
        dispatch({
            type : LOGIN_FAIL,
            payload : error.message,
        })

    }
}


export const log_out = () => async dispatch => {

    await auth.signOut()
    dispatch({
        type : LOG_OUT,
    })
    sessionStorage.removeItem('ustudy-access-token')
    sessionStorage.removeItem('ustudy-user')


}