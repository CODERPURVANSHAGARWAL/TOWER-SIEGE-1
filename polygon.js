  
class polygon {

    constructor(x,y,width,height) {

        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world,this.polygon);

    }

    display() {

        var angle = this.polygon.angle;
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,this.polygon.position.x,this.polygon.position.y,40,40);
        pop();

    }
}