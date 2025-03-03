 //fonction (module, procedure, methode)
        //Etape  1: definition (creation) d'une fonction : majorite
        function majorite() {
            var age=document.getElementById('ages').value;
            let prenom=document.getElementById('prenom').value;
            if (age>18) {
                alert(prenom+" est majeur, car il a"+age+"ans" );
            } else {
                alert(prenom+" est mineur, car il a"+age+"ans" );
                
            }
      
          }
    //etape 2 : call, appel , execution
    // majorite();