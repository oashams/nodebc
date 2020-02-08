let star = "**********";
let num = 10;

while (num > 0){

    console.log(star);
    star = star.slice(0,star.length-1);
    num--;
}
