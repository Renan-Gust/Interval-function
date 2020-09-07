var stopFunction;

function start() {
    var timeInterval= document.querySelector("#time").value

    stopFunction = setInterval(() => {
        var inputValue = document.querySelector("#message").value

        var result = document.querySelector("#result")
        result.innerHTML += inputValue + "<br/>"

    }, timeInterval);
}

function stop() {
    clearInterval(stopFunction)
}
