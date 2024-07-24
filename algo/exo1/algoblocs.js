/*
// A1
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
forward(200);
faceRight();
forward(100);


// A2
// Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceLeft();

// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


//A3
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceLeft();

// Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);


//A4
// Initialisation
setPos(200,450);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
forward(200);
arcLeft(100,180);
forward(100);
arcRight(100,180);
forward(200);


//A5
// Initialisation
setPos(300,100);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
arcRight(200,350);
arcRight(100,180);
arcLeft(100,180);


//A6
// Initialisation
setPos(300,400);
changeColor(color.aqua);
setLineWidth(10);
faceUp();

// Réalisation
forward(100);
up();
forward(100);
down();
forward(200);


//A7
// Initialisation
setPos(200,300);
changeColor(color.green);
setLineWidth(10);
faceDown();

// Réalisation
forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);


//A8
// Initialisation
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();

// Réalisation
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);


//A9
// Initialisation
setPos(100,500);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
arcLeft(100,180);
arcRight(100,180);
forward(400);
arcRight(100,180);
arcLeft(100,180);
faceLeft();
forward(400);


//A10
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
arcLeft(100,180);
changeColor(color.green);
arcLeft(200,180);
changeColor(color.yellow);
arcLeft(400,180);


//A11
// Initialisation
setPos(50,200);
changeColor(color.blue);
setLineWidth(10);
faceUp();

// Réalisation
arcRight(100,180);
up();
arcLeft(50,180);
down();
arcRight(100,180);
up();
forward(100);
faceLeft();
forward(50);
faceDown();
down();
changeColor(color.fuchsia);
arcRight(200,180);


//A12
// Initialisation
setPos(10,300);
changeColor(color.green);
setLineWidth(10);
faceUp();

// Réalisation
arcRight(100,180);
faceDown();
forward(200);
arcLeft(100,180);
up();
arcRight(50,180);
down();
changeColor(color.red);
arcLeft(100,180);
forward(200);
arcRight(100,180);


//B1
// Initialisation
setPos(100,100);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//B2
// Initialisation
setPos(10,300);
changeColor(color.red);
setLineWidth(10);
faceUp();

// Réalisation
for(let i=0; i<4; i++){
    forward(100);
    faceRight();
    forward(100);
    faceDown();
    forward(100);
    faceRight();
    forward(100);
    faceUp();
}


//B3
// Initialisation
setPos(100,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(200);
    right(90);
}


//B4
// Initialisation
setPos(100,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    forward(200);
    left(180-60);
}


//B5
// Initialisation
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceUp();

// Réalisation
forward(200);
changeColor(color.red);
for(let i=0; i<3; i++){
    forward(100);
    right(180-60);
}


//B6
// Initialisation
setPos(100,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<2; i++){
    forward(100);
    faceUp();
    forward(100);
    faceRight();
}
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


// B7
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(200);
    right(90);
}
for(let i=0; i<3; i++){
    forward(200);
    left(180-60);
}


// B8
// Initialisation
setPos(100,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(400);
    right(180-45);
}


// B9
// Initialisation
setPos(100,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
forward(100);
up();
forward(100);
down();
for(let i=0; i<3; i++){
    forward(200);
    right(180-60);
}


// B10
// Initialisation
setPos(10,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(200);
    right(180-45);
}
up();
forward(400);
down();
changeColor(color.yellow);
for(let i=0; i<8; i++){
    forward(400);
    left(180-45);
}
up();
right(90)
forward(200);
down();
changeColor(color.fuchsia);
for(let i=0; i<8; i++){
    forward(200);
    right(180-45);
}


// B11
// Initialisation
setPos(100,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<10; i++){
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100);
    right(90);
}


// B12
// Initialisation
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    right(90);
    forward(100);
}
up();
forward(100);
down();
changeColor(color.green);
for(let i=0; i<3; i++){
    forward(100);
    right(90);
}


// B13
// Initialisation
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(100);
    left(180-45);
    for(let j=0; j<2; j++){
        forward(50);
        right(90);
    }
}


// B14
// Initialisation
setPos(100,10);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
forward(100);
right(180-60);
for(let i=0; i<5; i++){
    forward(200);
    left(180-60);
    forward(200);
    right(180-60);
}


// B15
// Initialisation
setPos(200,500);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(200);
    arcLeft(100,90);
}


// B16
// Initialisation
setPos(100,500);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
arcLeft(400,90);
faceLeft();
for(let i=0; i<4; i++){
    arcLeft(50,90);
    arcRight(50,90);
}


// B17
// Initialisation
setPos(100,300);
changeColor(color.blue);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<6; i++){
    arcLeft(100,180);
    left(180-60);
}


// B18
// Initialisation
setPos(100,400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(400);
    left(90);
    forward(100);
    left(180-135);
}


// B19
// Initialisation
setPos(300,600);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    arcLeft(100,180);
    faceRight();
}
up();
arcLeft(50,180);
down();
for(let i=0; i<4; i++){
    arcLeft(100,180);
    faceLeft();
}


// B20
// Initialisation
setPos(100,200);
changeColor(color.aqua);
setLineWidth(10);
faceDown();

// Réalisation
forward(200);
for(let i=0; i<2; i++){
    arcLeft(100,90);
    forward(200);
    arcLeft(100,90);
    forward(300);
}
faceUp();
forward(200);
faceRight();
forward(400);
faceLeft();
forward(200);
faceDown();
up();
forward(50);
down();
arcLeft(0,90);
arcRight(100,360);


// B21
// Initialisation
setPos(300,300);
shiftColor(0.55);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<6; i++){
    forward(200/2);
    left(180-60);
    forward(100/2);
    left(180-60);
    forward(200/2);
    right(180-120);
    forward(100/2);
    right(180-60);
    forward(100/2);
    up();
    right(180-60);
    forward(200/2);
    down();
    shiftColor(0.11)
}


// B22
// Initialisation
setPos(300,400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
left(180-150);

// Réalisation
for(let i=0; i<6; i++){
    forward(200);
    left(180-120);
}
changeColor(color.red);
right(90);
for(let i=0; i<3; i++){
    forward(200);
    right(180-60);
}
changeColor(color.green);
for(let i=0; i<4; i++){
    forward(200);
    left(90);
}
right(180-120);
for(let i=0; i<4; i++){
    forward(200);
    right(90);
}


// B23
// Initialisation
setPos(100,200);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
left(180-135);

// Réalisation
for(let i=0; i<2; i++){
    for(let j=0; j<3; j++){
        forward(100);
        right(90);
        forward(100);
        left(90);
    }
    right(180-45);
    forward(100);
    right(180-135);
}


// B24
// Initialisation
setPos(100,200);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(200/2);
    left(180-45);
}
forward(100/2);
changeColor(color.green);
for(let i=0; i<3; i++){
    right(180-45);
    forward(200/2);
    left(180-45);
    forward(100/2);
}
forward(100/2);
right(90);
for(let i=0; i<3; i++){
    forward(50/2);
    left(90);
}
right(180);
forward(100/2);
for(let i=0; i<3; i++){
    forward(100/2);
    left(180-45);
    forward(200/2);
    right(180-45);
}


// C1
// Initialisation
setPos(100,300);
changeColor(color.aqua);
faceRight();
setLineWidth(10);

// Réalisation
for(let i = 0 ; i < 2 ; i++) {
    for(let j = 0 ; j < 3 ; j++) {
        forward(100);
        right(120);
    }
    forward(100);
}


// C2
// Initialisation
setPos(300,500);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();

// Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<4; j++){
        forward(100/2);
        right(90);
    }
    up();
    forward(200/2);
    down();
}


// C3
// Initialisation
setPos(100,300);
shiftColor(0.4)
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<8; j++){
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    down();
    shiftColor(0.1);
}


// C4
// Initialisation
setPos(100,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(100/2);
        left(180-60);
    }
    changeColor(color.green);
    for(let j=0; j<4; j++){
        forward(100/2);
        right(90);
    }
    up();
    forward(200/2);
    down();
    changeColor(color.red);
}


// C5
// Initialisation
setPos(300,300);
shiftColor(0.2);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<8; j++){
        forward(200);
        left(180-45);
    }
    right(90);
    shiftColor(0.25);
}


// C6
// Initialisation
setPos(300,400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        forward(200);
        left(180-60);
    }
    forward(200);
}


// C7
// Initialisation
setPos(300,400);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(100);
    for(let j=0; j<3; j++){
        right(180-60);
        forward(100);
    }
    left(180-135);
}


// C8
// Initialisation
setPos(300,400);
changeColor(color.green);
setLineWidth(10);
faceUp();

// Réalisation
forward(400/2);
right(180-135);
for(let i=0; i<5; i++){
    changeColor(color.red);
    for(let j=0; j<3; j++){
        forward(200/2);
        right(180-60);
    }
    changeColor(color.yellow);
    forward(200/2);
    left(90);
}


// C9
// Initialisation
setPos(300,400);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        for(let k=0; k<4; k++){
            right(90);
            forward(100/2);
        }
        forward(100/2);
        right(180-60);
    }
    left(180-60);
    forward(400/2);
}


// C10
// Initialisation
setPos(300,100);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){
        forward(100/2);
        for(let k=0; k<4; k++){
            left(90);
            forward(50/2);
        }
        right(90);
    }
    forward(200/2);
}


// C11
// Initialisation
setPos(300,200);
shiftColor(0.55);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        for(let k=0; k<3; k++){
            forward(100/2);
            left(180-60);
        }
        forward(100/2);
        left(180-120);
    }
    up();
    shiftColor(0.1);
    forward(200/2);
    down();
    right(180-120);
}


// C12
// Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    arcLeft(100,90);
    forward(100);
    left(90);
    arcLeft(100,90);
    forward(100);
    left(90);
    arcRight(100,45);
}
changeColor(color.blue);
arcRight(100,180);
left(180-60);
arcLeft(200,300);


// D1
// Initialisation
setPos(200,100);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(200);
    right(180-135);
}

// D2
// Initialisation
setPos(200,100);
changeColor(color.green);
setLineWidth(10);
faceRight();

// Réalisation
forward(100);
faceDown();
forward(200);
faceRight();
forward(300);
faceUp();
forward(100);
faceLeft();
forward(200);

// D3
// Initialisation
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
forward(200);
right(180-45);
forward(300);
left(180-45);
forward(200);


// D4
// Initialisation
setPos(200,500);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
for(let i=0; i<6; i++){
    faceUp();
    forward(100/2);
    faceLeft();
    forward(100/2);
    faceUp();
    forward(50/2);
    faceRight();
    forward(200/2);
}

// D5
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
for(let i=0; i<4; i++){
    forward(300);
    left(90);
    forward(100);
    left(90);
}
changeColor(color.yellow);
for(let i=0; i<4; i++){
    left(90);
    forward(100);
}


// D6
// Initialisation
setPos(300,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
let longueur=100/2;
forward(longueur);
faceDown();
let longueur=200/2;
forward(longueur);
let longueur=300/2;
faceRight();
forward(longueur);


// D7
// Initialisation
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();

// Réalisation
let longueur=100/2;
forward(longueur);
faceRight();
forward(longueur);
faceUp();
let longueur=200/2;
forward(longueur);
faceLeft();
forward(longueur);
faceDown();
let longueur=100/2;
forward(longueur);

// D8
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();

// Réalisation
let longueur=200;
for(let i=0; i<2; i++){
    forward(longueur);
    faceDown();
}
let longueur=100;
for(let i=0; i<2; i++){
    faceLeft();
    forward(longueur);
    faceUp();
    forward(longueur);
}

// D9
// Initialisation
setPos(300,300);
changeColor(color.blue);
setLineWidth(10);
faceRight();

// Réalisation
let longueur=100;
for(let i=0; i<6; i++){
    forward(longueur);
    right(180-60);
    longueur=longueur+50;
}


// D10
// Initialisation
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();

// Réalisation
let longueur=100;
for(let i=0; i<10; i++){
    forward(longueur);
    right(90);
    longueur=longueur+50;
}


// D11
// Initialisation
setPos(0,300);
changeColor(color.white);
setLineWidth(10);
faceRight();

// Réalisation
let longueur=220;
for(let i=0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(longueur);
        left(180-60);
    }
    forward(longueur);
    longueur=longueur-50;
}


// D12
// Initialisation
setPos(350,320);
changeColor(color.aqua);
setLineWidth(10);
faceRight();

// Réalisation
let length=100;
for(let i=0; i<6; i++){
    for(let j=0; j<3; j++){
        forward(length);
        left(180-60);
    }
    forward(length);
    left(180-120);
    length+=50;
}


// D13
// Initialisation
setPos(350,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();

// Réalisation
let rayon=50;
for(let i=0; i<8; i++){
    arcRight(rayon,180);
    up();
    forward(50);
    down();
    rayon+=50;
}


// D14
// Initialisation
setPos(100,300);
changeColor(color.green);
setLineWidth(10);
faceRight();
left(45);

// Réalisation
let lengthD;
for(let i=0; i<2; i++){
    lengthD=25;
    for(let j=0; j<4; j++){
        forward(lengthD);
        right(90);
        forward(lengthD);
        left(90);
        lengthD+=25;
    }
    right(180);
}


// D15
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceDown();

// Réalisation
let angle=90;
let lg=100;
for(let i=0; i<10; i++){
    forward(lg);
    left(180-angle);
    lg+=20;
    angle+=5;
}
*/

// D16
// Initialisation
setPos(200,200);
changeColor(color.green);
setLineWidth(10);
faceDown();

// Réalisation
let rayon=100;
forward(200);
right(180-60);
forward(100);
faceLeft();
for(let i=0; i<2; i++){
    forward(100);
    right(90);
}
forward(100);
right(90);
left(180-60);
forward(100);
changeColor(color.red);
faceRight();
up();
forward(100);
down();
for(let i=0; i<3; i++){
    arcRight(rayon,180);
    up();
    faceUp();
    forward(rayon*2);
    forward(100);
    faceRight();
    down();
    rayon+=100;
}
