// (function() {
//   'use strict';
//   window.addEventListener('load', function() {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation');
//     // Loop over them and prevent submission
//     var validation = Array.prototype.filter.call(forms, function(form) {
//       form.addEventListener('submit', function(event) {
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add('was-validated');
//       }, false);
//     });
//   }, false);
// })();

$(document).ready(function(){
  $("form#pollVoter").submit(function(event){
    event.preventDefault();
    var voterAge = parseInt($("input#age").val());
    var voterGender = $("select#gender").val();
    var voterParty = $("select#party").val();
    var voterAbortion = $("input:radio[name=question1]:checked").val();
    var voterUnions = $("input:radio[name=question2]:checked").val();
    var voterElectoral = $("input:radio[name=question3]:checked").val();
    var voterHealthcare = $("input:radio[name=question4]:checked").val();
    var voterPhilosophy = $("input:radio[name=question5]:checked").val();
    var voterRepublicanBias = $("select#republicanBias").val();
    var voterDemocraticBias = $("select#democratBias").val();

    console.log(voterAge);
    console.log(voterGender);
    console.log(voterParty);
    console.log(voterAbortion);
    console.log(voterUnions);
    console.log(voterElectoral);
    console.log(voterHealthcare);
    console.log(voterPhilosophy);
    console.log(voterRepublicanBias);
    console.log(voterDemocraticBias);


    if (voterAge <= 15 && voterGender === "male" && voterParty === "republican" && voterAbortion === "conservative") {
      $("form#pollVoter").hide();
      $("div#intro").hide();
      $("div#showTypology").show();
      $("p#typology").empty().text("please talk to all your women friends and find out their opinions on this.");
      $("img#imgLeader").removeAttr("src alt");
      $("img#imgLeader").attr({"src": "img/freeWoman.jpg", "alt": "no woman is free who has no control over their body"});
    } else if (voterAbortion === "conservative" && voterUnions === "conservative" && voterElectoral === "conservative" && voterHealthcare === "conservative" && voterPhilosophy === "conservative" || voterRepublicanBias === "Has high ethical standards"){
      $("form#pollVoter").hide();
      $("div#intro").hide();
      $("div#showTypology").show();
      $("p#typology").empty().text("Next time vote for someone who will be good for the country, not just you");
      $("img#imgLeader").removeAttr("src alt");
      $("img#imgLeader").attr({"src": "img/trumpGraph.jpg", "alt": "record low poll numbers"});
    } else if (voterAbortion === "authoritarian" && voterUnions === "authoritarian" && voterElectoral === "authoritarian" && voterHealthcare === "authoritarian" && voterPhilosophy === "authoritarian"){
      $("form#pollVoter").hide();
      $("div#intro").hide();
      $("div#showTypology").show();
      $("p#typology").empty().text("Here's the leader you want, you won't even have to vote!");
      $("img#imgLeader").removeAttr("src alt");
      $("img#imgLeader").attr({"src": "img/kimJong.jpg", "alt": "record low poll numbers"});
    } else if (voterAbortion === "radical" && voterUnions === "radical" && voterElectoral === "radical" && voterHealthcare === "radical" && voterPhilosophy === "radical"){
      $("form#pollVoter").hide();
      $("div#intro").hide();
      $("div#showTypology").show();
      $("p#typology").empty().text("Viva the revolution!");
      $("img#imgLeader").removeAttr("src alt");
      $("img#imgLeader").attr({"src": "img/guevara.jpg", "alt": "a authoritarian leader for you"});
    } else {
      $("form#pollVoter").hide();
      $("div#intro").hide();
      $("div#showTypology").show();
      $("p#typology").empty().text("Next time vote for a good presidential candidate");
    }



  });


});
