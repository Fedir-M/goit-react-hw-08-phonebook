import { useSelector } from 'react-redux';
import s from './Loader.module.css';
import { isLoadingSelector } from '../../redux/contactsSelectors';

const Loader = () => {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
    {isLoading && (<div className={s.loaderWrapper}>
      <div className={s.loader}>
      <span className={s.loaderName}></span>
    </div>
    </div>)}
    </>
  );
};

export default Loader;
