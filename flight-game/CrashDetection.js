
//Crash Detection
//it can be override if necessary
var GetRectangleCenter = function (rectangle) {
    var x = rectangle.X,
    y = rectangle.Y,
    width = rectangle.Width;
    height = rectangle.Height;
    return {
        X: x - width / 2,
        Y: y + height / 2
    }
};

var GetRadius = function (rectangle) {
    width = rectangle.Width;
    height = rectangle.Height;
    return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
};

var GetCrashDection = function (rectangle1, rectangle2) {
    var distance, realDistance;
    var center1 = GetRectangleCenter(rectangle1);
    var center2 = GetRectangleCenter(rectangle2);
    realDistance = Math.sqrt(Math.pow((center1.X - center2.X), 2) + Math.pow((center1.Y - center2.Y), 2));
    distance = GetRadius(rectangle1) + GetRadius(rectangle2);
    return realDistance - distance <= 0;
};