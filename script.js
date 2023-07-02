const title = document.getElementById("title");
const results = document.getElementById("results");
const summary = document.getElementById("summary");
const rsp = document.getElementById("return-response");
function deploy() {
    title.innerText = "Your Results";
    results.setAttribute("style", "height: 460px");
    summary.setAttribute("style", "height: 0px");
    summary.setAttribute("style", "display: none");
}
function back() {
    title.innerText = "Click here to see your results";
    results.setAttribute("style", "height: 60px");
    summary.setAttribute("style", "height: 426px");
    summary.setAttribute("style", "display: flex");
}