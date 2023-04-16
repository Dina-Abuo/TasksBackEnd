class rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get get_awidth() {
        return this.width;
    }

    set set_width(w) {
        if (!Number.isInteger(w)) {
            throw new Error("Width be must intager value");
        }
        else if (w <= 0) {
            throw new Error("Width be must positive value");
        }
        else {
            this.width = w;
        }
    }
    get get_height() {
        return this.height;
    }

    set set_height(h) {
        if (!Number.isInteger(h)) {
            throw new Error("height be must intager value");
        }
        else if (h <= 0) {
            throw new Error("height be must positive value");
        }
        else {
            this.height = h;
        }
    }


    Area() {
        return this.height * this.width;
    }

    Perimiter() {
        return 2 * (this.height + this.width);
    }

    drowRec(s) {
        let rec = " ";
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                rec += s;
            }
            console.log(rec);
            rec = " ";
        }
    }

}

rec = new rectangle(3, 5);
console.log(rec.width)
console.log(rec.height)
console.log(rec.Area)
console.log(rec.Perimiter)
drowRec(o);




///////////////////////////// task2 ////////////////////


class square extends rectangle {

    constructor(x) {
        super(x, x);
    }
}

squ = new square();
console.log(squ.Area)
console.log(squ.Perimiter)
drowRec('*');


