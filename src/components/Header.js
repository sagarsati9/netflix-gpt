import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/error");
        });
    }
    useEffect(() =>{
        //Get the currently signed-in user
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            //signed in or signed up
             const {uid, email, displayName, photoURL} = user; 
             dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));  
             navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
        // Unsubscribe when component unmounts
        return () => unsubscribe();
      },[]);
  

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img
                className='w-44'
                src={LOGO}
                alt='logo'
            />
             
           { user &&( <div className='flex p-2'>
                <img
                 className='w-12 h-12'
                    alt="usericon"
                    src={user?.photoURL}
                />
                <button onClick={handleSignOut} className='font-bold text-white p-2'>(Sign Out)</button>

            </div>
            )}
        </div>
    )
}
// line 29 ->//only show signout button when there is a user signed in 

export default Header