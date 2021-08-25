class CONSTRAINT{
    constructor(a,b){
     var options={
      bodyA:a,
      pointB:b,
      length:30,
      stiffness:0.4, 
     }
     
    this.glue=Matter.Constraint.create(options);
    this.image=loadImage("sprites/sling1.png");
    this.image2=loadImage("sprites/sling2.png");
    this.image3=loadImage("sprites/sling3.png");
    World.add(world,this.glue);
    this.pointb=b;

    }

     fly(){
        this.glue.bodyA=null;
     }
     attach(abc){
        this.glue.bodyA=abc;
     }


    display(){
        image(this.image,200,25);
        image(this.image2,170,25);
        if(this.glue.bodyA){
            push()
            strokeWeight(5);
            stroke(48,22,8);
            line(this.glue.bodyA.position.x-20,this.glue.bodyA.position.y,
                this.pointb.x-20,this.pointb.y+20);

                line(this.glue.bodyA.position.x-20,this.glue.bodyA.position.y,
                    this.pointb.x+25,this.pointb.y);
                    image(this.image3,this.glue.bodyA.position.x-30,
                            this.glue.bodyA.position.y-10,15,30);
            pop();     
        }
    }

}