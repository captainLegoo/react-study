import { Link } from 'react-router-dom';
import { auth } from '../config/firenase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Navbar = () => {

  const [user] = useAuthState(auth);

  const signUSerOut = async () => {
    await signOut(auth);
  };

  return (
    <div className='navbar'>
      <div className='links'>
        <Link to="/"> Home </Link>
        {!user ? (
          <Link to="/login"> Login </Link>
        ) : (
          <Link to="/createpost"> Create Post </Link>
        )}

      </div>
      <div className='user'>
        {user &&
          (
            <>
              <p> {user?.displayName} </p>
              <img src={auth.currentUser?.photoURL || ""} width="100" height="100" />
              <button onClick={signUSerOut}> Log Out </button>
            </>
          )
        }
      </div>
    </div>
  );
}