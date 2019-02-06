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
    var Moto = /** @class */ (function (_super) {
        __extends(Moto, _super);
        function Moto() {
            var _this = _super.call(this) || this;
            _this.type = 'moto';
            _this.capacite_reservoir = 15;
            _this._klaxon = 'Bip biiiip !!';
            _this.consommation = 2;
            _this.vitesse_max = 150;
            _this.img = './images/moto.jpg';
            _this.niveau_carburant = _this.capacite_reservoir;
            return _this;
        }
        Moto.prototype.rouler = function () {
            _super.prototype.rouler.call(this);
            if (this._win) {
                this.coup_de_klaxon();
                this.wheeling();
            }
            class_vehicule_1.Vehicule.course_finie();
        };
        Moto.prototype.wheeling = function () {
            alert("------> " + this._player_name + " fait un gros wheeling avec sa moto <------");
        };
        return Moto;
    }(class_vehicule_1.Vehicule));
    exports.Moto = Moto;
    exports.default = Moto;
});
