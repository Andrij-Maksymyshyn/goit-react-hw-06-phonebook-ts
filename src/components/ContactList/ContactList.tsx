import { useAppSelector } from '../../hook';
import { getItems, getFilter } from '../../redux/selectors';
import ContactItem from '../ContactItem';
import { UlContacts } from './ContactList.styled';

const ContactList = () => {
  const filter = useAppSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

 
  const contacts = useAppSelector(getItems);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

  
  return (
    <UlContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </UlContacts>
  )
};

export default ContactList;

