import { auth, provider } from '../config/firenase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');
  }

  return (
    <div>
      <p> Sign in with Google to Account </p>
      <button onClick={signInWithGoogle}> Sign in with Google</button>
    </div>
  );
}