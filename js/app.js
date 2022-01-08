"use strict";

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

let lastName = "Miller";
let previousName = lastName;
lastName = "Davis";

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 26,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
