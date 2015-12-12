//direction
var Direction = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
//
var global = {
    Width: 480,
    Height: 850
};
//version0.03  2015.02.09
// 游戏对象的基类
function GameObject(x, y, width, height, speed, life, direction, name) {

    this.X = x;
    this.Y = y;
    this.Width = width;
    this.Height = height;
    this.Speed = speed;
    this.Life = life;
    this.Direction = direction;
    this.Name = name;

    //提供给子类改写  限制X Y坐标
    this.CoordinateSetting = function () {

    };
    this.Move = function () {
        $('#' + this.Name + '').css({
            'top': '' + this.Y + 'px',
            'left': '' + this.X + 'px'
        });
    };
    this.Draw = function () {
        this.CoordinateSetting();
        this.Move();
    };
    this.removeObject = function () {
        $('#' + this.Name + '').remove();
    };
    this.init = function () {
        $('#GameField').append('<div id="' + this.Name + '"></div>');
        $('#' + this.Name + '').css({
            'width': '' + this.Width + 'px',
            'height': '' + this.Height + 'px',
            'position': 'absolute',
            'top': '' + this.Y + 'px',
            'left': '' + this.X + 'px',
            'background': 'url(' + this.Image.Url + ')'
        });
    }
    this.init();
    return this;
}

//------------Background 类 ------------//
var Background = function (x, y, speed, name) {
    this.Image = {
        Width: 480,
        Height: 852,
        Url: 'Images/background.png'
    };

    GameObject.call(this, x, y, this.Image.Width, this.Image.Height, speed, 0, 'DOWN', name);

    this.CoordinateSetting = function () {
        this.Y += this.Speed;
        if (this.Y >= global.Height) {
            this.Y = -global.Height;
        }
    };
};

//------------Score 类 ------------//
var Score = function (x, y, name) {
    this.Image = {
        Width: 100,
        Height: 50,
        Url: ''
    };

    GameObject.call(this, x, y, this.Image.Width, this.Image.Height, 0, 0, 'DOWN', name);
    this.CoordinateSetting = function () {
        $('#' + this.Name + '').text('Score : ' + single.getScore());
    };
};

//------------PlaneParent 类 ----------//
var PlaneParent = function (x, y, speed, life, direction, image, name) {
    this.Image = image;
    GameObject.call(this, x, y, this.Image.Width, this.Image.Height, speed, life, direction, name);
    this.Fire = function () {
    };
};

//------------PlaneHero 类 ----------//
var PlaneHero = function (x, y, speed, life) {
    this.Image = {
        Width: 102,
        Height: 126,
        Url: 'Images/hero.png'
    };
    PlaneParent.call(this, x, y, speed, life, 'UP', this.Image, 'Hero');
    this.CoordinateSetting = function () {
        if (this.X >= global.Width - this.Width / 2) {
            this.X = global.Width - this.Width / 2;
        }
        if (this.X <= -this.Width / 2) {
            this.X = -this.Width / 2;
        }
        if (this.Y <= 0) {
            this.Y = 0;
        }
        if (this.Y >= global.Height - this.Height) {
            this.Y = global.Height - this.Height
        }
    };
    this.KeyMove = function (direction) {
        if (direction) {
            switch (direction) {
                case 'UP':
                    this.Y -= this.Speed;
                    break;
                case 'DOWN':
                    this.Y += this.Speed;
                    break;
                case 'LEFT':
                    this.X -= this.Speed;
                    break;
                case 'RIGHT':
                    this.X += this.Speed;
                    break;
            }
        }
    };
    this.Fire = function () {
        single.setBulletHero(new BulletHero(this, 20, 1, 'BulletHero' + (single.getBulletHeroCount() + 1)));
    };
};

//------------PlaneEnemy 类 ----------//
var PlaneEnemy = function (x, y, type) {
    this.Images = [
        {
            Width: 57,
            Height: 43,
            Url: 'Images/enemy1.png'
        },
        {
            Width: 69,
            Height: 99,
            Url: 'Images/enemy2.png'
        },
        {
            Width: 169,
            Height: 258,
            Url: 'Images/enemy3.png'
        }
    ];
    this.Lifes = [1, 2, 3];
    this.Speeds = [30, 25, 20];
    this.Type = type;
    PlaneParent.call(this, x, y, this.Speeds[type], this.Lifes[type], 'DOWN', this.Images[type], 'PlaneEnemy' + (single.getPlaneEnemyCount() + 1));
    this.CoordinateSetting = function () {
        this.Y += this.Speed;
        if (this.Y >= global.Height) {
            //remove object
            this.removeObject();
            single.removePlaneEnemy(this);
        }
    };
    this.IsLive = function () {
        if (this.Life <= 0) {

            this.removeObject();

            single.removePlaneEnemy(this);
            // 播放爆炸页面
            single.setBoomPlaneEnemy(new BoomPlaneEnemy(this.Type, this, 'BoomPlaneEnemy' + single.getBoomPlaneEnemyCount()));
            //移除爆炸页面对象
        }
    };
};

//------------BulletParent 类 ----------//
var BulletParent = function (planeObject, image, speed, direction, power, name) {
    this.PlaneObject = planeObject;
    this.Power = power;
    var startPointX, startPointY;
    //ajust X Y to fix the bullet position
    if (direction === 'UP') {
        startPointX = planeObject.X + planeObject.Width / 2 - image.Width / 2;
        startPointY = planeObject.Y;
    } else if (direction === 'DOWN') {
        startPointX = planeObject.X + planeObject.Width / 2;
        startPointY = planeObject.Y + planeObject.Height;
    }
    GameObject.call(this, startPointX, startPointY, image.Width, image.Height, speed, 0, direction, name);
};

//------------BulletHero 类 ----------//
var BulletHero = function (planeObject, speed, power, name) {
    this.Image = {
        Width: 5,
        Height: 11,
        Url: 'Images/heroBullet.png'
    };
    BulletParent.call(this, planeObject, this.Image, speed, 'UP', power, name)
    this.CoordinateSetting = function () {
        this.Y -= this.Speed;
        if (this.Y <= -this.Height) {
            this.removeObject();
            single.removeBullerHero(this);
        }
    };

};

//------------BulletEnemy 类 ----------//

//------------GameLoading 类 ----------//
var GameLoadingParent = function (x, y, image, name) {
    GameObject.call(this, x, y, image.Width, image.Height, 0, 0, 'Hold', name);
    this.removeObject = function () {
        $('#' + this.Name + '').animate({
            left: '480px'
        }, 3000, function () {
            this.remove();
        });
    };
};

//------------GameLoading 类 ----------//
var GameLoadingFly = function (x, y) {
    this.Image = {
        Width: 186,
        Height: 38,
        Url: 'Images/game_loading1.png'//, 'Images/game_loading2.png', 'Images/game_loading3.png']
    };
    this.Index = 0;
    this.ImageUrl = ['Images/game_loading1.png', 'Images/game_loading2.png', 'Images/game_loading3.png'];
    GameLoadingParent.call(this, x, y, this.Image, 'GameLoadingFly');
    this.Draw = function () {
        this.Index++;
        if (this.Index >= this.ImageUrl.length) {
            this.Index = 0;
        }
        $('#' + this.Name + '').css({
            'background': 'url(' + this.ImageUrl[this.Index] + ')',
            'z-index': '9999'
        });
    };
};

//------------GameLoadingCopyRight 类 ----------//
var GameLoadingCopyRight = function (x, y) {
    this.Image = {
        Width: 441,
        Height: 225,
        Url: 'Images/copyright.png'
    };
    GameLoadingParent.call(this, x, y, this.Image, 'GameLoadingCopyRight');
};

//------------GameLoadingStart 类 ----------//
var GameLoadingStart = function (x, y) {
    this.Image = {
        Width: 60,
        Height: 45,
        Url: 'Images/start.png'
    };
    this.Status = 'FirstStart';
    GameLoadingParent.call(this, x, y, this.Image, 'GameLoadingStart');
    this.Stop = function () {
        single.stopTimer();
    };
    this.Start = function () {
        var self = this;
        $('#' + this.Name + '').click(function () {
            if (self.Status === 'FirstStart') {
                GameMessager.trigger('FirstStart');
                self.Status = 'Pause';
                $(this).css('background', 'url(Images/stop.png)');
            } else if (self.Status === 'Pause') {
                self.Stop();
                $(this).css('background', 'url(Images/start.png)');
                self.Status = 'BackToGame';
                //todo:show pause 
            } else if (self.Status === 'BackToGame') {
                self.Status = 'Pause';
                $(this).css('background', 'url(Images/stop.png)');
                single.setTimer();
            }
        });
    };

    this.removeEvent = function () {
        $('#' + this.Name + '').click = null;
    };
};

//------------BoomParent 类 ----------//
var BoomParent = function (image, planeObject, name) {
    this.Image = image;
    GameObject.call(this, planeObject.X, planeObject.Y, this.Image.Width, this.Image.Height, 0, 0, 'DOWN', name);
};

var BoomPlaneEnemy = function (type, planeObject, name) {
    this.Type = type;
    var planeEnemy1 = [
		{
		    Width: 57,
		    Height: 51,
		    Url: 'Images/enemy1_down1.png'
		},
		{
		    Width: 57,
		    Height: 51,
		    Url: 'Images/enemy1_down2.png'
		},
		{
		    Width: 57,
		    Height: 51,
		    Url: 'Images/enemy1_down3.png'
		}
    ];
    var planeEnemy2 = [
		{
		    Width: 69,
		    Height: 95,
		    Url: 'Images/enemy2_down1.png'
		},
		{
		    Width: 69,
		    Height: 95,
		    Url: 'Images/enemy2_down2.png'
		},
		{
		    Width: 69,
		    Height: 95,
		    Url: 'Images/enemy2_down3.png'
		}
    ];
    var planeEnemy3 = [
		{
		    Width: 165,
		    Height: 260,
		    Url: 'Images/enemy3_down1.png'
		},
		{
		    Width: 165,
		    Height: 260,
		    Url: 'Images/enemy3_down2.png'
		},
		{
		    Width: 165,
		    Height: 260,
		    Url: 'Images/enemy3_down3.png'
		},
		{
		    Width: 165,
		    Height: 260,
		    Url: 'Images/enemy3_down4.png'
		},
		{
		    Width: 165,
		    Height: 260,
		    Url: 'Images/enemy3_down5.png'
		}
    ];

    this.GetImages = function () {
        switch (this.Type) {
            case 0:
                return planeEnemy1;
                break;
            case 1:
                return planeEnemy2;
                break;
            case 2:
                return planeEnemy3;
                break;
        }
        return [];
    };
    BoomParent.call(this, this.GetImages(this.Type)[0], planeObject, name);
    this.Index = 0;
    this.Draw = function () {
        this.Index++;

        $('#' + this.Name + '').css({
            'background': 'url(' + this.GetImages(this.Type)[this.Index] + ')',
            'z-index': '9999'
        });
        if (this.Index >= this.GetImages(this.Type).length) {
            //销毁飞机
            this.Index--;
            this.removeObject();
            single.removeBoomPlaneEnemy(this);

        }
    };
};

////----------test-------
//var PH = new PlaneEnemy(78, 87,0);
////var PH2 = new PlaneHero(789, 87, 10, 10);
//console.log(PH);
