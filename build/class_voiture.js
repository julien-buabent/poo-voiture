var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./class_vehicule"], function (require, exports, class_vehicule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Voiture = /** @class */ (function (_super) {
        __extends(Voiture, _super);
        function Voiture() {
            var _this = _super.call(this) || this;
            _this.type = 'voiture';
            _this.capacite_reservoir = 40;
            _this._klaxon = 'Tut tut !!';
            _this.consommation = 4;
            _this.vitesse_max = 130;
            _this.img = './images/voiture.jpeg';
            _this.niveau_carburant = _this.capacite_reservoir;
            return _this;
        }
        Voiture.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._win) {
                this.coup_de_klaxon();
                this.derapage_controlle();
            }
            class_vehicule_1.Vehicule.course_finie();
        };
        Voiture.prototype.derapage_controlle = function () {
            alert("------> " + this._player_name + " nous fait un magnifique d\u00E9rapage controll\u00E9 avec sa voiture <------");
        };
        return Voiture;
    }(class_vehicule_1.Vehicule));
    exports.Voiture = Voiture;
    exports.default = Voiture;
});
