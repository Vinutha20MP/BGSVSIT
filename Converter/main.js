document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerText = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerText = feet * 30.48;
})

document.getElementById("metersInput").addEventListener("input", e => {
    let meters = e.target.value;
    document.getElementById("msOutput").innerText = meters * 1.778;
})

document.getElementById("celciousInput").addEventListener("input", e => {
    let celcious = e.target.value;
    document.getElementById("FahrenheitOutput").innerHTML = (celcious * 1.8) + 32;
})