export class Client {

    public nom:string;
    public prenom:string;
    public tel:string;
    public adresse:string;

    constructor(nom:string, prenom:string, tel:string, adresse:string) {
        
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.adresse = adresse;
    }
}