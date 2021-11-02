const sentence = "hello there from lighthouse labs";
let t = 50
e = sentence.length * t;
for (let i = 0; i < sentence.length; i++){

  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, t);
t += 50;
}
setTimeout(() => {
  console.log("\n")
}, e)