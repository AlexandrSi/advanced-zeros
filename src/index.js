module.exports = function getZerosCount(number, base) {
    var n = 0;
    var x;

    for (var t=2; t<=base; t++) {
        if (base%t==0&&isSimpleNumb(t)){
            x=t;
        }
    }
    while(number >= x){
        number = Math.floor(number / x);
        n+= number;
    }
    return n;
}
function isSimpleNumb (numb) {
        var isNumb = true;
        for (var j = 2; j<numb; j++){
            if (numb % j == 0){
                isNumb = false;
            }
        }
    return isNumb;
}