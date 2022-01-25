var name1,name2;
function setup() {
  createCanvas(400,400);
  name1 = new Student("Prateek",9,95)
  name2 = new Student("Ayush",9,95);
  name1.display();
  name2.display();
}

function draw() 
{
  background(30);
  
}