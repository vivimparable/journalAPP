import axios from "axios";

const journalApi = axios.create({
    baseURL:'https://rest-journal-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi;