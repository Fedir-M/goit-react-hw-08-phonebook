import Input from 'components/Input';
import Button from 'components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from '../../redux/contactsSelectors';
import { addContact } from '../../redux/contactsOperation';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const number = e.target.elements.number.value.trim();

    if (contacts.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }

    e.target.reset();
  };

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <Input
        title={'Name'}
        type={'text'}
        name={'name'}
        placeholder={'Enter name...'}
      />
      <Input
        title={'Number'}
        type={'tel'}
        name={'number'}
        placeholder={'Number XXX-XXX-XXXX'}
        pattern={'[0-9]{3}-[0-9]{2}-[0-9]{2}'}
      />
      <Button btnType={'submit'}>
        <span className={s.btnName}>Add contact</span>
      </Button>
    </form>
  );
};

export default ContactForm;
