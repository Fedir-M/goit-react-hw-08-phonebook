import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../redux/Auth/authSelectors';
import { logOutUser } from '../../redux/Auth/authOperations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className={s.menuWrapper}>
      <p>{userName.name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </nav>
  );
};

export default UserMenu;
