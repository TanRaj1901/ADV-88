var canvas = new fabric.Canvas('myCanvas');
var img_width = 30;
var img_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(player_object);

    })
}

function new_images(get_image) {
    fabric.Image.fromURL(get_image , function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(140);
        block_image_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(block_image_object);

    })
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true) {
        console.log("Shift");
        img_width = img_width + 10;
        img_height = img_height + 10;
        document.getElementById("current_width").innerHTML=img_width;
        document.getElementById("current_height").innerHTML=img_height;
    }

    if (e.shiftKey == true && keyPressed == '2D') {
        console.log("Shift and - pressed together");
        img_width = block_width - 10;
        img_height = block_height - 10;
        document.getElementById("current_width").innerHTML=img_width;
        document.getElementById("current_height").innerHTML=img_height;
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }


    if (keyPressed == '70') {
        new_images('spiderman_face.png');
        console.log("f");
    }
    if (keyPressed == '66') {
        new_images('ironman_body.png');
        console.log("b");
    }
    if (keyPressed == '76') {
        new_images('hulk_legs.png');
        console.log("l");
    }
    if (keyPressed == '82') {
        new_images('thor_right_hand.png');
        console.log("rh");
    }
    if (keyPressed == '72') {
        new_images('captain_america_left_hand.png');
        console.log("lh");
    }
}

function up() {

    if (player_y >= 0);
    {
        player_y = player_y - img_height;
        console.log("Character height = " + img_height);
        console.log("When up arrow key pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {

    if (player_y <= 500);
    {
        player_y = player_y + img_height;
        console.log("Character height = " + img_height);
        console.log("When down arrow key pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {

    if (player_x >= 0);
    {
        player_x = player_x - img_width;
        console.log("Character width = " + img_width);
        console.log("When up left key pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {

    if (player_x <= 700);
    {
        player_x = player_x + img_width;
        console.log("Character width = " + img_width);
        console.log("When up right key pressed, x = " + player_x + " , y = " + player_y);
        canvas.remove(player_object);
        player_update()
    }
}
