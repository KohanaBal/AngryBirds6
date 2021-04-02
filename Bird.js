class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png"); 
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x >10 &&  this.body.position.x >210){
      //Stores x and y values of bird in position variable
      var position = [this.body.position.x, this.body.position.y];  // [23,65]

      //Stores all the positions of bird whereever it moves
      this.trajectory.push(position); //[[23,65] , [66,64] , [ 354, 54]]
    }

    for(var i=0 ; i< this.trajectory.length ; i++){
      image(this.smokeImg, this.trajectory[i][0] , this.trajectory[i][1])
    }
  }
}
