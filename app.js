function nbYear(p0, percent, aug, p) {

    let myPer = percent / 100;

    // let year1 = p0 + (p0 * myPer) + aug;
    // let year2 = year1 + (year1 * myPer) + aug;
    // myInt = parseInt(year2);
    // let year3 = myInt + (myInt * myPer) + aug;
    // return parseInt(year3);

    let myCount = 0;
    while (p0 < p) {
        p0 = p0 + parseInt((p0 * myPer) + aug);
        myCount = myCount + 1;
    }
    return myCount
}

console.log(nbYear(1500, 5, 100, 5000)); // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
console.log(nbYear(1000, 2, 50, 1200)); // 3