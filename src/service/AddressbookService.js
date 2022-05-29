import axios from "axios";
const ADDRESSBOOK_API_BASE_URL = "http://localhost:8080/addressbook/create";
class AddressbookService {
saveContact(contact){
    return axios.post(ADDRESSBOOK_API_BASE_URL, contact);
 }
}
export default new AddressbookService();