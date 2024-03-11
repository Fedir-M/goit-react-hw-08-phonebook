import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../redux/Auth/authOperations';
import s from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      registerUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    e.target.reset();
  };

  return (
    <div className={s.registrationWrapper}>
      <h1 className={s.regTitle}>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h2 className={s.labels}>Name</h2>
          <input name="name" type="text" placeholder="Enter name" />
        </label>
        <label>
          <h2 className={s.labels}>Email</h2>
          <input name="email" type="email" placeholder="Enter email" />
        </label>
        <label>
          <h2 className={s.labels}>Password</h2>
          <input name="password" type="password" placeholder="Password" />
        </label>

        <button className={s.btnReg} type="submit">
          Registration
        </button>
      </form>
      <Link className={s.linkReg} to="/login">
        Login
      </Link>
    </div>
  );
};

export default RegisterPage;
