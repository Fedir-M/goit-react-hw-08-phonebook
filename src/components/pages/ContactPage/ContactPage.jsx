import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import UserMenu from 'components/UserMenu';

import s from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={s.contactsWrapper}>
      <h1>Phonebook</h1>
      <UserMenu />
      <ContactForm />

      <ContactsList />
    </div>
  );
};

export default ContactPage;
