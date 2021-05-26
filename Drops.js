class Drops {
    constructor(x, y, radius) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.rain =Bodies.circle(x,y,5,options);
        this.radius =radius;
        
        
        World.add(world, this.body);
      
      }


      update(){     
           if(this.body.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }


      display(){
            
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y-70);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill(255);
        ellipseMode(0,0,this.radius,this.radius);
        pop();
        
      }
    }
