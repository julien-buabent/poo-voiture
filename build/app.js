define(["require", "exports", "./class_vehicule", "./class_moto", "./class_camion", "./class_voiture", "jquery"], function (require, exports, class_vehicule_1, class_moto_1, class_camion_1, class_voiture_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("Lancement de l'atelier Typescript - POO : VEHICULES");
    $(document).ready(function () {
        var participants = [];
        var nbr_joueurs = 3;
        var players = [];
        $('#lance_la_course').on('click', function () {
            console.log('Vérifie joueurs');
            participants = [];
            for (var i = 0; i < nbr_joueurs; i++) {
                var id = i + 1;
                var nom = $('#joueur_' + id + ' input[type=text]').val();
                var type = $('#joueur_' + id + ' select').val();
                var player = { nom: nom, type: type };
                if (nom == '') {
                    console.error("Le nom du joueur " + id + " n'est pas correct.");
                }
                else if (type == '') {
                    console.error("Le type de v\u00E9hicule du joueur " + id + " n'est pas correct.");
                }
                else {
                    participants.push(player);
                }
            }
            //console.log(participants);
            if (participants.length == nbr_joueurs) {
                console.log('LANCE LA COURSE');
                /*for(let key in participants){
                  $('#nom_'+key).html(`${participants[key].nom}<br />Véhicule : ${participants[key].type}`);
                }*/
                run();
            }
            else {
                console.log('Revoir les joueurs');
            }
        });
        function run() {
            console.log('RUN');
            console.log(participants);
            for (var key in participants) {
                console.log('=============================');
                console.log("NOUVEAU PARTICPANT : " + key);
                var player = participants[key];
                var player_name = player.nom;
                var selector = '#player_' + key;
                if (player.type == 'moto') {
                    player = new class_moto_1.default();
                }
                else if (player.type == 'voiture') {
                    player = new class_voiture_1.default();
                }
                else if (player.type == 'camion') {
                    player = new class_camion_1.default();
                }
                players.push(player);
                class_vehicule_1.default.nombre_de_joueurs++;
                player.player_name = player_name;
                $(selector + ' .nom').html(player.player_name);
                $(selector + ' .type').html(player.type);
                $(selector + ' .course').html("<img src='" + player.img + "' style='margin-left:" + player.pourcentage_avancement + "%;' />");
                player.rouler();
            }
            setTimeout(function () { refresh(); }, class_vehicule_1.default._cycle);
        }
        function refresh() {
            for (var key in players) {
                var player = players[key];
                var selector = '#player_' + key;
                $(selector + ' .distance').html(player.distance_parcourue + "/" + player.distance_a_parcourir + "Km");
                $(selector + ' .reservoir').html(player.niveau_carburant + "/" + player.capacite_reservoir + "L");
                if (player.remplissage_en_cours) {
                    $(selector + ' .reservoir').append("<br /><img src='" + class_vehicule_1.default.pompe + "' />");
                }
                if (player.win == true) {
                    $(selector + ' .course').css('text-align', 'right');
                    $(selector + ' .course').html("<img src='" + player.img + "' style='border:solid 2px green;' />");
                }
                else {
                    $(selector + ' .course').html("<img src='" + player.img + "' style='margin-left:" + player.pourcentage_avancement + "%;' />");
                }
            }
            if (class_vehicule_1.default.course_finie() == false) {
                setTimeout(function () { refresh(); }, class_vehicule_1.default._cycle / 10);
            }
            else {
                alert('BRAVO A TOUS, LA COURSE EST FINIE !');
            }
        }
        /*participants['Pierre'] = {
          vehicule: 'moto'
        };
        participants['Paul'] = {
          vehicule: 'voiture'
        };
        participants['Jacques'] = {
          vehicule: 'camion'
        };*/
        //var element = document.getElementById('joueur_1');
        //element.innerHTML = 'aaaa';
    });
});
