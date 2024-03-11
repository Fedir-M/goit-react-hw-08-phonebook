import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUser } from '../../../redux/Auth/authOperations';
import s from '../LoginPage/LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className={s.registrationWrapper}>
      <h1 className={s.regTitle}>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h2 className={s.labels}>Email</h2>
          <input name="email" type="email" placeholder="Enter email" />
        </label>
        <label>
          <h2 className={s.labels}>Password</h2>
          <input name="password" type="password" placeholder="Password" />
        </label>

        <button className={s.btnReg} type="submit">
          Login
        </button>
      </form>
      <Link className={s.linkReg} to="/register">
        Registration
      </Link>
    </div>
  );
};

export default LoginPage;
