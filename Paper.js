class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        this.r=10;
       World.add(world,this.body);
       this.pimage=loadImage("paper.png");
    }
    display(){
        
        image(this.pimage,this.body.position.x-10,this.body.position.y-15,this.r+20,this.r+20);

        
    }
}