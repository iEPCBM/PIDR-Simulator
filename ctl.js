var interval;
var isPause = true;

var pidr;
var sym;
var lastVal = 0;

function loop () {
    if (isPause)
        return;

    let sval = parseFloat(document.getElementById("sval").value);

    let stp = parseFloat(document.getElementById("step").value);
    let ny = pidr.update(sval, lastVal, stp);
    let ty = sym.update(ny);

    datapoints_pidr.push(ny);
    datapoints_proc.push(ty);
    lastVal = ty;
    datapoints_sval.push(sval);

    labels.push(labels.length.toString());
    chart.update();
}

function pause() {
    isPause = !isPause;
}

function reset() {
    clearInterval(interval);
    interval = undefined;
    isPause = true;
    pidr.I = 0;
}

function clrplot() {
    datapoints_proc.splice(0,datapoints_proc.length);
    datapoints_pidr.splice(0,datapoints_pidr.length);
    datapoints_sval.splice(0,datapoints_sval.length);
    labels.splice(0,labels.length);
}

function start() {
    let y_min = parseFloat(document.getElementById("y_min").value);
    let y_max = parseFloat(document.getElementById("y_max").value);
    let k = parseFloat(document.getElementById("k").value);
    let td = parseFloat(document.getElementById("td").value);
    let ti = parseFloat(document.getElementById("ti").value);

    pidr = new PIDR(y_min, y_max, k, ti, td);

    let y_min_c = parseFloat(document.getElementById("y_min_c").value);
    let y_max_c = parseFloat(document.getElementById("y_max_c").value);
    let dk = parseFloat(document.getElementById("dk").value);
    let y0 = parseFloat(document.getElementById("y0").value);
    let delta = parseFloat(document.getElementById("delta").value);

    sym = new Sym(y0, y_min_c, y_max_c, dk, delta);

    let dom_stp = document.getElementById("step");
    interval = setInterval(loop, dom_stp.value*1000);
    isPause = false;
}