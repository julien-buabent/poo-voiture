import { Vehicule } from './class_vehicule'

export default class Moto extends Vehicule {

  public constructor() {
    super();
    this.type = 'moto';
    this.capacite_reservoir = 15;
    this._klaxon = 'Bip biiiip !!';
    this.consommation = 2;
    this.vitesse_max = 150;
    this.img = './images/moto.jpg';
    this.niveau_carburant = this.capacite_reservoir;
  }

  public rouler(){
    super.rouler();
    if(this._win){
      this.coup_de_klaxon();
      this.wheeling();
    }
    Vehicule.course_finie();
  }

  private wheeling(){
    alert(`------> ${this._player_name} fait un gros wheeling avec sa moto <------`)
  }

}

export { Moto }
