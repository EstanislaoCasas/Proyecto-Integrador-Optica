

function sumarpreciosj(){
  itemsc =  document.getElementById("citems").value;
    vtotalj = 0;
  /*a = document.getElementById("hp0");
  na =   Number(a.textContent);

  b = document.getElementById("hp1");
  nb =   Number(b.textContent); 
    */

  for( i=0 ; i <itemsc; i++){

     a = document.getElementById("hp"+i);
    na =   Number(a.textContent);

    vtotalj = vtotalj + na;

  }
    
  totalcc = document.getElementById("total");
  totalcc.innerHTML = "TOTAL $" + vtotalj;
  
 

}

function newpricep(id){
    m1 = document.getElementById("preciop"+id).value;
    m2 = document.getElementById("cantitadp"+id).value;
//    r = m1*m2;
   // document.getElementById("resultado"+id).value = r;
    letra = document.getElementById("hp"+id);
    letra.innerHTML = m1*m2;
    sumarpreciosj();
    }
