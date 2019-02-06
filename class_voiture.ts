import { Vehicule } from './class_vehicule'

export default class Voiture extends Vehicule {

  public constructor() {
    super();
    this.type = 'voiture';
    this.capacite_reservoir = 40;
    this._klaxon = 'Tut tut !!';
    this.consommation = 4;
    this.vitesse_max = 130;
    this.img = './images/voiture.jpeg';
    this.niveau_carburant = this.capacite_reservoir;
  }

  public rouler(){
    super.rouler();
    if(this._win){
      this.coup_de_klaxon();
      this.derapage_controlle();
    }
    Vehicule.course_finie();
  }

  private derapage_controlle():void{
    alert(`------> ${this._player_name} nous fait un magnifique dérapage controllé avec sa voiture <------`)
  }

}
export { Voiture }
