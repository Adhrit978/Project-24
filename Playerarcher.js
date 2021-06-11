class Playerarcher {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.image=loadImage("playerArcher.png")
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);

        Matter.Body.setAngle(this.body, -PI/2);
    }

    display() {
        var pos=this.body.position
        var angle=this.body.angle

        if (keyIsDown(DOWN_ARROW) && angle<-PI/2+0.35) {
            angle+=0.01
            Matter.Body.setAngle(this.body, angle);
        }

        if (keyIsDown(UP_ARROW) && angle>-PI/2-0.3) {
            angle-=0.01
            Matter.Body.setAngle(this.body, angle);
        }
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}