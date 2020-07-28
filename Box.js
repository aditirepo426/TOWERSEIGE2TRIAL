class Box {
    constructor(x,y,width,height){
    var options = {
        isStatic:false,
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.Visibility = 255;
} 
display(){

    if(this.body.speed < 3){
    push();
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }  else  {
    
    World.remove(world, this.body);
    push();
    this.Visibility = this.Visibility - 5;
    tint(255,this.Visibility);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
}
}
};