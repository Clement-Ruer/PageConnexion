
document.getElementById("authentification").addEventListener("submit", function (e) {

    e.preventDefault();
    console.log("Entrée dans fonction");

    let email = document.getElementById("email");
    let mdp = document.getElementById("mdp");

    // Si aucun des champs n'est rempli
    if ((!email.value) && (!mdp.value)){

        document.getElementById("champs_vides").style.display = "block";
        email.focus();
        return false;

    }else {

        document.getElementById("champs_vides").style.display = "none";

        // Si l'un des deux champs est vide

        if ((!email.value) || (!mdp.value)) {
            //Si l'email n'est pas renseigne
            if (!email.value) {

                document.getElementById("error_1").style.display = "block";
                console.log("Email non fournie");
                email.focus();

            } else { // Si l'email est fourni alors c'est le mot de passe qui ne l'est pas

                document.getElementById("error_2").style.display = "block";
                console.log("Mdp non fourni");
                mdp.focus();

            }
            return false;

        }else {  // Si les deux champs sont remplis

            document.getElementById("error_1").style.display = "none";
            document.getElementById("error_2").style.display = "none";

            //Filtrage sur les entrees

            if (email.value) { // Filtrage du contenu du champ email
                document.getElementById("error_1").style.display = "none";

                if(besoinEchapper(email.value) === true){
                    console.log("Merci d'échapper les caractères spéciaux (email)");
                    return false;
                }

            }
            if (mdp.value) {
                document.getElementById("error_2").style.display = "none";

                // Echappement des caractères spéciaux
                if(besoinEchapper(mdp.value) === true){
                    console.log("Merci d'échapper les caractères spéciaux (mot de passe)");
                    return false;
                }

                // Verification taille de la chaine
                if (mdp.value.length < 12) {
                    document.getElementById("error_length").style.display = "block";
                    return false;
                }
                document.getElementById("error_length").style.display = "none";

            }

            console.log("Fin en cas de réussite");
            return true;
        }
    }
});


// Fonction qui va vérifier si l'entrée présente des caractères à échapper
function besoinEchapper(chaine) {

    let escape_char = ['<','>','.','$','^','{','[','}',']','|','*','+','?','\\'];

    for (let pas = 0; pas < chaine.length; pas++){
        for (let spec_index = 0; spec_index < escape_char.length; spec_index++){
            if (chaine[pas] === escape_char[spec_index]){
                console.log("Caractère spécial à l'index " + spec_index);
                return true;
            }
        }
    }
    return false;
}