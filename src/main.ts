import * as Dedent from "dedent";
import Message from "./Message";
import Track from "./Track";

$(document).ready(() => {
    let ws = new WebSocket("ws://localhost:5672/");
    ws.onmessage = (e: MessageEvent) => {
        let data: Message = JSON.parse(e.data);
        console.log(data.channel);

        switch (data.channel)
        {
            case "playState":
                if (data.payload)
                {
                    $("#playState").html(
                        Dedent(`
                            <button class="btn-floating btn-large waves-effect waves-light orange darken-2">
                                <i class="material-icons">pause</i>
                            </button>`));
                }
                else
                {
                    $("#playState").html(
                        Dedent(`
                            <button class="btn-floating btn-large waves-effect waves-light grey lighten-1">
                                <i class="material-icons">play_arrow</i>
                            </button`));
                }
                break;

            case "track":
                if (data.payload)
                {
                    let track = data.payload as Track;
                    $("#title").text(track.title);
                    $("#album").text(track.album);
                    $("#artist").text(track.artist);
                    $("#albumArt").attr("src", track.albumArt);
                }
                break;
        }
    }

    $(".musicTag").each(
        function () {
            observer.observe($(this).get(0), { childList: true });
        });
});

let observer = new MutationObserver(
    (mutations) => {
        for (let mutation of mutations)
        {
            let element = $(mutation.target);

            if (
                element.prop("scrollWidth") > element.prop("clientWidth") &&
                element.children(".marquee").length === 0)
            {

                let div = document.createElement("div");
                $(div).addClass("marquee");
                $(div).text(element.text());
                element.empty().append(div);
            }
        }});