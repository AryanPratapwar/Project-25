class Dustbin{
    constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y-20, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2-20, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		this.binimage=loadImage("dustbingreen.png");

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2-20, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			image(this.binimage,posBottom.x-100,posBottom.y-110,200,100)

			fill(180);
			stroke(180);
            rectMode(CENTER)
			push()
			translate(posLeft.x, posLeft.y);
		
		 	 	
		 
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

            push()
			translate(posRight.x, posRight.y);
	 
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
		 
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}