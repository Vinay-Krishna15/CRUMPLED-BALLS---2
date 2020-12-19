class Box {
    constructor(x, y, width, height) {
     
    this.body = Bodies.rectangle(x, y, width, height);
     this.width = width   
     this.height = height   
     this.image=loadImage("bin.png");
     World.add(world, this.body);
   // this.body = bodies.rectangle(750,200,20,200);
    }
    display(){
        var pos =this.body.position;
        //var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        //rotate(angle)
        //rectMode(CENTER);
        //imageMode(CENTER);
        image(this.image,0,0,this.width,this.height );
        fill("white");
        rect(0,0, this.width, this.height);
        pop();
}
}