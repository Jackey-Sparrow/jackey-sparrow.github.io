
//游戏面板
function GameField() {
    //add the map cs
    $('#GameField').css(
		{
		    'width': '' + global.Width + 'px',
		    'height': '' + global.Height + 'px',
		    'position': 'relative',
		    'overflow': 'hidden'
		});
};

// 游戏初始化
function InitalGame() {

    GameField();

    //todo : stop the game

    //start Game
    //background event
    GameMessager.trigger('GameInitial');

    //todo : the planeHero can move after the keyTouch event ,but it's not smooth
    //refresh method
    //refresh every 1 second
    single.setTimer();
}

(function ($) {
    //Init
    InitalGame();

    //touch keyboard to control plane's direction
    $(document).keydown(function (e) {

        var direction = null;
        if (e.keyCode === 87 || e.keyCode === 38) {		   // key 'W' and 'UP'
            direction = 'UP';
        } else if (e.keyCode === 65 || e.keyCode === 37) { // key 'A' AND 'LEFT'
            direction = 'LEFT';
        } else if (e.keyCode === 68 || e.keyCode === 39) { // key 'D' AND 'RIGHT'
            direction = 'RIGHT';
        } else if (e.keyCode === 83 || e.keyCode === 40) { // key 's' and 'DOWN'
            direction = 'DOWN';
        }
        if (single.getPlaneHero()) {
            single.getPlaneHero().KeyMove(direction);
        }
    });
})(jQuery);
