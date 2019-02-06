import { Vehicule } from './class_vehicule'
export default class Camion extends Vehicule {

  public constructor() {
    super();
    this.type = 'camion';
    this.capacite_reservoir = 80;
    this._klaxon = 'Pouet pouet !!';
    this.consommation = 6;
    this.vitesse_max = 125;
    this.img = './images/camion.jpg';
    this.niveau_carburant = this.capacite_reservoir;
  }

  public rouler(){
    super.rouler();
    if(this._win){
      this.coup_de_klaxon();
      this.grosse_fumee_blanche();
    }
    Vehicule.course_finie();
  }

  private grosse_fumee_blanche(){
    alert(`------> ${this._player_name} enfume tout le monde avec les grosses fumées blanches de son camion <------`)
  }

}

export { Camion }
