class Polygon {
    constructor (x,y,radius){

        var options = {
            isStatic: false
        }

        this.body =Bodies.circle(x,y,radius,options);
        this.radius = this.radius;
        World.add(world ,this.body);
        }

    display(){
     
        var pos = this.body.position;
        rectMode(CENTER);
        fill(68, 16, 209)
        rect(pos.x,pos.y,this.width,this.height);
        
        
    }
    }