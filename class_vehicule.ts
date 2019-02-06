export default class Vehicule {

  protected _player_name: string = '';
  static nombre_de_joueurs:number = 0;
  static joueurs_ayant_fini:number = 0;

  private _type: string = '';
  private _capacite_reservoir: number = 0;
  private _niveau_carburant: number = 0;
  protected _klaxon: string = '';



  protected _consommation: number = 0;
  protected _vitesse_max: number = 0;
  protected _distance_parcourue: number = 0;

  static _cycle: number = 250;

  private _distance_a_parcourir: number = 5000;
  protected _win: boolean = false;

  static rank: number = 1;

  private _img:string = '';
  private _pourcentage_avancement:number = 0;

  static pompe:string = './images/pompe-essence.jpg';
  public remplissage_en_cours:boolean = false;





  public constructor() {
    console.log(`Création d'un nouveau véhicule`);
  }


  get player_name(): string {
    return this._player_name;
  }
  set player_name(nom: string) {
    this._player_name = nom;
  }
  get type(): string {
    return this._type;
  }
  set type(type: string) {
    if (type != 'moto' && type != 'voiture' && type != 'camion') {
      console.log(`Ce type n'existe pas`);
    } else {
      this._type = type;
    }
  }

  get capacite_reservoir(): number {
    return this._capacite_reservoir;
  }
  set capacite_reservoir(volume: number) {
    this._capacite_reservoir = volume;
  }

  get niveau_carburant(): number {
    return this._niveau_carburant;
  }
  set niveau_carburant(_litre: number) {
    if (_litre > this._capacite_reservoir) {
      console.log(`Le réservoir ne peut pas accueillir ${_litre}L (valeur max : ${this._capacite_reservoir}L)`);
    } else if (_litre == 0) {
      console.log(`Le réservoir de ${this._player_name} est vide`);
      this._niveau_carburant = _litre;
    } else {
      this._niveau_carburant = _litre;
    }
  }

  get consommation(): number {
    return this._consommation;
  }
  set consommation(conso: number) {
    this._consommation = conso;
  }

  get win(): boolean {
    return this._win;
  }
  set win(val: boolean) {
    this._win = val;
  }

  get vitesse_max(): number {
    return this._vitesse_max;
  }
  set vitesse_max(vitesse: number) {
    this._vitesse_max = vitesse;
  }
  get distance_parcourue(): number {
    return this._distance_parcourue;
  }
  set distance_parcourue(distance: number) {
    this._distance_parcourue = distance;
  }
  get distance_a_parcourir(): number {
    return this._distance_a_parcourir;
  }

  get img(): string {
    return this._img;
  }
  set img(image: string) {
    this._img = image;
  }

  get pourcentage_avancement(): number {
    return this._pourcentage_avancement;
  }
  set pourcentage_avancement(val: number) {
    this._pourcentage_avancement = val;
  }


  public affiche_type(): void {
    console.log(`Type du véhicule : ${this._type}`);
  }
  public affiche_niveau_de_carburant(): void {
    console.log(`Réservoir : ${this.niveau_carburant}L/${this._capacite_reservoir}L`);
  }

  public mettre_du_carburant(litre: number): void {
    if (litre < 0) {
      console.log('Impossible de mettre un volume négatif de carburant !');
    } else {
      this.niveau_carburant = this.niveau_carburant + litre;
      this.remplissage_en_cours = true;
    }
  }

  public faire_le_plein(): void {
    console.log(`Plein en cours pour ${this._player_name}...`)
    while (this.niveau_carburant < this.capacite_reservoir) {
      this.mettre_du_carburant(1);
    }
    console.log(`Plein terminé pour ${this._player_name}.`);
    this.coup_de_klaxon();
  }

  public coup_de_klaxon(): void {
    console.log(this._klaxon);
  }

  public rouler() {
    this._pourcentage_avancement = (100 * this._distance_parcourue) / this._distance_a_parcourir;



    this.niveau_carburant = this._niveau_carburant - this._consommation;
    this.distance_parcourue = this._distance_parcourue + this._vitesse_max;

    if (this._distance_parcourue >= this._distance_a_parcourir) {
      console.log(`##### ${this._player_name} (${this._type}) arrive ${Vehicule.rank}° (${this._distance_parcourue}km) #####`);
      this.win = true;
      Vehicule.joueurs_ayant_fini++
      Vehicule.rank++;
    }

    if (this.win == false) {
      console.log(`${this._player_name} (${this._type}) : ${this._distance_parcourue}km`);
      if (this._niveau_carburant <= 0) {
        console.log(`${this._player_name} doit faire le plein !!`);
        this.faire_le_plein();
        setTimeout(() => this.rouler(), (this._capacite_reservoir * 10)+2000);
      } else {
        this.remplissage_en_cours = false;
        setTimeout(() => this.rouler(), Vehicule._cycle);
      }
    }

  }

  static course_finie():boolean{
    if(Vehicule.nombre_de_joueurs == Vehicule.joueurs_ayant_fini){      
      return true;
    } else {
      return false;
    }
  }


}

export { Vehicule }
