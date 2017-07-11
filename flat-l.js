(function (window) {
    'use strict';
    var _isStarted = false;
    var _options = [];
    var _timer;

    function define_flatL() {
        var flatL = {};

        flatL.start = function (options) {
            
            for (var i = 0; i < _options.length; i++)
            {
                if (_options[i].container.id == options.container.id)
                {
                    _options[i].beatColor = options.beatColor;
                    _options[i].flatColor = options.flatColor;
                    _options[i].flatLined = false;
                    return;
                }
            }


            
            
            options.flatLined = false;
            
            options.moved = -0.25;
            options.startingIndex = 0;
            _options.push(options);

            addCanvas(options);

            if (!_isStarted)
            {
                _timer = setInterval(draw, 20)
                _isStarted = true;
            }



        };

        flatL.flatLine = function (element) {
            for (var i = 0; i < _options.length; i++)
            {
                if (_options[i].container.id == element.id)
                    _options[i].flatLined = true;
            }
        };
                

        flatL.stop = function () {
            _isStarted = false;
            clearInterval(_timer);
            for (var z = 0; z < _options.length; z++)
            {
                _options[z].container.innerHTML = "";
            }
            _options = [];
            console.log("Stopped all flatL's");
        }

        return flatL;
    }

    function addCanvas(options)
    {
        var container = options.container;
        var canvas = document.createElement("canvas");
        canvas.id = container.id + "canvas";
        canvas.width = container.width;
        canvas.height = container.height;
        container.appendChild(canvas);
        
    }


    function draw()
    {
        if (_isStarted) {
            for (var i = 0; i < _options.length; i++) {
                var currOptions = _options[i];
                var currCanvas = document.getElementById(currOptions.container.id + "canvas");


                var width = currOptions.container.clientWidth;
                var height = currOptions.container.clientHeight;
                currCanvas.height = height;
                currCanvas.width = width;
                if (_options[i].flatLined) {

                    var lineLength = 0.75 * width;
                    var startingPos = currOptions.moved * width;

                    _options[i].moved += 0.03;

                    if (_options[i].moved >= 1.75)
                        _options[i].moved = -0.75;

                    var ctx = currCanvas.getContext("2d");

                    ctx.beginPath();
                    ctx.strokeStyle = _options[i].flatColor;
                    ctx.moveTo(startingPos, 0.5 * height);
                    ctx.lineTo(startingPos + lineLength, 0.5 * height);
                    ctx.stroke();
                }
                else {
                    var points = getPoints(width, height);
                    var ctx = currCanvas.getContext("2d");

                    var index = _options[i].startingIndex;
                    _options[i].startingIndex += 2;



                    var upperLimit = ((index + 75) > 250 ? 250 : index + 75);

                    ctx.beginPath();
                    ctx.strokeStyle = _options[i].beatColor;
                    ctx.moveTo(points[index].x, points[index].y);
                    for (var j = index; j < upperLimit; j++) {
                        ctx.lineTo(points[j].x, points[j].y);
                    }
                    ctx.stroke();

                    _options[i].startingIndex = (_options[i].startingIndex >= 250 ? 0 : _options[i].startingIndex);

                }
            }
        }
    }

    function getX(percentage, width)
    {
        return percentage * width;
    }

    function getY(percentage,height)
    {
        if (percentage < 0.4 || percentage > 0.6)
        {
            return 0.5 * height;
        }
        else if (percentage >= 0.4 && percentage <= 0.45)
        {
            return height * 0.5 - height * 0.5 * (percentage - 0.4) * 20;
        }
        else if (percentage >= 0.45 && percentage <= 0.55)
        {
            return height * (percentage - 0.45) * 10;
        }
        else if (percentage >= 0.55 && percentage <= 0.6)
        {
            return (height  - (height * 0.5)* 20 * (percentage - 0.55));
        }
    }

    function getPoints(width, height) {

        var arr = new Array();

        for (var i = -75; i < 175; i++)
        {
            arr.push({
                x: getX(i / 100, width),
                y: getY(i/ 100,height)
            });
        }

        return arr;
    }
    //define globally if it doesn't already exist
    if (typeof (flatL) === 'undefined') {
        window.flatL = define_flatL();
    }
    else {
        console.log("Library already defined.");
    }
})(window);
