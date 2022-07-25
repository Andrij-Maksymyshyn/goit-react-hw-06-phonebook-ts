import { TContact } from '../redux/PhonebookSlice';

export const getItems = (state: { contacts: {items: TContact[]} }) => state.contacts.items;
export const getFilter = (state: {contacts: {filter: string | any}}) => state.contacts.filter;