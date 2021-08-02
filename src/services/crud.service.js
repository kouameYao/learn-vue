import axios from 'axios';

export default {
    async getAllActivite() {
        console.log("================ Recuperation de toutes les activité ============");
        return await axios.get("/activites");
    },
    async createActivite(data) {
        console.log("================ Recuperation de toutes les s ============", data);
        return await axios.post("/s");
    },
    async getActiviteById(id) {
        console.log("================ Recuperation de toutes les s ============", id);
        return await axios.get('/s/${id}')
    }
}