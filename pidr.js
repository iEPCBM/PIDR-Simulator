class PIDR {
    constructor(yMin, yMax, K, TI, TD) {
        this.yMin = yMin;
        this.yMax = yMax;
        this.K = K;
        this.TI = TI;
        this.TD = TD;
        this.prevErr = 0;
        this.I = 0;
        this.val = 0;
    }

    update(sval, currentVal, dt) {
        let p = sval - currentVal;
        this.I += (sval - currentVal) * dt * this.TI;
        if (this.I > this.yMax)
            this.I = this.yMax;
        else if (this.I < this.yMin)
            this.I = this.yMin;
        let D = (p - this.prevErr) / dt;
        this.prevErr = p;

        this.val = this.K * p + this.I + D * this.TD;
        if (this.val > this.yMax)
            this.val = this.yMax;
        else if (this.val < this.yMin)
            this.val = this.yMin;
        //debugger;
        return this.val;
    }
}

class Sym {
    constructor(startVal, yMin, yMax, dK, delta) {
        this.startVal = startVal;
        this.yMin = yMin;
        this.yMax = yMax;
        this.dK = dK;
        this.delta = delta;
        this.y = startVal;
    }

    update(pidval) {
        if (pidval === undefined) {
            this.y = NaN;
            return NaN;
        }
        if (pidval === NaN) {
            this.y = NaN;
            return NaN;
        }
        let d = pidval - this.y;
        let ty = this.y + d * this.dK;
        if (ty > this.yMax)
            ty = this.yMax;
        else if (ty < this.yMin)
            ty = this.yMin;

        this.y = ty;
        //debugger;
        return ty;
    }
}