import { useAppSelector, useAppDispatch } from '../../hook';
import { getItems } from '../../redux/selectors';
import { addItem } from '../../redux/PhonebookSlice';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { TContact } from '../../redux/PhonebookSlice';
import {
  FormBoxStyled,
  LabelStyled,
  ButtonStyled,
  InputStyled,
  ErrorText,
} from './ContactForm.styled';


interface IValues {
  name: string,
  number: string,
};


function ContactForm() {
  const contacts = useAppSelector(getItems);
  const dispatch = useAppDispatch();


  const handleSubmit = (values : IValues, { resetForm }: {resetForm: () => void}) => {
    const {name, number} = values
    
    contacts.find((contact: TContact) => contact.name.toLowerCase() === values.name.toLowerCase())
      ? alert(`${values.name} is already in contacts`)
      : dispatch(addItem({ name, number, id: nanoid() }))
    
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
  });

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormBoxStyled autoComplete="off">
          <LabelStyled>
            Name
            <InputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelStyled>
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />

          <LabelStyled>
            Number
            <InputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelStyled>
          <ErrorMessage
            name="number"
            render={message => <ErrorText>{message}</ErrorText>}
          />
          <ButtonStyled type="submit">Add contact</ButtonStyled>
        </FormBoxStyled>
      </Formik>
    </>
  );
}

export default ContactForm;

