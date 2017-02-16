    var paths = document.querySelectorAll('#owl path');
    var pocet = paths.length;
    var delka = [];
    var zlomek = 1;
    
    function animace () {
     zlomek -= 0.005;
     for (var i=0; i<pocet; i++) {
      paths[i].setAttribute('stroke-dashoffset', delka[i] * zlomek); 
     }
     if (zlomek > 0) {
      setTimeout(animace, 20);
     }
    }
    
    for (var i=0; i<pocet; i++) {
     delka.push(paths[i].getTotalLength());
     paths[i].setAttribute('stroke-dasharray', delka[i] + ', ' + delka[i]);
     paths[i].setAttribute('stroke-dashoffset', delka[i]); 
    }
    
    animace();