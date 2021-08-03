import axios from 'axios';

export default {
    async getAllActivite() {
        console.log("================ Recuperation de toutes les activité ============");
        return await axios.get("/activites");
    },
    async createActivite(activite) {
        console.log("================ Création d'activité avec pour ============", activite);
        return await axios.post("/activites", activite);
    },
    async getAllPhase() {
        console.log("================ Recuperation de toutes les s ============");
        return await axios.get('/phases')
    }
}