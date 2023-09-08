var yourName = prompt("What is your name");
console.log("Halo ".concat(yourName));
var q1;
q1 = String(prompt("Mata-mata apa yang nggak bisa pake kacamata?"));
if (q1Answer(q1)) {
    console.log("Yeay benarrr");
}
else {
    console.log("jawabannya salah");
}
function q1Answer(answer) {
    answer = answer.toLowerCase();
    var keyAnswer = "mata kaki";
    if (answer === keyAnswer) {
        return true;
    }
    return false;
}
