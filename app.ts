






console.log("Lancement de l'atelier Typescript - POO : VEHICULES");

import Vehicule from './class_vehicule';
import Moto from './class_moto';
import Camion from './class_camion';
import Voiture from './class_voiture';
import * as $ from 'jquery';


$(document).ready(function() {

  let participants = [];
  let nbr_joueurs = 3;
  let players = [];

  $('#lance_la_course').on('click', function() {
    console.log('Vérifie joueurs');
    participants = [];

    for (var i = 0; i < nbr_joueurs; i++) {
      var id = i + 1;
      var nom = $('#joueur_' + id + ' input[type=text]').val();
      var type = $('#joueur_' + id + ' select').val();
      var player = { nom: nom, type: type };
      if (nom == '') {
        console.error(`Le nom du joueur ${id} n'est pas correct.`)
      } else if (type == '') {
        console.error(`Le type de véhicule du joueur ${id} n'est pas correct.`)
      } else {
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
    } else {
      console.log('Revoir les joueurs');
    }

  });

  function run() {
    console.log('RUN');
    console.log(participants);

    for (let key in participants) {
      console.log('=============================')
      console.log(`NOUVEAU PARTICPANT : ${key}`);
      let player = participants[key];
      let player_name = player.nom;
      let selector = '#player_' + key;

      if (player.type == 'moto') {
        player = new Moto();
      } else if (player.type == 'voiture') {
        player = new Voiture();
      } else if (player.type == 'camion') {
        player = new Camion();
      }

      players.push(player);
      Vehicule.nombre_de_joueurs++;
      player.player_name = player_name;

      $(selector + ' .nom').html(player.player_name);
      $(selector + ' .type').html(player.type);
      $(selector + ' .course').html(`<img src='${player.img}' style='margin-left:${player.pourcentage_avancement}%;' />`);
      player.rouler();
    }
    setTimeout(function() { refresh(); }, Vehicule._cycle);

  }


  function refresh() {

    for (let key in players) {
      let player = players[key];
      let selector = '#player_' + key;

      $(selector + ' .distance').html(`${player.distance_parcourue}/${player.distance_a_parcourir}Km`);
      $(selector + ' .reservoir').html(`${player.niveau_carburant}/${player.capacite_reservoir}L`);

      if (player.remplissage_en_cours) {
        $(selector + ' .reservoir').append(`<br /><img src='${Vehicule.pompe}' />`);
      }

      if (player.win == true) {
        $(selector + ' .course').css('text-align', 'right');
        $(selector + ' .course').html(`<img src='${player.img}' style='border:solid 2px green;' />`);
      } else {
        $(selector + ' .course').html(`<img src='${player.img}' style='margin-left:${player.pourcentage_avancement}%;' />`);
      }
    }
    if (Vehicule.course_finie() == false) {
      setTimeout(function() { refresh(); }, Vehicule._cycle / 10);
    } else {
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
