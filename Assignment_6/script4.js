
const var1 = 4; 
let scr4Func = (arg1) => {
    alert(arg1);
    console.log(arg1);
}

if (var1 > 5) {
    scr4Func(var1/2);
} else if (var1 < 5) {
    scr4Func(var1*2);
} else {
    scr4Func(var1);
}

