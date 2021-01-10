class Paper{
    constructor(){
      var options ={
          restitution:0,
          friction:0,
          density:1.2
      }
      this.body = Bodies.circle(250,540,20,options)
      this.width=33;
      this.image=loadImage("images/image.png");
      World.add(world, this.body);

    }
    display(){
        var pos = this.body.positions;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        fill(255,255,255,0.5);
        rect(this.image,pos.x,pos.y,33,33);


    }
}