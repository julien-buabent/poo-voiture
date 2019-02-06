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
    var Camion = /** @class */ (function (_super) {
        __extends(Camion, _super);
        function Camion() {
            var _this = _super.call(this) || this;
            _this.type = 'camion';
            _this.capacite_reservoir = 80;
            _this._klaxon = 'Pouet pouet !!';
            _this.consommation = 6;
            _this.vitesse_max = 125;
            _this.img = './images/camion.jpg';
            _this.niveau_carburant = _this.capacite_reservoir;
            return _this;
        }
        Camion.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._win) {
                this.coup_de_klaxon();
                this.grosse_fumee_blanche();
            }
            class_vehicule_1.Vehicule.course_finie();
        };
        Camion.prototype.grosse_fumee_blanche = function () {
            alert("------> " + this._player_name + " enfume tout le monde avec les grosses fum\u00E9es blanches de son camion <------");
        };
        return Camion;
    }(class_vehicule_1.Vehicule));
    exports.Camion = Camion;
    exports.default = Camion;
});
