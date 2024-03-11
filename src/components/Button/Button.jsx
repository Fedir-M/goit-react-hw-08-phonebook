import { useDispatch } from 'react-redux';
import s from './Button.module.css';
import { deleteContact } from '../../redux/contactsOperation';

const Button = ({ children, btnType, id }) => {
  const dispatch = useDispatch();


  return btnType === 'button' ? (
    <button
      className={s.button}
      type={btnType}
      onClick={() => dispatch(deleteContact(id))}
    >
      {children}
    </button>
  ) : (
    <button className={s.button} type={btnType}>
      {children}
    </button>
  );
};

export default Button;
