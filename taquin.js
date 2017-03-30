/**
 * Created by rydkey on 21/03/17.
 */
var ImageTaquin = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var asset = 'assets/personal/img/'
var ImageZone = document.getElementById('image');
var caseVide=[0,0];
var Gamu=false;

function generate(){
    for(var i=0;i<4;i++){
        var row = document.createElement('div');
        row.setAttribute('class','row');
        for(var j=0;j<4;j++){
            var image = new Image;
            image.src = asset+i+'-'+j+'.jpeg';
            ImageTaquin[i][j] = image
            var jl = document.createElement('div');
            jl.setAttribute('class','col-lg-3');
            var img = document.createElement('img');
            img.setAttribute('id',j+i*4+1);
            img.src = image.src;
            jl.appendChild(img);
            row.appendChild(jl);
        }
        ImageZone.appendChild(row);
    }
    ImageTaquin[3][3].src=asset+'vide.jpg';
    caseVide=[3,3];
}

function setCaseVide() {
    var i,j
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            console.log(document.getElementById(j+i*4+1).src+" "+ImageTaquin[caseVide[0]][caseVide[1]].src)
            if(document.getElementById(j+i*4+1)==ImageTaquin[caseVide[0]][caseVide[1]]){
                caseVide[0]=i;
                caseVide[1]=j;
            }
        }
    }
    console.log(caseVide)
}

function melanger() {
    setCaseVide();
    var b;
    for(b=0;b<99999;b++){
        for(var i = 0; i< ImageTaquin.length; i++) {
            k = ImageTaquin[i].length;
            while(k--){
                j = Math.floor(Math.random() * (ImageTaquin.length));
                tempk = ImageTaquin[i][k];
                tempj = ImageTaquin[i][j];
                ImageTaquin[i][k] = tempj;
                ImageTaquin[i][j] = tempk;
            }
        }
    }
    Gamu=true;
    actualise()
}

function actualise() {
    var i,j
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            document.getElementById(j+i*4+1).src=ImageTaquin[i][j].src;
        }
    }
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if (Gamu){
            alert('onbouge');
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 39) {
        if (Gamu){
            alert('onbouge');
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 38) {
        if (Gamu){
            alert('onbouge');
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 40) {
        if (Gamu){
            alert('onbouge');
        }else{
            melanger();
        }
    }
});

window.onload = generate();
document.getElementById('btn-shuffle').addEventListener('click',melanger,false);

