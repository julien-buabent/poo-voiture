define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Vehicule = /** @class */ (function () {
        function Vehicule() {
            this._player_name = '';
            this._type = '';
            this._capacite_reservoir = 0;
            this._niveau_carburant = 0;
            this._klaxon = '';
            this._consommation = 0;
            this._vitesse_max = 0;
            this._distance_parcourue = 0;
            this._distance_a_parcourir = 5000;
            this._win = false;
            this._img = '';
            this._pourcentage_avancement = 0;
            this.remplissage_en_cours = false;
            console.log("Cr\u00E9ation d'un nouveau v\u00E9hicule");
        }
        Object.defineProperty(Vehicule.prototype, "player_name", {
            get: function () {
                return this._player_name;
            },
            set: function (nom) {
                this._player_name = nom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "type", {
            get: function () {
                return this._type;
            },
            set: function (type) {
                if (type != 'moto' && type != 'voiture' && type != 'camion') {
                    console.log("Ce type n'existe pas");
                }
                else {
                    this._type = type;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "capacite_reservoir", {
            get: function () {
                return this._capacite_reservoir;
            },
            set: function (volume) {
                this._capacite_reservoir = volume;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "niveau_carburant", {
            get: function () {
                return this._niveau_carburant;
            },
            set: function (_litre) {
                if (_litre > this._capacite_reservoir) {
                    console.log("Le r\u00E9servoir ne peut pas accueillir " + _litre + "L (valeur max : " + this._capacite_reservoir + "L)");
                }
                else if (_litre == 0) {
                    console.log("Le r\u00E9servoir de " + this._player_name + " est vide");
                    this._niveau_carburant = _litre;
                }
                else {
                    this._niveau_carburant = _litre;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "consommation", {
            get: function () {
                return this._consommation;
            },
            set: function (conso) {
                this._consommation = conso;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "win", {
            get: function () {
                return this._win;
            },
            set: function (val) {
                this._win = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "vitesse_max", {
            get: function () {
                return this._vitesse_max;
            },
            set: function (vitesse) {
                this._vitesse_max = vitesse;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "distance_parcourue", {
            get: function () {
                return this._distance_parcourue;
            },
            set: function (distance) {
                this._distance_parcourue = distance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "distance_a_parcourir", {
            get: function () {
                return this._distance_a_parcourir;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "img", {
            get: function () {
                return this._img;
            },
            set: function (image) {
                this._img = image;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vehicule.prototype, "pourcentage_avancement", {
            get: function () {
                return this._pourcentage_avancement;
            },
            set: function (val) {
                this._pourcentage_avancement = val;
            },
            enumerable: true,
            configurable: true
        });
        Vehicule.prototype.affiche_type = function () {
            console.log("Type du v\u00E9hicule : " + this._type);
        };
        Vehicule.prototype.affiche_niveau_de_carburant = function () {
            console.log("R\u00E9servoir : " + this.niveau_carburant + "L/" + this._capacite_reservoir + "L");
        };
        Vehicule.prototype.mettre_du_carburant = function (litre) {
            if (litre < 0) {
                console.log('Impossible de mettre un volume négatif de carburant !');
            }
            else {
                this.niveau_carburant = this.niveau_carburant + litre;
                this.remplissage_en_cours = true;
            }
        };
        Vehicule.prototype.faire_le_plein = function () {
            console.log("Plein en cours pour " + this._player_name + "...");
            while (this.niveau_carburant < this.capacite_reservoir) {
                this.mettre_du_carburant(1);
            }
            console.log("Plein termin\u00E9 pour " + this._player_name + ".");
            this.coup_de_klaxon();
        };
        Vehicule.prototype.coup_de_klaxon = function () {
            console.log(this._klaxon);
        };
        Vehicule.prototype.rouler = function () {
            var _this = this;
            this._pourcentage_avancement = (100 * this._distance_parcourue) / this._distance_a_parcourir;
            this.niveau_carburant = this._niveau_carburant - this._consommation;
            this.distance_parcourue = this._distance_parcourue + this._vitesse_max;
            if (this._distance_parcourue >= this._distance_a_parcourir) {
                console.log("##### " + this._player_name + " (" + this._type + ") arrive " + Vehicule.rank + "\u00B0 (" + this._distance_parcourue + "km) #####");
                this.win = true;
                Vehicule.joueurs_ayant_fini++;
                Vehicule.rank++;
            }
            if (this.win == false) {
                console.log(this._player_name + " (" + this._type + ") : " + this._distance_parcourue + "km");
                if (this._niveau_carburant <= 0) {
                    console.log(this._player_name + " doit faire le plein !!");
                    this.faire_le_plein();
                    setTimeout(function () { return _this.rouler(); }, (this._capacite_reservoir * 10) + 2000);
                }
                else {
                    this.remplissage_en_cours = false;
                    setTimeout(function () { return _this.rouler(); }, Vehicule._cycle);
                }
            }
        };
        Vehicule.course_finie = function () {
            if (Vehicule.nombre_de_joueurs == Vehicule.joueurs_ayant_fini) {
                return true;
            }
            else {
                return false;
            }
        };
        Vehicule.nombre_de_joueurs = 0;
        Vehicule.joueurs_ayant_fini = 0;
        Vehicule._cycle = 250;
        Vehicule.rank = 1;
        Vehicule.pompe = './images/pompe-essence.jpg';
        return Vehicule;
    }());
    exports.Vehicule = Vehicule;
    exports.default = Vehicule;
});
