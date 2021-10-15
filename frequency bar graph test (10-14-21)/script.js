// Get DOM elements
const canvas = document.getElementById('canvas');
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');

const canvasCtx = canvas.getContext("2d");

// set audio context and analyser node
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioCtx.createAnalyser();

// define analyser node and link to source audio
var source = audioCtx.createMediaElementSource(audio);
source.connect(analyser);

visualize();

function visualize() {
    // set up analyser and data array
    analyser.fftSize = 256;  // # of bins of analysis window
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);  // array of 8bit unsigned integers

    // clear current canvas display
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    var draw = function() {
        // set up loop w/ requestAnimationFrame() so it keeps updating and clearing w/ ea frame
        var drawVisual = requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        // set barWidth to canvas width divided by # of bars (buffer length)
            // multiplying by 2.5 so it's not showing sub-audible ranges
        var barWidth = (canvas.width / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        // loop through each value in dataArray
        for (i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            canvasCtx.fillStyle = 'rgb(100 , 192, 203)';
            canvasCtx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

            x += barWidth + 1;
        }
    }
    draw();
}


function playSong() {
    audio.play();
    audio2.play();
}