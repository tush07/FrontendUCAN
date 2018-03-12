
var qTag1 = document.getElementById("qtag1");
var qTag2 = document.getElementById("qtag2");
var qTag3 = document.getElementById("qtag3");



qTag1.addEventListener('click', function(event) {

    if(qTag1.classList.contains("btn-default")){
        qTag1.classList.remove("btn-default");
        qTag1.classList.add("btn-primary");
    }
     else if(qTag1.classList.contains("btn-primary")){
        qTag1.classList.add("btn-default");
        qTag1.classList.remove("btn-primary");
     }    
});

qTag2.addEventListener('click', function(event) {

    if(qTag2.classList.contains("btn-default")){
        qTag2.classList.remove("btn-default");
        qTag2.classList.add("btn-primary");
    }
     else if(qTag2.classList.contains("btn-primary")){
        qTag2.classList.add("btn-default");
        qTag2.classList.remove("btn-primary");
     }    
});

qTag3.addEventListener('click', function(event) {

    if(qTag3.classList.contains("btn-default")){
        qTag3.classList.remove("btn-default");
        qTag3.classList.add("btn-primary");
    }
     else if(qTag3.classList.contains("btn-primary")){
       qTag3.classList.add("btn-default");
        qTag3.classList.remove("btn-primary");
     }    
});


