class Block{
    constructor(x, y, width, height) {
        var options = {
        restitution: 1.0, 
        friction: 0.0            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image= loadImage("block.png")
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed <3){// if(this.body.speed <3){ ele seleciona a velocidade do corpo.
          //para remover o porco da tela, a velocidade tem que ser maior que 3.
          
          imageMode(CENTER);
          image(this.image, pos.x, pos.y, this.width, this.height);

        }
          // esse ELSE remove o porco da tela ao passáro encostar nele.
          else{
          World.remove(world, this.body);
          push();
          //Visibility serve para aparecer e sumir da tela.
          // se remover -5 a cada quadro a do visibilidade o objeto selecionado desaparede da tela.
          this.Visibility = this.Visibility -5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width,this.height);
          pop();
        }
      }
}
