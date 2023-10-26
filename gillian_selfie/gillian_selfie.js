function setup() {
 createCanvas(600, 600); 
}

function draw() {
background(248, 200, 220);
ellipse(300, 300, 225, 275); //face
  fill (237, 226, 218); //eye base color
strokeWeight(0); // eye outline
ellipse(255, 288, 50, 50);//outline of right eye
ellipse(350, 288, 50, 50);// outline of left eye
strokeWeight(0); // for everything
  fill (23, 18, 15); //iris color
ellipse(255, 285, 35, 45); // right iris
ellipse(350, 285, 35, 45); // left iris
  fill (217, 215, 215); // lower highlight color
ellipse(263, 275, 10, 10); // right eye highlight
ellipse(358, 275, 10, 10); // left eye highlight
strokeWeight(0); // eye outline
  fill (140, 108, 90)// highlight color
ellipse(255, 295, 30, 20); // right big eye highlight
ellipse(350, 295, 30, 20); // left big eye highlight
    fill (18, 17, 16)// color for pupil
ellipse(255, 285, 15, 25);//outline of right pupil
ellipse(350, 285, 15, 25);// outline of left pupil
  fill (242, 203, 174); //skin color
ellipse(250, 280, 5, 5); // right tiny eye highlight
ellipse(345, 280, 5, 5); // left tiny eye highlight
  rect(230, 310, 150, 13); // coverup
strokeWeight(1); // coverup outline
line(235, 250, 265, 245)
line(335, 245, 365, 250)
}
