
$.getJSON("parceiros.json", function(json){
    json.map(getParceiros).forEach(function(item){
        item = item.split("|");

    });
});
//serializer
function getParceiros(item){
    return [
        item.img, item.nome, item.instagram, item.point
    ].join("|")
}


window.addEventListener('load',function(){

    div_parceiro = document.getElementById('parceiro');


    $.getJSON("parceiros.json", function(json){
        json.map(getParceiros).forEach(function(item){
            item = item.split("|");
            if(item[0] != "default"){
                Create(item); 
            } 
    
        });
        
        
        if(json.length<=6){
            var cont = 6 - json.length + 1;
            
            item = getParceiros(json[0]);
            item = item.split("|");
            for(i=1; i<=cont;i++){
                Create(item);
            }
            
        }
        
    });
    //serializer
    function getParceiros(item){
        return [
            item.img, item.nome, item.point, item.instagram, item.facebook
        ].join("|")
    }


    function Create(parceiro){
        // create Element
        div_col = document.createElement('div');
        div = document.createElement('div');
        div_a = document.createElement('div');        
        img = document.createElement('img');
        h2_nome = document.createElement('h2');
        a_insta = document.createElement('a');
        i_insta = document.createElement('i');
        a_point = document.createElement('a');
        i_point = document.createElement('i');
        a_face = document.createElement('a');
        i_face = document.createElement('i');
        br = document.createElement('br');
        button = document.createElement('a');
        
        // styles 
        div_col.className = "col-lg-4 col-sm-6";
        div.className = 'card';
        div_a.style = "margin: 10px 0";
        img.style="width:100%";
        // fas fa-fas fa-4x text-primary mb-3 sr-icon-1
        i_insta.className = 'fa fa-instagram';
        i_point.className = 'fa fa-map-marker';
        i_face.className = 'fa fa-facebook';
        button.className = "btn btn-secondary";

        if(parceiro[0]=='default'){
            img.style = 'opacity: 0.3; filter: alpha(opacity=30);width:100%;'
            text_button = document.createTextNode('Click, para saber mais!');
            button.appendChild(text_button);
            button.onclick = toast;
            button.href = '#contact';
            button.style = 'font-size:18px; color:#FFF;'
            div_a.appendChild(button);
        }


        // set data
        img.src = './img/parceiros/'+parceiro[0]+'.jpeg';
        h2_text = document.createTextNode(parceiro[1]);
        h2_nome.appendChild(h2_text);

        a_point.href = parceiro[2];
        a_point.appendChild(i_point);

        a_insta.href = parceiro[3];
        a_insta.appendChild(i_insta);

        a_face.href = String(parceiro[4]);
        a_face.appendChild(i_face);
        


        // add na DOM 
        div.appendChild(img);
        div.appendChild(h2_nome);
        if(parceiro[0]!="default"){
            div_a.appendChild(a_point);
            div_a.appendChild(a_insta);
            div_a.appendChild(a_face);
        }
        div.appendChild(div_a);
        div_col.appendChild(div);
        div_parceiro.appendChild(div_col);
        
    }
    
});

function toast() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
