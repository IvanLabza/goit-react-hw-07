import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import Error from "./components/Error/Error";

function App() {
  const loader = useSelector((state) => state.contacts.loader);
  const error = useSelector((state) => state.contacts.error);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}

export default App;
