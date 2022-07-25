import { useAppDispatch } from '../../hook';
import { deleteItem } from '../../redux/PhonebookSlice';
import { TContact } from '../../redux/PhonebookSlice';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ name, number, id }: TContact) => {
  const dispatch = useAppDispatch();
  const deleteContact = () => {
    dispatch(deleteItem(id))
  };


  return (
    <LiContact>
      {name}: {number}
      <ButtonDelete type="button" onClick={deleteContact}>
        Delete
      </ButtonDelete>
    </LiContact>
  )
};

export default ContactItem;


