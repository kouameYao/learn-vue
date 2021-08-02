import axios from 'axios';

const headers = {
    "apiKey" : 'bfcc768a-aeb0-4560-bf68-12b995bbfcfc',
    'Content-Type': 'application/json',
};
export default {
    async getAllNote() {
        console.log("================ Recuperation de toutes les notes ============");
        return await axios.get("/notes", {
            headers: headers
        });
    },
    async addNote(data) {
        console.log("================ Recuperation de toutes les notes ============", data);
        return await axios.post("/notes");
    },
    async getById(id) {
        console.log("================ Recuperation de toutes les notes ============", id);
        return await axios.get('/notes/${id}')
    }
}