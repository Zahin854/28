class stone {
    constructor(x, y,r) {
      var options = {
       isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.x=x
      this.y=y
      this.r=r
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.image=loadImage("images/stone.png")
      
      World.add(world, this.body);
    }
  }