//creation (definition ) d'une fonction (programme nomme , qui joue un role precis dans le programme principal(main))

function majorite() {
    //declaration de variables : reservation de place memoire (age,pseudo,prix,tva,...)
    let age = document.getElementById("age").value; //typage dynamique : JS comprends automatiquement que age est INT
    let pseudo = document.getElementById("pseudo").value;
    //concatenation (collage) : "salut "+pseudo
    console.log(pseudo + " a " + age + " ans");
    if (age > 18) {
      console.log(pseudo + " est majeur");
    } else {
      // age <=18

      console.log(pseudo + " est mineur");
    }
  }




  function ajouter() {}
  //define a function : saluer
  function saluer() {
    console.log("SALUT");
  }
  //call the function (appel / execution de la fonction)
 //  saluer();

// appel de la fonction
 //  majorite();