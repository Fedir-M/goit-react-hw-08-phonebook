import Input from 'components/Input';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContacts(e.target.value.trim()));
  };

  return (
    <div>
      <Input
        title={'Find contacts by name'}
        type="text"
        name="filter"
        placeholder={'Enter name...'}
        method={handleChange}
      />
    </div>
  );
};

export default Filter;
