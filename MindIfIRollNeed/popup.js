document.addEventListener('DOMContentLoaded', function() {
    var rollNeedButton = document.getElementById('rollNeed');

    rollNeedButton.addEventListener("click", function() {
        var audio = new Audio;
        audio.src = "need.mp3";
        audio.play();
    });
});