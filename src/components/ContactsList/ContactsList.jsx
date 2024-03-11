import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  contactsSelector,
  filterSelector,
} from '../../redux/contactsSelectors';
import Filter from 'components/Filter';
import ContactItem from 'components/ContactItem';

import s from './ContactsList.module.css';
import { getContacts } from '../../redux/contactsOperation';
import Loader from 'components/Loader';

const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const handleFilter = () => {
    const filterList = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
    return filterList;
  };

  const filteredList = handleFilter();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contacts</h2>

      <Filter />

      <Loader />

      <ul className={s.listWrapper}>
        {filteredList.map(el => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
