/**Двигающаяся сущность
 * @constructor
 * @param {number} x координата по оси x
 * @param {number} y координата по оси y
 * @param {number} orientation напрвление сущности*/
function Actor(x, y, orientation) {
    /**Требуемая координата по оси x*/this.reqX = x;
    /**Требуемая координата по оси y*/this.reqY = y;
    /**Требуемое направление*/this.reqOrientation = orientation;
    /**Текущая координата по оси x*/this.curX = x;
    /**Текущая координата по оси y*/this.curY = y;
    /**Текущее направление*/this.curOrientation = orientation;
    /**Уровень сущности (прокачанность)*/this.level = 1;
    /**Константа, на которую изменяется положение сущности (умножается на уровень)
     * @const*/this.SPEED_QUANT = 0.025;
    //this.memory = [];
    /**Изображение, отрисовываемое на месте сущности*/
    this.image = new Image();
    this.image.src = "./img/actors/player.png";

    /**Нужно ли сущности двигаться (находится ли она в требуемом положении)*/
    this.isReady = function () {
        return this.reqX == this.curX && this.reqY == this.curY
            && this.reqOrientation == this.curOrientation;
    };

    /**Перемещение сущности:
     * рассчитывает разницу между текущим и требуемым положением, изменяет
     * положение на величину, не превосходящую по модулю SPEED_QUANT * level*/
    this.move = function () {
        var speed = this.SPEED_QUANT * this.level;
        var dx = this.reqX - this.curX;
        var dy = this.reqY - this.curY;
        var da = this.reqOrientation - this.curOrientation;
        if (Math.abs(dx) < speed)
            this.curX = this.reqX;
        else
            this.curX += speed * this.signum(dx);

        if (Math.abs(dy) < speed)
            this.curY = this.reqY;
        else
            this.curY += speed * this.signum(dy);

        if (Math.abs(da) < speed)
            this.curOrientation = this.reqOrientation;
        else
            this.curOrientation += speed * this.signum(da);
    };

    this.signum = function (a) {
        return a > 0 ? 1 : a == 0 ? 0 : -1;
    };
}

Actor.NORTH = 0;
Actor.EAST = 1;
Actor.SOUTH = 2;
Actor.WEST = 3;
Actor.MAX_LEVEL = 5;