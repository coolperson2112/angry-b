class Cool{
    constructor(bodyA,bodyB){
        var options = {bodyA:bodyA,bodyB:bodyB,stiffness:1,length:20}
        this.chain = Matter.Constraint.create(options)
        this.a = bodyA
        this.b = bodyB
        World.add(world,this.chain)
    }
    display(){
        var a = this.chain.bodyA.position
        var b = this.chain.bodyB.position
        line(a.x,a.y,b.x,b.y)
    }
}