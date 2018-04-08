/*float x: flower center x coordinate
  float y: flower center y coordinate
  float diameter: flower orange circle diameter*/
function drawRose(var x, var y, var diameter){
  translate(x, y);
  stroke(42, 116, 32);
  strokeWeight(25);
  curve(-100, 0, 0, diameter / 2, 0, diameter * 2, -400, diameter * 2 + 50); 
  stroke(0);
  strokeWeight(5);
  fill(222, 11, 15);
  for(var i = 0; i < 6; i++) {
    arc(-(diameter / 2) * 0.5, 0, (diameter / 2) * sqrt(3), (diameter / 2) * sqrt(3), radians(90), radians(270));
    rotate(radians(60));
  }
  fill(245, 95, 25);
  for (var i = 0; i < 6; i++) {
    arc(0, -((diameter / 2) * sqrt(3) * 0.5), diameter / 2, diameter / 2, radians(180), radians(360));
    rotate(radians(60));
  }
  fill(255, 128, 0);
  ellipseMode(CENTER);
  ellipse(0, 0, diameter, diameter);
  fill(232, 94, 96);
  rectMode(CENTER);
  var rectwid= diameter / sqrt(2);
  for (var i = 0; i < 7; i++) {
    rect(0, 0, rectwid, rectwid);
    rectwid = (rectwid / 2) * sqrt(2);
    rotate(radians(45));
  }
  rotate(radians(45));
  fill(84, 178, 70);
  var x1 = 47;
  var y1 = diameter + diameter / 3;
  var x2 = diameter / 6 + diameter / 2;
  var y2 = diameter + diameter / 80;
  var x3 = diameter / 6 + diameter / 1.1;
  var y3 = diameter + diameter / 10;
  var x4 = diameter / 6 + diameter / 1.5;
  var y4 = diameter + diameter / 2.5;
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  line(x1, y1, x3, y3);
  translate(-x, -y);
}
function drawOveractionbabybear(var x, var y)
{
   strokeWeight(2);
  
   //body
   fill(255);
   bezier(x-10, y+25, x-30, y+60, x-35, y+80, x-10, y+125);
   bezier(x+36, y+25, x+56, y+60, x+58, y+80, x+36, y+125);
   noStroke();
   rect(x-10, y+25, 46, 80);
   quad(x-10, y+105 ,x-10, y+125, x+8, y+125, x+5, y+105);
   quad(x+18, y+125, x+21, y+105, x+36, y+105, x+36, y+125);
  
   //leg
   stroke(0);
   line(x-10, y+125, x+8, y+125);
   line(x+36, y+125, x+18, y+125);
   line(x+8, y+125, x+5, y+105);
   line(x+18, y+125, x+21, y+105);
   line(x+5, y+105, x+21, y+105);
  
   //arm1
   bezier(x-15, y+35, x-40, y+20, x-70, y+40, x-15, y+70);
  
   //arm2
   bezier(x+41, y+35, x+63, y+20, x+93, y+40, x+41, y+70);
   //head
  
   fill(255);
   ellipse(x+13, y+7, 80, 80);
  
   //flush1
   stroke(247,217,240);
   fill(247,217,240);
   ellipse(x-5, y+8, 14, 12);
  
   //flush2
   stroke(247,217,240);
   fill(247,217,240);
   ellipse(x+31, y+8, 14, 12);
  
   //ear1
   stroke(0);
   fill(255);
   arc(x-13, y-20, 25, 27, PI/2+PI/4, 2*PI-PI/6);
  
   //ear2
   fill(255);
   arc(x+39, y-20, 25, 27, PI+PI/4, 2*PI+PI/4);
  
  
   //eye and mouth
   fill(0);
   ellipse(x, y, 2, 2);
   ellipse(x+26, y, 2, 2);
   triangle(x+4, y+6, x+22, y+6, x+13, y+18);
  
}
function drawOlaf(var x,var y, var a, var b){
  //arm
  fill(185,122,87);
  rectMode(CENTER);
  ellipseMode(CENTER);

  rect(x+65,y,a-77,b-10);
  rect(x-15,y+60,a+10,b-97);
  rect(x+70,y-25,a-65,b-97);
  rect(x-50,y+52,a-77,b-85);
  rect(x-41,y+65,a-77,b-87);

  //body
  fill(218,218,218);
  ellipse(x,y,a,b);//220,200,80,100
  ellipse(x+40,y+60,a-5,b-30);
  ellipse(x+35,y+125,a+20,b-10);
  ellipse(x-13,y+170,a-35,b-60);
  ellipse(x+60,y+180,a-35,b-60);

  //button
  fill(0);
  ellipse(x+40,y+65,a-65,b-85);
  ellipse(x+35,y+110,a-65,b-85);
  ellipse(x+30,y+140,a-63,b-85);
//eye
  fill(255);
  ellipse(x-20,y-10,a-63,b-80);
  ellipse(x+8,y-20,a-63,b-80);
  fill(0);
  ellipse(x-20,y-8,a-75,b-95);
  ellipse(x+8,y-18,a-75,b-95);
  fill(255);
  ellipse(x-19,y-9,a-77,b-97);
  ellipse(x+9,y-19,a-77,b-97);

  //nose
  fill(255,103,2);
  triangle(x-15,y-5,x-30,y+10,x,y);
 
  //mouth
  fill(97,97,97);
  triangle(x-20,y+20,x+20,y,x,y+35);
}
function drawCloud(var x,var y,var z,var w,var k)
{
  noStroke();
  fill(k);
  ellipse(x,y,z,z);
  ellipse(x-w,y,0.8*z,0.8*z);
  ellipse(x+w,y,0.8*z,0.8*z);
}
function drawManbo(var x, var y, var size){ 
/* x= x position
   y= y position
   size= size
   */
  strokeWeight(size*0.007);
 
  //ear
  fill(0,100,105);
  arc(x-size*0.2,y-size*0.6,size*0.3,size*0.24,radians(274.4),radians(339));
  arc(x+size*0.2,y-size*0.6,size*0.3,size*0.24,radians(201),radians(265.8));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(172.5),radians(210));
  arc(x,y-size*0.62,size*0.45,size*0.4,radians(330.5),radians(367.5));
 
  //arm
  ellipse(x,y+size*0.04,size*1.16,size*0.4);
  arc(x,y+size*0.2,size*1.22,size*1.15,radians(200),radians(340));
 
  //head
ellipse(x,y-0.48*size,size*0.55,size*0.4);
//face
  noStroke();
  fill(255,245,220);
  ellipse(x, y-0.42*size,size*0.40,size*0.30);
  fill(0,100,105);
  arc(x,y-0.65*size,size*0.2,size*0.2,radians(20),radians(160));
 
  //eye
 strokeWeight(size*0.007);
 stroke(0);
 line(x-size*0.15,y-size*0.495,x-size*0.07,y-size*0.505);
 line(x+size*0.15,y-size*0.495,x+size*0.07,y-size*0.505);
 
 //tooth
 noFill();
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(189),radians(210));
 arc(x-size*0.102,y-0.45*size,size*0.13,size*0.1,radians(330),radians(350));
 arc(x,y-0.45*size,size*0.12,size*0.1,radians(330),radians(351));
 arc(x+size*0.102,y-0.45*size,size*0.13,size*0.1,radians(190),radians(210));
 
 //mouse
 arc(x,y,size,size*0.92,radians(263),radians(277));
 
  //body
  stroke(0);
  fill(0,100,105);
ellipse(x,y-size*0.02, size*0.98,size*0.75);
  //Bae?
  strokeWeight(size*0.007);
  fill(255,245,220);
  arc(x,y, size,size*0.79,radians(230), radians(310));
  arc(x,y-size*0.353,size,size*0.9,radians(48),radians(133));
  arc(x-size*0.11,y-size*0.105,size*0.9,size*1.2,radians(340.8),radians(368));
  arc(x+size*0.105,y-size*0.105,size*0.9,size*1.2,radians(172),radians(199)); 
  fill(0,100,105);
  arc(x,y+0.15*size,size*0.5,size*0.25,radians(222),radians(318));
  noStroke();
  arc(x,y+0.15*size,size*0.5-size*0.007,size*0.25-size*0.007,radians(180),radians(360));
  ellipse(x,y+0.15*size,size*0.3,size*0.2);
  //foot 
  stroke(0);
  fill(255,245,220);
  ellipse(x-size*0.29,y+size*0.3,size*0.38,size*0.3);
  ellipse(x+size*0.29,y+size*0.3,size*0.38,size*0.3);
  fill(170,117,87);
  ellipse(x-size*0.29,y+size*0.3,size*0.18,size*0.13);
  ellipse(x+size*0.29,y+size*0.3,size*0.18,size*0.13);
  
  //lettering?
  strokeWeight(size*0.013);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.48);
  line(x-size*0.45,y-size*0.48,x-size*0.38,y-size*0.55);
  line(x-size*0.45,y-size*0.55,x-size*0.38,y-size*0.55);
  line(x-size*0.44,y-size*0.51,x-size*0.40,y-size*0.51);
  strokeWeight(size*0.01);
  line(x-size*0.4,y-size*0.44,x-size*0.35,y-size*0.46);
  line(x-size*0.35,y-size*0.46,x-size*0.37,y-size*0.4);
  line(x-size*0.37,y-size*0.4,x-size*0.33,y-size*0.42);
  line(x-size*0.38,y-size*0.43,x-size*0.34,y-size*0.44);
}
function drawFrog(var x, var y, var size) {  
  noStroke();

  /*head*/
  fill(53, 182, 44);
  ellipse(x, y-size/4.8, size/1.25, size/1.5); 
  ellipse(x-size/4.8, y-size/2, size/4, size/4); 
  ellipse(x+size/4.8, y-size/2, size/4, size/4); 

  /*body*/
  ellipse(x, y+size/4, size, size); 
  fill(109, 200, 59);
  ellipse(x, y+size/3.7, size/1.6, size/1.5);

  /*legs*/
 fill(53, 182, 44);
  bezier(x+size/2.4, y+size/80, x+size/1.1, y-size/12, x+size/1.85, y+size/1.5, x+size/2.4, y+size/1.5);
  bezier(x-size/2.4, y+size/80, x-size/1.1, y-size/12, x-size/1.85, y+size/1.5, x-size/2.4, y+size/1.5);
  rect(x+size/3, y+size/2, size/3, size/4.8, 100);
  rect(x-size/1.55, y+size/2, size/3, size/4.8, 100);

/*eyes*/
  fill(255); 
  ellipse(x-size/4.8, y-size/2, size/6, size/6); 
  ellipse(x+size/4.8, y-size/2, size/6, size/6); 

  fill(0); 
  ellipse(x-size/4.8, y-size/2, size/8, size/8); 
  ellipse(x+size/4.8, y-size/2, size/8, size/8);   

  ellipse(x-size/24, y-size/2.7, size/40, size/40); 
  ellipse(x+size/24, y-size/2.7, size/40, size/40); 

  fill(255); 
  ellipse(x-size/5.3, y-size/1.9, size/40, size/40); 
  ellipse(x+size/5.3, y-size/1.9, size/40, size/40); 

  /*cheek*/
  fill(200, 0, 0); 
  ellipse(x-size/4, y-size/3.9, size/4, size/4); 
  ellipse(x+size/4, y-size/3.9, size/4, size/4);

  /*mouth*/
  noFill();
  stroke(0);
  strokeWeight(size/55);
  arc(x, y-size/3.5, size/3, size/4, 0, PI);
}
function drawRabbit(var x, var y, var size, var height) {
//face
  stroke(255,200,200);
  fill(255, 200, 200); 
  ellipse(x, y, size, height);
  fill(0);
  ellipse(x-20, y-5, size/8, height/8);
  ellipse(x+20, y-5, size/8, height/8);
  triangle(x, y+15, x-10, y+5, x+10, y+5);
//ear
  fill(255, 200, 200);
  ellipse(x-25, y-50, size/8*3, height/8*7);
  fill(255, 200, 200);
  ellipse(x+25, y-50, size/8*3, height/8*7);
  fill(255);
  ellipse(x-25, y-50, size/8, height/8*5);
  ellipse(x+25, y-50, size/8, height/8*5); 
//body
  fill(255, 200, 200);
  ellipse(x, y+95, size/8*9, height/8*13);
  fill(255);
  arc(x, y+100, size/8*7, height/8*9, 0, radians(180));
//arm
  fill(255, 200, 200);
  ellipse(x+40, y+60, size/8*6, height/4);
  ellipse(x-40, y+60, size/8*6, height/4);
  fill(255);
  ellipse(x-70, y+60, size/4, height/16*5);
  ellipse(x+70, y+60, size/4, height/16*5);
//feet
  fill(255);
  ellipse(x-35, y+160, size/16*9, height/16*5);
  ellipse(x+35, y+160, size/16*9, height/16*5);
//ribbon
  fill(255, 0, 0);
  triangle(x, y+40, x-20, y+30, x-20, y+50);
  triangle(x, y+40, x+20, y+30, x+20, y+50);
  fill(255, 150, 150);
  ellipse(x, y+40, size/8, height/8);
}
function btropg(var x, var y, var h, var s) {

  x= x*(1/s);
  y= y*(1/s);
  scale(s);
  var hy = y-(h*5);
  //foot...?
  stroke(0);
  strokeWeight(0.5);
  fill(#FA9714);
  triangle(x, y, x+10, y+10, x-10, y+10);
  triangle(x, y, x+17, y+5, x+10, y+10);
  triangle(x, y, x-17, y+5, x-10, y+10);

  quad(x+10, y+10, x-10, y+10, x-15, y+20, x+15, y+20);
  quad(x-10, y+10, x-15, y+20, x-25, y+15, x-17, y+5);
  quad(x+10, y+10, x+15, y+20, x+25, y+15, x+17, y+5);

  strokeWeight(2);
  stroke(0);
  line(x-5, y+1, x-40, y-10);
  line(x-40, y-10, x-50, y+40);

  line(x-5, y+2, x-20, y+10);
  line(x-20, y+10, x-30, y+50);

  line(x+5, y+2, x+20, y+10);
  line(x+20, y+10, x+30, y+50);
 line(x+5, y+1, x+40, y-10);
  line(x+40, y-10, x+50, y+40);

  //body
  strokeWeight(0.3);
  stroke(0);
  for (var i =1; i<=h; i++ ) {
    fill(150);
    ellipse(x, y-(i*5), 30, 13);
  }

  //head
  fill(#E39C40);
  triangle(x, hy, x, hy-10, x-30, hy-20);
  fill(#FFC271);
  triangle(x, hy, x+30, hy-20, x, hy-10);//buttom

  fill(#F7AD4B);
  triangle(x, hy-10, x+30, hy-20, x+20, hy-70);
  fill(#E3A049);
  triangle(x, hy-10, x-30, hy-20, x-20, hy-70);
  fill(#FF9E1F);
  triangle(x, hy-10, x-20, hy-70, x+20, hy-70);//middle middle
  fill(#E39C40);
  triangle(x-30, hy-20, x-30, hy-75, x-20, hy-70);
  fill(#FFC271);
  triangle(x+30, hy-20, x+30, hy-75, x+20, hy-70);//side middle

  fill(#E39C40);
  triangle(x, hy-95, x-20, hy-70, x+20, hy-70);
  triangle(x, hy-95, x-30, hy-75, x-20, hy-70);
  triangle(x, hy-95, x+30, hy-75, x+20, hy-70);//top


  stroke(#FA9714);
  strokeWeight(2);
  line(x+15, hy, x+30, hy+30);
  line(x+12, hy+5, x+20, hy+40);
  line(x-12, hy+5, x-20, hy+40);
  line(x-15, hy, x-30, hy+30);
}

function setup() {
  createCanvas(900, 1000);
 }

function drae() {
  background(255);
  drawRose(500, 300, 300);
  drawOveractionbabybear(700,500);
  drawOlaf(180,700,80,100);
  drawCloud(180,150,150,80,230);
  drawManbo(210,100,100);
  drawFrog(width/2 - 200, height/2 + 130, 50);
  drawRabbit(410, 730, 100, 95);
  btropg(630, 850, 1, 1);
}
