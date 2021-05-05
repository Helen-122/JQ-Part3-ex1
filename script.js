var count = 0;

$(document).ready(function () {
    //Au click sur le bouton j'incremente ma variable "count"
    $("#clicker-ici").click(function () {
        count++;
        //on affiche dans l'input la nombre de clicks
        $("input").val(count);
    });
});

//autre facon:
//$("#clique-ici").click(function()){
//count += 1;
//$('#clickCount').val(count); 
//})