import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.scss';

const App = () => (
  // componentDidMount() {
  //   // console.log('ComponentDidMount from App');

  //   const contacts = localStorage.getItem('contacts');
  //   // console.log('contacts: ', contacts);

  //   const parsedContacts = JSON.parse(contacts);
  //   // console.log('parsedContacts :', parsedContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('ComponentDidUpdate from App');

  //   // console.log('prevState.contacts: ', prevState.contacts);
  //   // console.log('this.state.contacts: ', this.state.contacts);

  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   // console.log(
  //   //   'prevContacts === nextContacts: ',
  //   //   prevContacts === nextContacts,
  //   // );

  //   if (prevContacts !== nextContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  <Container>
    <h1 className="app-title">Phonebook</h1>

    <ContactForm />

    <h2 className="section-title">Contacts</h2>

    <Filter />

    <ContactList />
  </Container>
);

export default App;
