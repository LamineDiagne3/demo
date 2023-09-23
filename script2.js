// RECUPERATION DES  ELEMENT
var article = document.querySelectorAll('.item');
var ParentArticle = document.querySelector('.parent')
var prixtotal = document.getElementById('total-price');

//ORGANISATION DES ARTICLES

for (var i = 0 ; i < article.length ; i++){

    //CREATION DES BOUTONS ET GESTIONS DES PRIX
    let btnajout = article[i].children[3];
    let btnsupprimer = article[i].children[4];
    let btnFav = article[i].children[5];
    let btndiminue = article[i].children[1];
    let articleNum = article[i].children[2];
    let quantités = parseInt(articleNum.innerText);
    let prixunitaire = article[i].children[6];
    let prixarticle = parseInt(prixunitaire.innerText);
    let prix = article[i].children[7].children[0];



    // AUGMENTATION,DIMINUTION,SUPRESSION,ET MISES EN FAVORIS DES ARTICLES

    btnajout.addEventListener('click', function(){
        
        quantités++;
        articleNum.innerHTML=quantités;
        prix.innerText= quantités*prixarticle;
        calSum ()  
    });

    btndiminue.addEventListener('click', function(){
        if(quantités>0){
            quantités--;
            articleNum.innerHTML=quantités;
            prix.innerText = quantités*prixarticle;
            calSum();
        }
    });


    btnsupprimer.addEventListener('click', function(e){
        e.target.parentElement.remove()
        calSum();
        
    });


    const colors = ['pink' , 'white'];
    let currentIndex = 0;

    btnFav.addEventListener('click', function() {
        btnFav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
    });
}

//PRIX TOTAL DES ARTICLES

function calSum() {
    let total = 0;

    for (var i = 0; i < article.length; i++) {
       let articleQuantite=parseInt(article[i].querySelector('.quantity').innerText);
       let articlePrixUnit =parseInt(article[i].querySelector('.price').innerText);
       total+= articlePrixUnit * articleQuantite;
    }
   prixtotal.textContent=total.toFixed(2)+"$"
}
calSum();