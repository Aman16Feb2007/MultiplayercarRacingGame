class Game{
    constructor(){
    }

    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
        
    }

    update(state){
        database.ref('/').update({
            'gameState' : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        C1 = createSprite(100,200,20,20);
        C2 = createSprite(200,200,20,20);
        C3 = createSprite(300,200,20,20);
        C4 = createSprite(400,200,20,20);

        C1.addImage(car1Img);
        C2.addImage(car2Img);
        C3.addImage(car3Img);
        C4.addImage(car4Img);

        cars = [C1, C2, C3, C4];


    }

    play(){
        form.hide();
        /*textSize(30);
        text(" GAME STARTS ",120,100);*/

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background(rgb(68, 68, 68));

            image(trackImg, 0, -displayHeight*4 , displayWidth , displayHeight*5);
            var index = 0;
            var x = 190;
            var y;
            for(var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                
                cars[index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                   fill("red");
                   ellipseMode(RADIUS); 
                   ellipse(x,y,40,40);
                   camera.position.x = displayWidth/2;
                   camera.position.y =  cars[index-1].y;
                   cars[index-1].shapeColor = "red";
                }




            }
        }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance+=50
        player.update();
    }

    if(player.distance>3800){
        gameState = 2;
    }






    drawSprites();
    }

    end(){
        console.log("GAME END");



    }



}