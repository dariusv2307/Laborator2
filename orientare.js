window.addEventListener("deviceorientation", onDeviceOrientation);

function onDeviceOrientation(evt) {
    var gamma = evt.gamma;
    document.getElementById("gammaValue").innerHTML = "Gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    var radius = 50 + Math.abs(gamma) * 2;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.fillStyle = "#6A0888";
    context.fill();
    context.stroke();
}
