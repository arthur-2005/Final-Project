function setup() {
    var socket = io();
    var matrix = [];
    var side = 30;

    let weatherElement = document.getElementById('weather')
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let vagrCountElement = document.getElementById('vagrCount');
    let rainCountElement = document.getElementById('rainCount');
    let jurcrichCountElement = document.getElementById('jurcrichCount');
    let titanCountElement = document.getElementById('titanCount');


    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let vagrLiveCountElement = document.getElementById('vagrLiveCount');
    let rainLiveCountElement = document.getElementById('rainLiveCount');
    let jurcrichLiveCountElement = document.getElementById('jurcrichLiveCount');
    let titanLiveCountElement = document.getElementById('titanLiveCount');


    socket.on("data", drawCreatures);

    function drawCreatures(data) {

        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        
        vagrLiveCountElement.innerText = data.vagrLiveCounter;
        vagrCountElement.innerText = data.vagrCounter;
        
        rainLiveCountElement.innerText = data.rainLiveCounter;
        rainCountElement.innerText = data.rainCounter;
        
        jurcrichLiveCountElement.innerText = data.jurcrichLiveCounter;
        jurcrichCountElement.innerText = data.jurcrichCounter;
        
        titanLiveCountElement.innerText = data.titanLiveCounter;
        titanCountElement.innerText = data.titanCounter;



        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');


        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "Summer") {
                        fill("green");
                    } else if (data.weather == "Autumn") {
                        fill("#53cc1b");
                    }
                    else if (data.weather == "Winter") {
                        fill("#b7f59a");
                    }
                    else if (data.weather == "Spring") {
                        fill("#6eeb34");
                    }
                } else if (matrix[i][j] == 2) {
                    if (data.weather == "Summer") {
                        fill("#abad15");
                    } else if (data.weather == "Autumn") {
                        fill("#9fa12f");
                    }
                    else if (data.weather == "Winter") {
                        fill("#f3f598");
                    }
                    else if (data.weather == "Spring") {
                        fill("#fcff26");
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "Summer") {
                        fill("#fa0000");
                    } else if (data.weather == "Autumn") {
                        fill("#700707");
                    }
                    else if (data.weather == "Winter") {
                        fill("#f59898");
                    }
                    else if (data.weather == "Spring") {
                        fill("#00ff44");
                    }
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "Summer") {
                        fill("#0051ff");
                    } else if (data.weather == "Autumn") {
                        fill("#427bf5");
                    }
                    else if (data.weather == "Winter") {
                        fill("#68e2f2");
                    }
                    else if (data.weather == "Spring") {
                        fill("#68b9f2");
                    }
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "Summer") {
                        fill("#a600ff");
                    } else if (data.weather == "Autumn") {
                        fill("#dd00ff");
                    }
                    else if (data.weather == "Winter") {
                        fill("#ff00b7");
                    }
                    else if (data.weather == "Spring") {
                        fill("#00ff44");
                    }
                }else if (matrix[i][j] == 6) {
                    if (data.weather == "Summer") {
                        fill("#000000");
                    } else if (data.weather == "Autumn") {
                        fill("#403c3c");
                    }
                    else if (data.weather == "Winter") {
                        fill("#212121");
                    }
                    else if (data.weather == "Spring") {
                        fill("#545454");
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }

}
