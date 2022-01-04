function init() {
  c("init");
}

function main() {
  init();
}

window.onload = function () {
  main();
};
c("hello");

//c(job);
//c(year);

var me = "johns";
let job = "junior exec";
const year = 1941;

c(addNumbers(8, 7));
c(addDecl(8, 7));
c(addStuff(7, 6));

const addDecl = (a, b) => a + b;

function addNumbers(a, b) {
  return a + b;
}

const addStuff = function (a, b) {
  return a + b;
};
