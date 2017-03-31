/**
 * Created by rydkey on 21/03/17.
 */
var ImageTaquin = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var Win = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var asset = 'assets/personal/img/'
var ImageZone = document.getElementById('image');
var ImageVide = new Image;
ImageVide.src=asset+'vide.jpg';
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
            Win[i][j] = image
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
    ImageTaquin[3][3]=ImageVide;
    Win[3][3]=ImageVide;
    setCaseVide(3,3);
}

function setCaseVide(i,j) {
    caseVide=[i,j];
}

function melanger() {
    var b,i,j;
    for(b=0;b<9999;b++){
        j = Math.floor((Math.random() * 4) + 1);
        if (j==1){
            move(0,1)
        }else if (j==2){
            move(0,-1)
        }else if (j==3){
            move(1,0)
        }else if (j==4){
            move(-1,0)
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
            if(ImageTaquin[i][j].src == ImageVide.src){
                setCaseVide(i,j);
            }
        }
    }
}

function move(i,j) {
    if(caseVide[0]==3 && i==1){
        return
    }else if(caseVide[1]==3 && j==1){
        return
    }else if(caseVide[0]==0 && i==-1){
        return
    }else if(caseVide[1]==0 && j==-1){
        return
    }else{
        var tempA,tempB
        tempA = ImageTaquin[caseVide[0]+i][caseVide[1]+j];
        ImageTaquin[caseVide[0]+i][caseVide[1]+j] = ImageVide;
        ImageTaquin[caseVide[0]][caseVide[1]] = tempA;
        actualise()
    }
}

function verif(){
    var i,j
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            if (ImageTaquin[i][j].src!=Win[i][j].src) {
                return;
            }
        }
    }
    Gamu=false;
    alert('tu as gagné !')
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        if (Gamu){
            move(0,-1);
            verif();
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 39) {
        if (Gamu){
            move(0,1);
            verif();
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 38) {
        if (Gamu){
            move(-1,0);
            verif();
        }else{
            melanger();
        }
    }
    else if(event.keyCode == 40) {
        if (Gamu){
            move(1,0);
            verif();
        }else{
            melanger();
        }
    }
});

window.onload = generate();
document.getElementById('btn-shuffle').addEventListener('click',melanger,false);

