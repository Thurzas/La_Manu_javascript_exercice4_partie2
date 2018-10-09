function DIE(f){
  var tab =f.getElementsByTagName("input");
    for(var i =0;i<tab.length;i++){
        tab[i].value="";
    }
};
