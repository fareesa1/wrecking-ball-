class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':2.0,
          'density':1.0
      }
      
      this.radius = radius
      this.body = Bodies.circle(x, y, radius, options);
      
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  