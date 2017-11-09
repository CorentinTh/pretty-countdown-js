function compte_a_rebours() {
    var compte_a_rebours = document.getElementById("compte_a_rebours");

    var date_actuelle = new Date();
    var date_evenement = new Date("Dec 13 17:30:00 2017");
    var total_secondes = (date_evenement - date_actuelle) / 1000;

    var prefixe = "Fin dans ";
    if (total_secondes < 0) {
        prefixe = "Terminé il y a "; 
        total_secondes = Math.abs(total_secondes);
    }

    if (total_secondes > 0) {
        var jours = Math.floor(total_secondes / (60 * 60 * 24)),
            heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60)),
            minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60),
            secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        var et = "et",
            mot_jour = "jours,",
            mot_heure = "heures,",
            mot_minute = "minutes,",
            mot_seconde = "secondes";

        if (jours == 0) {
            jours = '';
            mot_jour = '';
        } else if (jours == 1) {
            mot_jour = "jour,";
        }

        if (heures == 0) {
            heures = '';
            mot_heure = '';
        } else if (heures == 1) {
            mot_heure = "heure,";
        }

        if (minutes == 0) {
            minutes = '';
            mot_minute = '';
        } else if (minutes == 1) {
            mot_minute = "minute,";
        }

        if (secondes == 0) {
            secondes = '';
            mot_seconde = '';
            et = '';
        } else if (secondes == 1) {
            mot_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && jours == 0) {
            et = "";
        }

        compte_a_rebours.innerHTML = prefixe + jours + ' ' + mot_jour + ' ' + heures + ' ' + mot_heure + ' ' + minutes + ' ' + mot_minute + ' ' + et + ' ' + secondes + ' ' + mot_seconde;
    } else {
        compte_a_rebours.innerHTML = 'Compte à rebours terminé.';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}

compte_a_rebours();