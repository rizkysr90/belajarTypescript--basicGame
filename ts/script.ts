let yourName = prompt("What is your name");
console.log(`Halo ${yourName}`);
let q1: string;
q1 = String(prompt("Mata-mata apa yang nggak bisa pake kacamata?"));
if (q1Answer(q1)) {
  console.log("Yeay benarrr");
} else {
  console.log("jawabannya salah");
}
function q1Answer(answer: string): boolean {
  answer = answer.toLowerCase();
  const keyAnswer = "mata kaki";
  if (answer === keyAnswer) {
    return true;
  }
  return false;
}
