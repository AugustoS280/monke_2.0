class Inimigo{
    constructor(x,y){
        this.x = x
        this.y = y
        this.body = createSprite(x,y, 20,20)
    }

    update(){
        let pos = this.body.position
        pos.x = this.x
        pos.y = this.y
    }

    perseguir(){
        let pos = this.body.position
        let distancia = dist(pos.x, pos.y, monke.x, monke.y)
        //let pos = this.body.position
        let MX = monke.position.x
        let MY = monke.position.y
        if(distancia <= 100){
            if(MX>pos.x){
                this.body.velocityX = 10
            }
            if(MX<pos.x){
                this.body.velocityX = -10
            }
            if(MY>pos.y){
                this.body.velocityY = 10
            }
            if(MY<pos.y){
                this.body.velocityY = -10
            }
            
        }
        if(distancia == 0){
            gamestate =2
        }
    }
}