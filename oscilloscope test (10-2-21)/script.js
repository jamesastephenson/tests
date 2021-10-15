// Reference Link: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API#basic_concepts

// get dom elements
const output = document.getElementById("output");
const canvas = document.getElementById("canvas");
const audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2');

var canvasCtx = canvas.getContext("2d"); // needed to get canvas context to use clearRect

// create analyzer node
    // needed to extract data from your audio source
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var analyser = audioContext.createAnalyser();
// the node is then connected to your audio source at some point b/w the source an destination

var source = audioContext.createMediaElementSource(audio);
// connect node to audio source
source.connect(analyser);

visualize();

// Draws canvas, sets buffer length, creates data array
    // Calls draw function, which self-loops
function visualize() {
    // set up buffer pattern
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    var draw = function() {
        // use requestAnimationFrame() to keep looping draw function once it has started
        var drawVisual = requestAnimationFrame(draw);
    
        // grab time domain data and copy into our array
        analyser.getByteTimeDomainData(dataArray);
    
        // fill canvas with solid color
        canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
    
        // set line width and stroke color for wave that will be drawn
        canvasCtx.lineWidth = 1;
        canvasCtx.strokeStyle = 'rgb(255, 192, 203)';
        canvasCtx.beginPath(); // begin drawing a path
    
        // determine width of each line segment by dividing canvas width by array len
        var sliceWidth = canvas.width * 1.0 / bufferLength;
        var x = 0; // x defines the position to move to for drawing each segment of the line
    
        // loop, defining position of a small segment of the wave for each point int he buffer
            // height based on data point value from the array
            // then move line across to the place where the next wave segment should be drawn
        for (i = 0; i < bufferLength; i ++) {
            var v = dataArray[i] / 128.0;  // note: 128 is 1/16 of total analyser fft size
            var y = v * canvas.height/2;
    
            if (i == 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
    
            x += sliceWidth;
        }
    
        // finish the line in the middle of the right hand side of the canvas
        // then draw the stroke we have defined
        canvasCtx.lineTo(canvas.width, canvas.height/2);
        canvasCtx.stroke();
    }

    draw();
}

function playSong() {
    // the one actually playing
    audio2.play();

    // oscilloscope reading and playing
        // was getting a playback error where we didn't get source audio
        // doubled audio.play()
            // probably a more efficient way to do this
    audio.play();
    
}