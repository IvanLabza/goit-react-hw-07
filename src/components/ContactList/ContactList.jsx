import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { fetchContacts } from "../../redux/contactsOps";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);


  return (
    <>
      {Array.isArray(contacts) && contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map((contact, index) => {
            return (
              <li key={contact.id + index}>
                <Contact
                  contactName={contact.name}
                  contactNumber={contact.number}
                  contactId={contact.id}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
