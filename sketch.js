relg = 0;
let tm = 0;
let ts = 0;
seg = 0;
var nivel = 0;
var ponto= 0;
var brnv = 0;
let borda = 465;
let corA, corB, corC;
let tela  = 1//----------------------------------------------
let movX = 1;
let movY = 550;
var cena;
var cena1;
var cena2;
var mario1 = [];
var mario2 = [];
var mario = [];
var ghost = [];
var marioNivel2 = [];
var marioNivel2E = [];
var marionv = [];
var i = 0;
var j = 0;
var tempo = 0;
var fonte;
var ghostX = 50;
var ghostY = 50;
var inimX = 999;
var inimY = 80;
var inim1X = 999;
var inim1Y = 560;
var inim2X = 999;
var inim2Y = 400;
var iconex =999;
var iconey = 80;
var botaoAC = [];
var botaoBA = [];
var botaoDI =[];
var botaoES = [];
var botaoESC= [];
var inimigo = [];
var icone = [];
var fundo = [];
var bc = [];
final = [];
tx1 =1000;
tx2 =1100;
finaly =640;
var son0,son1,son2,son3,son4,son5,son6,son7,son8,son9,son10;
var tempoMusica = 0;




function preload() {

  son0 = loadSound('sons/1.wav');
  son1 = loadSound('sons/2.wav');
  son2 = loadSound('sons/3.wav');
  son3 = loadSound('sons/4.wav');
  son4 = loadSound('sons/5.wav');
  son5 = loadSound('sons/6.wav');
  son6 = loadSound('sons/7.wav');
  son7 = loadSound('sons/8.wav');
  son8 = loadSound('sons/9.wav');
  son9 = loadSound('sons/10.wav');
  son10 = loadSound('sons/11.wav');
 

  cena = loadImage("yoshi_s_island_by_sprits_d3k9jph.jpg");
  cena1 = loadImage("999574.png");
  cena2 = loadImage("7089128.jpg");
  cena3 = loadImage("sprite_1.png");
  // mario  em movimento / primeiro movimento nivel 1
  mario1[0] = loadImage("mario/sprite_1.png");
  mario1[1] = loadImage("mario/sprite_2.png");
  mario1[2] = loadImage("mario/sprite_1.png");
  mario1[3] = loadImage("mario/sprite_2.png");
  // mario  em movimento direita nivel 1
  mario2[0] = loadImage("mario/sp_1.png");
  mario2[1] = loadImage("mario/sp_2.png");
  mario2[2] = loadImage("mario/sp_1.png");
  mario2[3] = loadImage("mario/sp_2.png");
  // mario  em movimento esquerda nivel 1
  mario[0] = loadImage("mario/sprit_1.png");
  mario[1] = loadImage("mario/sprit_2.png");
  mario[2] = loadImage("mario/sprit_3.png");
  mario[3] = loadImage("mario/sprit_4.png");

  //
  marionv[0] = loadImage ("marionv2/v1.png");
  marionv[1] = loadImage ("marionv2/v2.png");
  marionv[2] = loadImage ("marionv2/v3.png");

  //mario nivel 2 indo direita
  marioNivel2 [0] = loadImage ("marionv2/nv1.png");
  marioNivel2 [1] = loadImage ("marionv2/nv2.png");
  marioNivel2 [2] = loadImage ("marionv2/nv3.png");

  //mario nivel 2 esquesda 
  marioNivel2E [0] = loadImage ("marionv2/nv1 - Copia.png");
  marioNivel2E [1] = loadImage ("marionv2/nv2 - Copia.png");
  marioNivel2E [2] = loadImage ("marionv2/nv3 - Copia.png");
 
  // fantasma memu
  ghost[0] = loadImage("ghost/sprite_1.png");
  ghost[1] = loadImage("ghost/sprite_2.png");
  ghost[2] = loadImage("ghost/sprite_3.png");
  ghost[3] = loadImage("ghost/sprite_4.png");
  ghost[4] = loadImage("ghost/sprite_1.png");
// botao vetores 

  botaoAC [0] = loadImage("botao/BG1c.png");
  botaoAC [1] = loadImage("botao/BG1.png");
  botaoAC [2]  = loadImage('botao/BP11.png');

  botaoBA [0] = loadImage("botao/BG2c.png");
  botaoBA [1] = loadImage("botao/BG2.png");
  botaoBA [2]  = loadImage('botao/BP12.png');


  botaoDI [0]  = loadImage("botao/BG3c.png");
  botaoDI [1] = loadImage("botao/BG3.png");
  botaoDI [2] = loadImage("botao/BP13.png");

  botaoES [0] = loadImage("botao/BG4c.png");
  botaoES [1]  =loadImage("botao/BG4.png");
  botaoES [2] = loadImage("botao/BP14.png");


  botaoESC [0] = loadImage("botao/BG5c.png");
  botaoESC [1] = loadImage("botao/BG5.png");
  botaoESC [2] = loadImage("botao/BP15.png");

//inimigos

  inimigo [0] = loadImage ("inimigo/1.png");
  inimigo [1] = loadImage ("inimigo/2.png");
  inimigo [2] = loadImage ("inimigo/3.png");
  inimigo [3] = loadImage ("inimigo/4.png");
  inimigo [4] = loadImage ("inimigo/5.png");
  inimigo [5] = loadImage ("inimigo/6.png");
  inimigo [6] = loadImage ("inimigo/7.png");
  inimigo [7] = loadImage ("inimigo/8.png");
  inimigo [8] = loadImage ("inimigo/9.png");
  inimigo [9] = loadImage ("inimigo/10.png");
  inimigo [10] = loadImage ("inimigo/11.png");
  inimigo [11] = loadImage ("inimigo/12.png");
  inimigo [12] = loadImage ("inimigo/13.png");
  inimigo [13] = loadImage ("inimigo/14.png");
  inimigo [14] = loadImage ("inimigo/15.png");
  inimigo [15] = loadImage ("inimigo/16.png");
  inimigo [16] = loadImage ("inimigo/17.png");
  inimigo [17] = loadImage ("inimigo/18.png");

  // icone 

  icone [0] = loadImage ("icone/1.png");
  icone [1] = loadImage ("icone/2.png");
  icone [2] = loadImage ("icone/3.png");
  icone [3] = loadImage ("icone/4.png");
  icone [4] = loadImage ("icone/5.png");
  icone [5] = loadImage ("icone/6.png");
  icone [6] = loadImage ("icone/7.png");

fundo[0] = loadImage("fundo/1.png");
fundo[1] = loadImage("fundo/2.png");
fundo[2] = loadImage("fundo/3.png");
fundo[3] = loadImage("fundo/4.png");
fundo[4] = loadImage("fundo/5.png");
fundo[5] = loadImage("fundo/6.png");
fundo[6] = loadImage("fundo/7.png");
fundo[7] = loadImage("fundo/8.png");
fundo[8] = loadImage("fundo/9.png");
fundo[9] = loadImage("fundo/10.png");
fundo[10] = loadImage("fundo/11.png");
fundo[11] = loadImage("fundo/12.png");
fundo[12] = loadImage("fundo/13.png");
fundo[13] = loadImage("fundo/14.png");
fundo[14] = loadImage("fundo/15.png");
fundo[15] = loadImage("fundo/16.png");
fundo[16] = loadImage("fundo/17.png");
fundo[17] = loadImage("fundo/18.png");
fundo[18] = loadImage("fundo/19.png");
fundo[19] = loadImage("fundo/20.png");
fundo[20] = loadImage("fundo/21.png");
fundo[21] = loadImage("fundo/22.png");
fundo[22] = loadImage("fundo/23.png");
fundo[23] = loadImage("fundo/24.png");
fundo[24] = loadImage("fundo/25.png");
fundo[25] = loadImage("fundo/26.png");





  final [0] = loadImage ("final/1.png");
  final [1] = loadImage ("final/2.png");
  final [2] = loadImage ("final/3.png");
  final [3] = loadImage ("final/4.png");
  final [4] = loadImage ("final/5.png");
  final [5] = loadImage ("final/6.png");
  final [6] = loadImage ("final/7.png");
  final [7] = loadImage ("final/8.png");
  final [8] = loadImage ("final/9.png");
  final [9] = loadImage ("final/10.png");
  final [10] = loadImage ("final/11.png");
  final [11] = loadImage ("final/12.png");
  final [12] = loadImage ("final/13.png");
  final [13] = loadImage ("final/14.png");
  final [14] = loadImage ("final/15.png");
  final [15] = loadImage ("final/16.png");
  final [16] = loadImage ("final/17.png");
  final [17] = loadImage ("final/18.png");
  final [18] = loadImage ("final/19.png");
  final [19] = loadImage ("final/20.png");
  final [20] = loadImage ("final/21.png");
  final [21] = loadImage ("final/22.png");


  
  
  


  fonte = loadFont("fonte/SuperMario256.ttf");
}

function setup() {
  createCanvas(1024, 768);
  frameRate (30);
  son6.setVolume(0.01);
   son6.play();
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function draw() {

  // tela do menu
  if (tela == 1){
  
   createCanvas(1024, 768);
    
    background(fundo[j+16]);
    
   
    // Definindo as cores das bordas
    corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);

  // fantasma
    image(ghost[i], ghostX, 300, 100, 100);
    image(inimigo[i+9], inimX +150, inimY+30 , 75, 75);
    image(inimigo[i+12], inim1X +150, inim1Y -50, 75, 75);
    image(inimigo[i+15], inim2X-50, inim2Y +150, 75, 75);
    image(icone[i],iconex,iconey, 75, 75);
    image(icone[j+3],iconex-100,iconey+50, 75, 75);
    image(inimigo[i], inimX, inimY, 75, 75);
    image(inimigo[i+3], inim1X, inim1Y, 75, 75);
    image(inimigo[i+6], inim2X, inim2Y, 75, 75);
   
     iconex --;
     inimX = inimX-2;
     inim1X = inim1X-3;
     inim2X = inim2X-1;
    

     
if ( inimX < 0){

  inimY = random(80,550);
  inimX = 990;
  }
  
  if ( inim1X < 0 ){
  
  inim1Y = random(80,550);
  inim1X = 999;
  }
  if ( inim2X  < 0){
  
  inim2Y = random(80,550);
  inim2X = 999;
  }
  if ( iconex  < 0){
  
    iconey = random(80,550);
    iconex = 999;
    }
      
     tempo++;
     if (tempo > 6) {
      i++;
      j++;
       tempo = 0;
 }
    if (i === 3) {
         i = 0;
  }
  if (j === 4) {
   j = 0;
}
      


      ghostX = ghostX + 1;
      if (ghostX === 601) {
      ghostX = 0;}

    // Textos dos botões
    stroke(corA, corB, corC);
    strokeWeight(3);
    textSize(28);
    textAlign(CENTER);
    fill(255, 250, 250);
    textFont(fonte);
    text("play", 512, 484);
    text("informacoes", 512, 534);
    text("credito", 512, 584);

    // Textos do menu
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255, 250, 250);
    text("MENU", 512, 384);

    // Definindo as bordas do menu
    noFill();
    stroke(corA, corB, corC);
    strokeWeight(4);
    rect(390, borda, 240, 40, 10);



        // borda dos botoes 
    if (mouseX >= 342 && mouseX <= 650 && mouseY >= 500 &&  mouseY <= 560
    ) { borda = 514;
      
      if (mouseIsPressed){
        tela = 2
        son5.play();
        // informações 
      }
    } else if (  mouseX >= 342 && mouseX <= 650 && mouseY >= 565 && mouseY <= 625
    ) {
      borda = 564;
      if (mouseIsPressed){
        tela = 3 ;
        son5.play();}
        // creditos
    } else if (  mouseX >= 342 && mouseX <= 650 && mouseY >= 435 && mouseY <= 495) {
        borda = 464;
        if (mouseIsPressed){
          tela = 4 ;
          son5.play();}
          // play
    }
   
          
    
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // tela do play 1
  
  else if (tela == 4) {
    corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);
  
    // cenario
    createCanvas(1024, 768);
    background(fundo[j+16]);
  
    // colisao do boneco
  
    //-----inimigo 1
    if (dist(inimX, inimY, movX, movY) < 50) {
      inimX = random(50, 999);
      inimY = random(350, 200);
      tela = 1;
      nivel = 0;
      ponto = 0;
      relg = 0;
      son3.play();
    } else {
      ponto = ponto;
    }
  
    //--------inimigo 3
    if (dist(inim1X, inim1Y, movX, movY) < 50) {
      inim1X = random(100, 999);
      inim1Y = random(350, 200);
      tela = 1;
      nivel = 0;
      ponto = 0;
      relg = 0;
      son3.play();
    } else {
      ponto = ponto;
    }
  
    //-------inimigo 3
    if (dist(inim2X, inim2Y, movX, movY) < 50) {
      inim2X = random(50, 999);
      inim2Y = random(350, 200);
      tela = 1;
      nivel = 0;
      ponto = 0;
      relg = 0;
      son3.play();
    } else {
      ponto = ponto;
    }
  
    if (dist(iconex, iconey, movX, movY) < 50) {
      iconex = random(50, 999);
      iconey = random(350, 200);
      ponto += 100;
      son0.play();
    } else {
      ponto = ponto;
    }
  
    //texto do nivel e pontos
    stroke(corA, corB, corC);
    strokeWeight(3);
    fill(255, 255, 255);
    text("   Nivel:" + nivel + "\n   Pontos:" + ponto, 100, 60);
  
    if (ponto > brnv) {
      nivel = nivel + 1;
      brnv = brnv + 500;
      tela = tela +1;
    }
  
    // texto do relogio:
    relg = relg + 1;
    ts = parseInt(relg / 30);
    text("TIME\n" + tm + ":" + seg + " SEG", 900, 60);
    tm = parseInt(ts / 60);
    seg = ts % 60;
  
    // personagem movimento aleatorio
    image(inimigo[i + 9], inimX, inimY, 75, 75);
    image(inimigo[i + 12], inim1X, inim1Y, 75, 75);
    image(inimigo[i + 15], inim2X, inim2Y, 75, 75);
    image(icone[i], iconex, iconey, 75, 75);
  
    iconex--;
    inimX = inimX - 2;
    inim1X = inim1X - 3;
    inim2X = inim2X - 1;
    inimY = inimY + 5 / 10;
    inim1Y = inim1Y - 5 / 10;
    inim2Y = inim2Y - 5 / 10;
    iconey++;
  
    //--- LIMETE
    if (inimX < 0 || inimY > 550) {
      inimY = random(80, 500);
      inimX = 990;
    }
  
    if (inim1X < 0 || inim1Y > 550) {
      inim1Y = random(80, 500);
      inim1X = 999;
    }
  
    if (inim2X < 0 || inim2Y > 550) {
      inim2Y = random(80, 500);
      inim2X = 999;
    }
  
    if (iconex < 0 || iconey > 550) {
      iconey = random(80, 500);
      iconex = 999;
    }
  
    // imagem em um vetor
    image(mario[i], movX, movY, 75, 75);
  
    // tempo e contador
    tempo++;
    if (tempo > 5) {
      i++;
      j++;
      tempo = 0;
    }
    if (i == 3) {
      i = 0;
    }
    if (j == 4) {
      j = 0;
    }
  
    // gravidade
    movY = movY + 3;
  
    // limite de tela
    if (movX > 990 || movX < 1) {
      movX = 1;
    }
  
    if (movY > 560 || movY < 80) {
      movY = 560;
    }
  
    // controle do personagem
    if (keyIsDown(LEFT_ARROW)) {
      movX -= 5;
      mario = mario2;
    } else {
      mario = mario;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      movX += 5;
      mario = mario1;
    } else {
      mario = mario;
    }
  
    if (keyIsDown(UP_ARROW)) {
      movY -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      movY += 5;
    }
  }
  
  
 
 //-----------------------------------------------------------------------------------------------------------------------------------------------------------------
   else if (tela == 5){

   corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);
    // cenario
    createCanvas(1024, 768);
    background(fundo[j]);

   

   

 // texto  time e ponto
    stroke(corA, corB, corC);
    strokeWeight(3);
    fill(255,255,255)
    textSize(30);
    textFont(fonte);
    text ("   Nivel:" +nivel+"\n   Pontos:"+ponto,50,60);
  
    if ( ponto > brnv){
       nivel = nivel + 1;
        brnv = brnv + 100;
        tela++;
    }
    
    // texto do relogio e sua função logica:
      relg = relg +1;
      ts = parseInt (relg/30);
      text ("TIME\n"+tm+":"+seg+" SEG",850,60);
      tm = parseInt ( ts/60);
      seg = ts%60;
 // colisao do boneco

//-----inimigo 1


if (dist (inimX, inimY,movX, movY,) < 50){
  inimX = random(50,999);
   inimY = random(350,200);
   tela = 1;
   nivel = 0;
   ponto= 0;
   relg =0;
   son3.play();

}else {
    ponto = ponto
}

//--------inimigo 3
if (dist (inim1X, inim1Y,movX, movY,) < 50){

inim1X = random(100,999);
 inim1Y = random(350,200);
 tela = 1;
 nivel = 0;
 ponto= 0;
 relg =0;
 son3.play();

}else {
ponto = ponto

}

//-------inimigo 3
if (dist (inim2X, inim2Y,movX, movY,) < 50){

inim2X = random(50,999);
inim2Y = random(350,200);
tela = 1;
nivel = 0;
ponto= 0;
relg =0;
son3.play();

}else {
ponto = ponto

}
//-------icone
if (dist (iconex, iconey,movX, movY,) < 50){

  iconex = random(50,999);
  iconey= random(350,200);
  son0.play();

  ponto += 100;
  
  }else {
  ponto = ponto
  
  }
for (let obx = 0; obx < 1030; obx += 170) {
  image(fundo[20], obx, 620, 200, 200);
}


// personagem movimento aleatorio
image(icone[j+3],iconex,iconey, 75, 75);
image(inimigo[i], inimX, inimY, 75, 75);
image(inimigo[i+3], inim1X, inim1Y, 75, 75);
image(inimigo[i+6], inim2X, inim2Y, 75, 75);



 inimX = inimX-2;
 inim1X = inim1X-3;
 inim2X = inim2X-1;
 iconex --;
 inimY = inimY+5/10;
 inim1Y = inim1Y-5/10;
 inim2Y = inim2Y-5/10;
 iconey ++;

//--- LIMETE

if ( inimX < 0 || inimY > 550){

inimY = random(80,500);
inimX = 990;
}

if ( inim1X < 0 || inim1Y > 550){

inim1Y = random(80,500);
inim1X = 999;
}
if ( inim2X  < 0 || inim2Y > 550){

inim2Y = random(80,500);
inim2X = 999;
}
if ( iconex  < 0 || iconey > 550){

  iconey = random(80,500);
  iconex = 999;
  }


 // imagem em uma vetor
     image(marionv[i], movX, movY, 75, 75);

 // tempo e contador
  tempo++;
     if (tempo > 6) {
      i++;
      j++;
       tempo = 0;
 }
    if (i === 3) {
         i = 0;
 }
 if (j === 4) {
  j = 0;
}
 // gravidade
     movY = movY + 3;

 // limite de tela
 if (movX > 990 || movX < 1) {
  movX = 1;}

if (movY > 560 || movY < 80 ) {
  movY = 560;
}

 // controle do personagem
 if (keyIsDown(LEFT_ARROW)) {
    movX -= 5;
    marionv = marioNivel2E;
   

  
 } else {
   mario = mario;
 }

 if (keyIsDown(RIGHT_ARROW)) {
   movX += 5;
   marionv = marioNivel2;
 
 } else {
   mario = mario;
 }

 if (keyIsDown(UP_ARROW)) {
   movY -= 5;
   
 }

 if (keyIsDown(DOWN_ARROW)) {
   movY += 5;
   
 }
   

  }
//----------------------------------------------------------------------------------------------------------------------------------------------
  else if (tela == 6){

    
    // cenario
    createCanvas(1100, 800);
    background(fundo[23]);

    corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);

 stroke(corA, corB, corC);
    strokeWeight(3);
    textSize(28);
    textAlign(CENTER);
    fill(255, 250, 250);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255, 250, 250);
    
    text("parabens , final do jogo", 512, 200);

    image(fundo[25],1,-250,1100,1100);

   image(final[i+6],1000 ,640, 100, 100);
   image(final[i+3],450, finaly, 100, 100);
   image(final[i+10],920,640, 100, 100);
   image(final[i+16],530, finaly, 100, 100);
   image(final[i+13],660,finaly, 100, 100);
   image(final[i],320, finaly, 100, 100);
   image(final[i+16],240, finaly, 100, 100);
   image(final[i+19],10, 640, 100, 100);

  


   // tempo e contador
  tempo++;
  if (tempo > 6) {
   i++;
   j++;
   finaly -=20;
    tempo = 0;
}
 if (i === 3) {
      i = 0;
}
if (j === 4) {
j = 0;
  
}
if (finaly < 620) {
  finaly = 640
    
  }
    
  }

  //------------------------------------------------------------------------------------------------------------------
  //tela 3 informações*/
  else if (tela == 2){
    createCanvas(1024, 900);
    background(fundo [j+8]);
    corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);

        stroke(corA, corB, corC);
        strokeWeight(3);
        textSize(21);
        textAlign(CENTER);
        fill(0,0,0);
        textFont(fonte);
        text( "CONTROLE DO JOGO ",550,100 );
        text(
          "↑ O botao para cima do teclado faz o boneco se mover para cima.\n" +
          "\n" +
          "↓ O botao para baixo do teclado faz o boneco se mover para baixo.\n" +
          "\n" +
          "← O botao para a esquerda do teclado faz o boneco se mover para a esquerda. \n" +
          "\n" +
          "→ O botao para a direita do teclado faz o boneco se mover para a direita.\n" +"\n"+
          "O BOTAO ESC FAZ VOLTA AO MENU \n"+"\n",500,300);
  
        image(botaoAC [i] ,500, 640, 50 +tempo ,50 +tempo);
        image(botaoBA[i],500, 760,50 +tempo ,50 +tempo );
        image(botaoDI[i],440, 700,50 +tempo ,50 +tempo);
        image(botaoES [i],560,700,50 +tempo ,50 +tempo);
        image(botaoESC [i],350,700,50 +tempo ,50 +tempo);
     
        tempo++
          
        
        if (tempo >9){
          i ++;
          j ++;
            tempo = 0;
        if (i > 2 ){
             i = 0
              }
              if (j > 3 ){
                j = 0
                 }} 
        
        noFill();
        rect(500, 640, 50 +tempo ,50 +tempo);
        rect(500, 760, 50 +tempo ,50 +tempo);
        rect(440, 700, 50 +tempo ,50 +tempo);
        rect(560, 700, 50 +tempo ,50 +tempo);
        rect(350, 700, 50 +tempo ,50 +tempo);
  }
  else if (tela == 3 ){

    corA = random(100, 173);
    corB = random(149, 213);
    corC = random(237, 255);
  
    createCanvas(1000, 900);
     background(cena);
      stroke(corA, corB, corC);
      strokeWeight(3);
      textSize(30);
      textAlign(CENTER);
      fill(250, 250, 250);
      textFont(fonte);
      text("  CREDITOS  ", 500, tx1);
      textSize(20);
      text("Diretor:\n\n" +
        " ALAN FERNANDES XAVIER 5D\n\n" +
        "Roteirista:\n\n" +
        " ALAN FERNANDES XAVIER 5D\n\n" +
        "Equipe de Producaoo:\n\n" +
        " ALAN FERNANDES XAVIER 5D \n\n" +
        "Trilha Sonora:\n\n" +
        "ALAN FERNANDES XAVIER 5D \n\n ",500,tx2)

       
        
        if (tx1 > -450){
        tx1--;
      }else {
        tx1 = 1000;
      }
        if (tx2 > -350){
        tx2 --;
      }else {
        tx2 = 1100;
      }
    
  }
  // if para voltar ao menu

  if (keyIsPressed && key === 'Escape') {
    tela = 1;
    nivel = 0;
    ponto = 0;
    relg = 0;

   
  }}