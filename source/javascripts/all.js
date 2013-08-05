//= require jquery-1.10.2.min.js

$(document).ready(function () {
    var trackId = 1047954,
        sound = loadMusic(trackId);

    $('#play').click(function (event) {
        event.preventDefault();
        if (!sound instanceof Audio) {
            sound = loadMusic(trackId);
        }
        sound.play();
    });

    $('#stop').click(function (event) {
        event.preventDefault();
        if (sound instanceof Audio && !sound.ended) {
            sound.pause();
        }
    });

    $(sound).on('ended', function () {

    });

    function loadMusic(trackId) {
        var sound,
            baseUri = "http://api.jamendo.com/v3.0/tracks/file?client_id=f084fb62&id=";
        try {
            sound = new Audio(baseUri + trackId);
        } catch (error) {
            alert("Error: can't load audio file");
            return;
        }
        return sound;
    }
});
